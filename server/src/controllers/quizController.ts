import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import Quiz from '../models/Quiz.js';
import User from '../models/User.js';
import QuestionBank from '../models/QuestionBank.js';
import { AuthRequest } from '../types/index.js';

const generateShareCode = (): string => {
  return crypto.randomBytes(4).toString('hex').slice(0, 7); // e.g. "8f92k3a"
};

// Public/Student discovery: Get all published quizzes
export const getQuizzes = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { subject, difficulty, search, page = '1', limit = '50' } = req.query;

    const query: any = { status: 'published' };

    if (subject && subject !== 'All') {
      query.subject = { $regex: new RegExp(`^${subject}$`, 'i') };
    }

    if (difficulty && difficulty !== 'All') {
      query.difficulty = difficulty;
    }

    if (search) {
      query.$or = [
        { title: { $regex: String(search), $options: 'i' } },
        { description: { $regex: String(search), $options: 'i' } },
      ];
    }

    const pageNum = parseInt(String(page), 10) || 1;
    const limitNum = parseInt(String(limit), 10) || 12;
    const skip = (pageNum - 1) * limitNum;

    const total = await Quiz.countDocuments(query);
    const quizzes = await Quiz.find(query)
      .select('-questions.correctAnswer -questions.explanation')
      .populate('teacher', 'name avatar')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum);

    res.status(200).json({
      success: true,
      total,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum),
      quizzes,
    });
  } catch (error) {
    next(error);
  }
};

// Teacher: Get all quizzes owned by current teacher
export const getTeacherQuizzes = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const { status, subject, search } = req.query;
    const query: any = { teacher: req.user.id };

    if (status && status !== 'All') {
      query.status = status;
    }

    if (subject && subject !== 'All') {
      query.subject = subject;
    }

    if (search) {
      query.title = { $regex: String(search), $options: 'i' };
    }

    const quizzes = await Quiz.find(query).sort({ updatedAt: -1 });

    res.status(200).json({
      success: true,
      quizzes,
    });
  } catch (error) {
    next(error);
  }
};

// Get quiz by share code (for direct links e.g. /quiz/8f92kd)
export const getQuizByShareCode = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { shareCode } = req.params;
    const quiz = await Quiz.findOne({ shareCode, status: 'published' })
      .select('-questions.correctAnswer -questions.explanation')
      .populate('teacher', 'name avatar bio');

    if (!quiz) {
      res.status(404).json({
        success: false,
        message: 'Quiz not found or not published yet',
      });
      return;
    }

    res.status(200).json({
      success: true,
      quiz,
    });
  } catch (error) {
    next(error);
  }
};

// Get quiz for taking (sanitized questions without answers)
export const getQuizForTaking = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findById(id)
      .select('-questions.correctAnswer -questions.explanation')
      .populate('teacher', 'name avatar');

    if (!quiz) {
      res.status(404).json({ success: false, message: 'Quiz not found' });
      return;
    }

    if (quiz.status !== 'published') {
      res.status(403).json({
        success: false,
        message: 'This quiz is not currently published.',
      });
      return;
    }

    const requestedCount = req.query.limit || req.query.count;
    const limitNum = requestedCount ? parseInt(String(requestedCount), 10) : 0;

    // Optionally randomize questions order if quiz settings specify it or if student requested custom limit
    let preparedQuestions = [...quiz.questions];
    if (quiz.randomizeQuestions || limitNum > 0) {
      preparedQuestions = preparedQuestions.sort(() => Math.random() - 0.5);
    }

    let calculatedTimeLimit = quiz.timeLimit;
    if (limitNum > 0 && limitNum < preparedQuestions.length) {
      if (quiz.timeLimit > 0 && quiz.questions.length > 0) {
        calculatedTimeLimit = Math.max(5, Math.round((quiz.timeLimit / quiz.questions.length) * limitNum));
      }
      preparedQuestions = preparedQuestions.slice(0, limitNum);
    }

    const sanitizedQuiz = quiz.toObject();
    sanitizedQuiz.questions = preparedQuestions;
    sanitizedQuiz.timeLimit = calculatedTimeLimit;

    res.status(200).json({
      success: true,
      quiz: sanitizedQuiz,
    });
  } catch (error) {
    next(error);
  }
};

