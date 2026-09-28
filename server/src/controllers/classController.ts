import { Response, NextFunction } from 'express';
import crypto from 'crypto';
import ClassGroup from '../models/ClassGroup.js';
import Assignment from '../models/Assignment.js';
import Notification from '../models/Notification.js';
import Quiz from '../models/Quiz.js';
import { AuthRequest } from '../types/index.js';

const generateInviteCode = (name: string): string => {
  const prefix = name.replace(/[^a-zA-Z]/g, '').slice(0, 3).toUpperCase() || 'CLS';
  const random = crypto.randomBytes(2).toString('hex').toUpperCase();
  return `${prefix}-${random}`; // e.g. "WEB-7A3F"
};

export const createClass = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const { name, description, subject } = req.body;
    if (!name || !subject) {
      res.status(400).json({
        success: false,
        message: 'Class name and subject are required',
      });
      return;
    }

    let inviteCode = generateInviteCode(name);
    while (await ClassGroup.exists({ inviteCode })) {
      inviteCode = generateInviteCode(name);
    }

    const newClass = await ClassGroup.create({
      name,
      description: description || '',
      subject,
      teacher: req.user.id,
      inviteCode,
      students: [],
    });

    res.status(201).json({
      success: true,
      message: 'Class created successfully',
      classGroup: newClass,
    });
  } catch (error) {
    next(error);
  }
};

export const getTeacherClasses = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const classes = await ClassGroup.find({ teacher: req.user.id })
      .populate('students', 'name email avatar')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      classes,
    });
  } catch (error) {
    next(error);
  }
};

export const getStudentClasses = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const classes = await ClassGroup.find({ students: req.user.id })
      .populate('teacher', 'name email avatar')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      classes,
    });
  } catch (error) {
    next(error);
  }
};

export const joinClass = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const { inviteCode } = req.body;
    if (!inviteCode) {
      res.status(400).json({
        success: false,
        message: 'Please provide a class invitation code',
      });
      return;
    }

    const classGroup = await ClassGroup.findOne({
      inviteCode: inviteCode.trim().toUpperCase(),
    });

    if (!classGroup) {
      res.status(404).json({
        success: false,
        message: 'No class found with this invitation code',
      });
      return;
    }

    // Check if student already enrolled
    const studentIdStr = req.user.id;
    if (classGroup.students.some((s) => s.toString() === studentIdStr)) {
      res.status(400).json({
        success: false,
        message: 'You are already enrolled in this class',
      });
      return;
    }

    classGroup.students.push(studentIdStr as any);
    await classGroup.save();

    // Notify teacher
    await Notification.create({
      user: classGroup.teacher,
      title: 'New Student Enrolled',
      message: `${req.user.name} joined your class "${classGroup.name}"`,
      type: 'class_joined',
      link: `/teacher/classes/${classGroup._id}`,
    });

    res.status(200).json({
      success: true,
      message: `Successfully joined ${classGroup.name}`,
      classGroup,
    });
  } catch (error) {
    next(error);
  }
};

export const getClassDetails = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const classGroup = await ClassGroup.findById(id)
      .populate('teacher', 'name email avatar')
      .populate('students', 'name email avatar');

    if (!classGroup) {
      res.status(404).json({ success: false, message: 'Class not found' });
      return;
    }

    const assignments = await Assignment.find({ classGroup: id })
      .populate('quiz', 'title subject difficulty timeLimit passingPercentage')
      .sort({ dueDate: 1 });

    res.status(200).json({
      success: true,
      classGroup,
      assignments,
    });
  } catch (error) {
    next(error);
  }
};

export const createAssignment = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const { classGroupId, quizId, title, dueDate, attemptLimit = 1, timeLimit = 0 } = req.body;

    const classGroup = await ClassGroup.findById(classGroupId);
    if (!classGroup) {
      res.status(404).json({ success: false, message: 'Class not found' });
      return;
    }

    if (classGroup.teacher.toString() !== req.user.id && req.user.role !== 'admin') {
      res.status(403).json({ success: false, message: 'Unauthorized to assign quizzes to this class' });
      return;
    }

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      res.status(404).json({ success: false, message: 'Quiz not found' });
      return;
    }

    const assignment = await Assignment.create({
      quiz: quiz._id,
      classGroup: classGroup._id,
      teacher: req.user.id,
      title: title || quiz.title,
      dueDate: new Date(dueDate),
      attemptLimit: Number(attemptLimit) || 1,
      timeLimit: Number(timeLimit) || quiz.timeLimit || 0,
      status: 'active',
    });

    // Notify all enrolled students
    if (classGroup.students.length > 0) {
      const notifications = classGroup.students.map((studentId) => ({
        user: studentId,
        title: 'New Quiz Assigned',
        message: `Quiz "${assignment.title}" assigned in ${classGroup.name}. Due on ${new Date(dueDate).toLocaleDateString()}.`,
        type: 'assignment',
        link: `/student/quizzes/${quiz._id}/take?assignmentId=${assignment._id}`,
      }));
      await Notification.insertMany(notifications);
    }

    res.status(201).json({
      success: true,
      message: 'Assignment created and notifications delivered',
      assignment,
    });
  } catch (error) {
    next(error);
  }
};

export const getStudentAssignments = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    // Find all classes student belongs to
    const enrolledClasses = await ClassGroup.find({ students: req.user.id }).select('_id');
    const classIds = enrolledClasses.map((c) => c._id);

    const assignments = await Assignment.find({
      classGroup: { $in: classIds },
      status: 'active',
    })
      .populate('quiz', 'title subject difficulty timeLimit passingPercentage')
      .populate('classGroup', 'name')
      .populate('teacher', 'name')
      .sort({ dueDate: 1 });

    res.status(200).json({
      success: true,
      assignments,
    });
  } catch (error) {
    next(error);
  }
};
