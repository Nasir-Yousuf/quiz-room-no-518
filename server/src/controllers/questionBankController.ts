import { Response, NextFunction } from 'express';
import QuestionBank from '../models/QuestionBank.js';
import { AuthRequest } from '../types/index.js';

export const getQuestionBank = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const { subject, topic, difficulty, type, search } = req.query;
    const query: any = { teacher: req.user.id };

    if (subject && subject !== 'All') {
      query.subject = subject;
    }
    if (topic && topic !== 'All') {
      query.topic = topic;
    }
    if (difficulty && difficulty !== 'All') {
      query.difficulty = difficulty;
    }
    if (type && type !== 'All') {
      query.type = type;
    }
    if (search) {
      query.questionText = { $regex: String(search), $options: 'i' };
    }

    const questions = await QuestionBank.find(query).sort({ createdAt: -1 });

    // Distinct topics for teacher's filter dropdown
    const topics = await QuestionBank.distinct('topic', { teacher: req.user.id });

    res.status(200).json({
      success: true,
      topics,
      questions,
    });
  } catch (error) {
    next(error);
  }
};

export const addQuestionToBank = async (
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
      subject,
      topic = 'General',
      difficulty = 'beginner',
      questionText,
      type = 'multiple-choice',
      options,
      correctAnswer,
      explanation = '',
      codeSnippet = '',
      points = 1,
    } = req.body;

    if (!subject || !questionText || !options || !correctAnswer) {
      res.status(400).json({
        success: false,
        message: 'Subject, question text, options, and correct answer are required',
      });
      return;
    }

    const newQuestion = await QuestionBank.create({
      teacher: req.user.id,
      subject,
      topic,
      difficulty,
      questionText,
      type,
      options,
      correctAnswer,
      explanation,
      codeSnippet,
      points: Number(points) || 1,
    });

    res.status(201).json({
      success: true,
      message: 'Question added to question bank',
      question: newQuestion,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteQuestionFromBank = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const question = await QuestionBank.findById(id);

    if (!question) {
      res.status(404).json({ success: false, message: 'Question not found' });
      return;
    }

    if (question.teacher.toString() !== req.user?.id && req.user?.role !== 'admin') {
      res.status(403).json({
        success: false,
        message: 'You are not authorized to delete this question',
      });
      return;
    }

    await QuestionBank.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Question removed from question bank',
    });
  } catch (error) {
    next(error);
  }
};