// Student Self-Study: Generate instant practice quiz by topic and custom question count
export const createPracticeQuiz = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const { subject = 'All', count = 15, difficulty = 'All' } = req.body;
    const targetCount = Math.max(5, Math.min(100, parseInt(String(count), 10) || 15));

    const quizFilter: any = { status: 'published' };
    const bankFilter: any = {};

    if (subject && subject !== 'All') {
      quizFilter.subject = new RegExp(`^${subject}$`, 'i');
      bankFilter.subject = new RegExp(`^${subject}$`, 'i');
    }
    if (difficulty && difficulty !== 'All') {
      quizFilter.difficulty = difficulty;
      bankFilter.difficulty = difficulty;
    }

    const [quizzes, bankQuestions] = await Promise.all([
      Quiz.find(quizFilter).lean(),
      QuestionBank.find(bankFilter).lean(),
    ]);

    const pool: any[] = [];
    quizzes.forEach((q) => {
      if (Array.isArray(q.questions)) {
        q.questions.forEach((qu: any) => {
          pool.push({
            questionText: qu.questionText,
            type: qu.type || 'multiple-choice',
            options: qu.options,
            correctAnswer: qu.correctAnswer,
            explanation: qu.explanation || '',
            codeSnippet: qu.codeSnippet || '',
            points: qu.points || 1,
          });
        });
      }
    });

    bankQuestions.forEach((bq: any) => {
      pool.push({
        questionText: bq.questionText,
        type: bq.type || 'multiple-choice',
        options: bq.options,
        correctAnswer: bq.correctAnswer,
        explanation: bq.explanation || '',
        codeSnippet: bq.codeSnippet || '',
        points: bq.points || 1,
      });
    });

    // Deduplicate questions by questionText
    const uniqueMap = new Map<string, any>();
    pool.forEach((item) => {
      const key = item.questionText.trim().toLowerCase();
      if (!uniqueMap.has(key)) {
        uniqueMap.set(key, item);
      }
    });

    let uniqueQuestions = Array.from(uniqueMap.values()).sort(() => Math.random() - 0.5);

    if (uniqueQuestions.length === 0) {
      res.status(404).json({
        success: false,
        message: `No questions found for topic "${subject}". Try another topic.`,
      });
      return;
    }

    // If available questions are fewer than target count, cycle questions to meet requested length
    let selectedQuestions = uniqueQuestions.slice(0, targetCount);
    if (selectedQuestions.length < targetCount && uniqueQuestions.length > 0) {
      while (selectedQuestions.length < targetCount) {
        selectedQuestions.push(...uniqueQuestions.slice(0, targetCount - selectedQuestions.length));
      }
    }

    let teacherUser = await User.findOne({ role: 'teacher' });
    if (!teacherUser) {
      teacherUser = await User.findOne({});
    }

    const shareCode = `practice-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`;
    const effectiveSubject = subject === 'All' ? 'Full-Stack' : subject;
    const timeLimitMinutes = Math.max(10, Math.round(selectedQuestions.length * 1.5));

    const practiceQuiz = await Quiz.create({
      title: `${effectiveSubject} Self-Assessment (${selectedQuestions.length} Questions)`,
      description: `Instant self-study test covering ${effectiveSubject}. Includes automated grading, anti-cheat detection, and comprehensive explanation reviews.`,
      subject: effectiveSubject,
      difficulty: difficulty === 'All' ? 'intermediate' : (difficulty as any),
      teacher: teacherUser?._id,
      status: 'published',
      timeLimit: timeLimitMinutes,
      passingPercentage: 70,
      maxAttempts: 0,
      randomizeQuestions: true,
      randomizeAnswers: false,
      showCorrectAnswers: true,
      shareCode,
      questions: selectedQuestions,
    });

    res.status(201).json({
      success: true,
      quiz: practiceQuiz,
    });
  } catch (error) {
    next(error);
  }
};

// Teacher: Get full quiz details including questions & answers for editing
export const getQuizForEditor = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findById(id);

    if (!quiz) {
      res.status(404).json({ success: false, message: 'Quiz not found' });
      return;
    }

    // Check ownership
    if (quiz.teacher.toString() !== req.user?.id && req.user?.role !== 'admin') {
      res.status(403).json({
        success: false,
        message: 'You are not authorized to edit this quiz',
      });
      return;
    }

    res.status(200).json({
      success: true,
      quiz,
    });
  } catch (error) {
    next(error);
  }
};

