import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import Quiz from '../models/Quiz.js';
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
    const { subject, difficulty, search, page = '1', limit = '12' } = req.query;

    const query: any = { status: 'published' };

    if (subject && subject !== 'All') {
      query.subject = subject;
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

    // Optionally randomize questions order if quiz settings specify it
    let preparedQuestions = [...quiz.questions];
    if (quiz.randomizeQuestions) {
      preparedQuestions = preparedQuestions.sort(() => Math.random() - 0.5);
    }

    const sanitizedQuiz = quiz.toObject();
    sanitizedQuiz.questions = preparedQuestions;

    res.status(200).json({
      success: true,
      quiz: sanitizedQuiz,
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
