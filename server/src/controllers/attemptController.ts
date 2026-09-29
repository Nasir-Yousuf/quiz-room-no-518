import { Response, NextFunction } from 'express';
import Quiz from '../models/Quiz.js';
import QuizAttempt, { IAttemptAnswer, IQuestionSnapshot } from '../models/QuizAttempt.js';
import Notification from '../models/Notification.js';
import { AuthRequest } from '../types/index.js';

export const submitQuizAttempt = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const { quizId } = req.params;
    const { answers, timeSpentSeconds = 0, tabSwitchesCount = 0, classGroupId } = req.body;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      res.status(404).json({ success: false, message: 'Quiz not found' });
      return;
    }

    // Check attempt limits
    const previousAttemptsCount = await QuizAttempt.countDocuments({
      student: req.user.id,
      quiz: quiz._id,
    });

    if (quiz.maxAttempts > 0 && previousAttemptsCount >= quiz.maxAttempts) {
      res.status(400).json({
        success: false,
        message: `You have reached the maximum allowed attempts (${quiz.maxAttempts}) for this quiz.`,
      });
      return;
    }

    // Grade answers & construct question snapshots
    let totalScore = 0;
    let maxPossibleScore = 0;
    const evaluatedAnswers: IAttemptAnswer[] = [];
    const questionSnapshots: IQuestionSnapshot[] = [];

    // Map submitted answers by questionId or question index
    const submissionMap = new Map<string, string>();
    const submittedQuestionIdSet = new Set<string>();

    if (Array.isArray(answers)) {
      answers.forEach((ans: any) => {
        if (ans.questionId) {
          const qId = String(ans.questionId);
          submissionMap.set(qId, String(ans.selectedAnswer || ''));
          submittedQuestionIdSet.add(qId);
        } else if (ans.questionIndex !== undefined) {
          submissionMap.set(`idx_${ans.questionIndex}`, String(ans.selectedAnswer || ''));
        }
      });
    }

    // Determine questions to evaluate: if student took a subset of questions (e.g. chosen limit),
    // evaluate only the questions they were presented with
    let questionsToEvaluate = quiz.questions;
    if (submittedQuestionIdSet.size > 0 && submittedQuestionIdSet.size < quiz.questions.length) {
      const matched = quiz.questions.filter((q) => q._id && submittedQuestionIdSet.has(q._id.toString()));
      if (matched.length > 0) {
        questionsToEvaluate = matched;
      }
    } else if (Array.isArray(answers) && answers.length > 0 && answers.length < quiz.questions.length) {
      questionsToEvaluate = quiz.questions.slice(0, answers.length);
    }

    questionsToEvaluate.forEach((q, idx) => {
      const qIdStr = q._id ? q._id.toString() : '';
      const selected = submissionMap.get(qIdStr) ?? submissionMap.get(`idx_${idx}`) ?? '';
      
      const isCorrect =
        selected.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
      const points = q.points || 1;
      const earned = isCorrect ? points : 0;

      totalScore += earned;
      maxPossibleScore += points;

      evaluatedAnswers.push({
        questionIndex: idx,
        questionText: q.questionText,
        selectedAnswer: selected,
        correctAnswer: q.correctAnswer,
        isCorrect,
        pointsEarned: earned,
        explanation: q.explanation || '',
        codeSnippet: q.codeSnippet || '',
      });

      questionSnapshots.push({
        questionText: q.questionText,
        type: q.type,
        options: [...q.options],
        correctAnswer: q.correctAnswer,
        explanation: q.explanation || '',
        codeSnippet: q.codeSnippet || '',
        points,
      });
    });

    const percentage =
      maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;
    const passed = percentage >= (quiz.passingPercentage || 70);

    const attempt = await QuizAttempt.create({
      student: req.user.id,
      quiz: quiz._id,
      quizTitle: quiz.title,
      subject: quiz.subject,
      questionsSnapshot: questionSnapshots,
      answers: evaluatedAnswers,
      score: totalScore,
      maxScore: maxPossibleScore,
      percentage,
      passed,
      timeSpentSeconds: Number(timeSpentSeconds) || 0,
      tabSwitchesCount: Number(tabSwitchesCount) || 0,
      attemptNumber: previousAttemptsCount + 1,
      classGroup: classGroupId || undefined,
      completedAt: new Date(),
    });

    // Increment quiz attempt counter
    await Quiz.findByIdAndUpdate(quiz._id, { $inc: { attemptsCount: 1 } });

    // Notify the teacher about new attempt
    await Notification.create({
      user: quiz.teacher,
      title: 'New Quiz Submission',
      message: `${req.user.name} scored ${percentage}% on "${quiz.title}"`,
      type: 'result',
      link: `/teacher/quizzes/${quiz._id}/results`,
    });

    res.status(201).json({
      success: true,
      message: 'Quiz submitted and graded successfully',
      attempt,
    });
  } catch (error) {
    next(error);
  }
};

export const getStudentAttempts = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const { subject, limit = '50' } = req.query;
    const query: any = { student: req.user.id };

    if (subject && subject !== 'All') {
      query.subject = subject;
    }

    const attempts = await QuizAttempt.find(query)
      .sort({ completedAt: -1 })
      .limit(Number(limit))
      .select('-questionsSnapshot');

    // Calculate aggregated summary for quick stats
    const totalQuizzes = attempts.length;
    const avgScore =
      totalQuizzes > 0
        ? Math.round(attempts.reduce((acc, curr) => acc + curr.percentage, 0) / totalQuizzes)
        : 0;
    const highestScore =
      totalQuizzes > 0 ? Math.max(...attempts.map((a) => a.percentage)) : 0;

    res.status(200).json({
      success: true,
      summary: {
        totalQuizzes,
        avgScore,
        highestScore,
      },
      attempts,
    });
  } catch (error) {
    next(error);
  }
};

export const getAttemptById = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const attempt = await QuizAttempt.findById(id)
      .populate('student', 'name email avatar')
      .populate('quiz', 'title passingPercentage showCorrectAnswers teacher');

    if (!attempt) {
      res.status(404).json({ success: false, message: 'Quiz attempt not found' });
      return;
    }

    // Verify authorized user: either the student who took it, or the quiz's teacher
    const isOwner = attempt.student._id.toString() === req.user?.id;
    const isTeacher =
      (attempt.quiz as any)?.teacher?.toString() === req.user?.id ||
      req.user?.role === 'admin';

    if (!isOwner && !isTeacher) {
      res.status(403).json({
        success: false,
        message: 'You are not authorized to view this result',
      });
      return;
    }

    res.status(200).json({
      success: true,
      attempt,
    });
  } catch (error) {
    next(error);
  }
};

export const getQuizAttemptsForTeacher = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { quizId } = req.params;
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      res.status(404).json({ success: false, message: 'Quiz not found' });
      return;
    }

    if (quiz.teacher.toString() !== req.user?.id && req.user?.role !== 'admin') {
      res.status(403).json({
        success: false,
        message: 'You are not authorized to view attempts for this quiz',
      });
      return;
    }

    const attempts = await QuizAttempt.find({ quiz: quizId })
      .populate('student', 'name email avatar')
      .sort({ completedAt: -1 });

    res.status(200).json({
      success: true,
      quizTitle: quiz.title,
      attempts,
    });
  } catch (error) {
    next(error);
  }
};