// Teacher: Create a new quiz
export const createQuiz = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const {
      title,
      description,
      subject,
      difficulty,
      timeLimit,
      passingPercentage,
      maxAttempts,
      randomizeQuestions,
      randomizeAnswers,
      showCorrectAnswers,
      questions,
      status,
    } = req.body;

    if (!title || !subject) {
      res.status(400).json({
        success: false,
        message: 'Title and subject are required',
      });
      return;
    }

    let shareCode = generateShareCode();
    // Ensure uniqueness
    while (await Quiz.exists({ shareCode })) {
      shareCode = generateShareCode();
    }

    const quiz = await Quiz.create({
      title,
      description: description || '',
      subject,
      difficulty: difficulty || 'beginner',
      teacher: req.user.id,
      status: status || 'draft',
      timeLimit: Number(timeLimit) || 0,
      passingPercentage: Number(passingPercentage) || 70,
      maxAttempts: Number(maxAttempts) || 0,
      randomizeQuestions: Boolean(randomizeQuestions),
      randomizeAnswers: Boolean(randomizeAnswers),
      showCorrectAnswers: showCorrectAnswers !== undefined ? Boolean(showCorrectAnswers) : true,
      shareCode,
      questions: questions || [],
    });

    res.status(201).json({
      success: true,
      message: 'Quiz created successfully',
      quiz,
    });
  } catch (error) {
    next(error);
  }
};

// Teacher: Update an existing quiz
export const updateQuiz = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findById(id);

    if (!quiz) {
      res.status(404).json({ success: false, message: 'Quiz not found' });
      return;
    }

    if (quiz.teacher.toString() !== req.user?.id && req.user?.role !== 'admin') {
      res.status(403).json({
        success: false,
        message: 'You are not authorized to modify this quiz',
      });
      return;
    }

    const updateFields = [
      'title',
      'description',
      'subject',
      'difficulty',
      'timeLimit',
      'passingPercentage',
      'maxAttempts',
      'randomizeQuestions',
      'randomizeAnswers',
      'showCorrectAnswers',
      'status',
      'questions',
    ];

    updateFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        (quiz as any)[field] = req.body[field];
      }
    });

    await quiz.save();

    res.status(200).json({
      success: true,
      message: 'Quiz updated successfully',
      quiz,
    });
  } catch (error) {
    next(error);
  }
};

// Teacher: Delete a quiz
export const deleteQuiz = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findById(id);

    if (!quiz) {
      res.status(404).json({ success: false, message: 'Quiz not found' });
      return;
    }

    if (quiz.teacher.toString() !== req.user?.id && req.user?.role !== 'admin') {
      res.status(403).json({
        success: false,
        message: 'You are not authorized to delete this quiz',
      });
      return;
    }

    await Quiz.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Quiz deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// Teacher: Duplicate an existing quiz
export const duplicateQuiz = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findById(id);

    if (!quiz) {
      res.status(404).json({ success: false, message: 'Quiz not found' });
      return;
    }

    let shareCode = generateShareCode();
    while (await Quiz.exists({ shareCode })) {
      shareCode = generateShareCode();
    }

    const duplicatedQuiz = await Quiz.create({
      title: `${quiz.title} (Copy)`,
      description: quiz.description,
      subject: quiz.subject,
      difficulty: quiz.difficulty,
      teacher: req.user?.id,
      status: 'draft',
      timeLimit: quiz.timeLimit,
      passingPercentage: quiz.passingPercentage,
      maxAttempts: quiz.maxAttempts,
      randomizeQuestions: quiz.randomizeQuestions,
      randomizeAnswers: quiz.randomizeAnswers,
      showCorrectAnswers: quiz.showCorrectAnswers,
      shareCode,
      questions: quiz.questions,
    });

    res.status(201).json({
      success: true,
      message: 'Quiz duplicated successfully as draft',
      quiz: duplicatedQuiz,
    });
  } catch (error) {
    next(error);
  }
};
