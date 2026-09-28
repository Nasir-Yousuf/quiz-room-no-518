import { Response, NextFunction } from 'express';
import QuizAttempt from '../models/QuizAttempt.js';
import Quiz from '../models/Quiz.js';
import ClassGroup from '../models/ClassGroup.js';
import { AuthRequest } from '../types/index.js';

export const getStudentDashboardStats = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const attempts = await QuizAttempt.find({ student: req.user.id }).sort({ completedAt: -1 });

    const totalQuizzes = attempts.length;
    const avgScore =
      totalQuizzes > 0
        ? Math.round(attempts.reduce((sum, a) => sum + a.percentage, 0) / totalQuizzes)
        : 0;
    const highestScore =
      totalQuizzes > 0 ? Math.max(...attempts.map((a) => a.percentage)) : 0;

    // Subject breakdown
    const subjectMap: Record<string, { total: number; count: number }> = {};
    attempts.forEach((a) => {
      if (!subjectMap[a.subject]) {
        subjectMap[a.subject] = { total: 0, count: 0 };
      }
      subjectMap[a.subject].total += a.percentage;
      subjectMap[a.subject].count += 1;
    });

    const subjectBreakdown = Object.entries(subjectMap).map(([subject, data]) => ({
      subject,
      average: Math.round(data.total / data.count),
      attemptsCount: data.count,
    }));

    // Progress over time (chronological order)
    const progressOverTime = [...attempts]
      .reverse()
      .slice(-10)
      .map((a) => ({
        date: new Date(a.completedAt).toLocaleDateString(undefined, {
          month: 'short',
          day: 'numeric',
        }),
        score: a.percentage,
        quizTitle: a.quizTitle,
        subject: a.subject,
      }));

    // Rule-based Learning Insights & Suggested Focus Areas (Requirement 19)
    const suggestedFocus: string[] = [];
    subjectBreakdown.forEach((s) => {
      if (s.average < 70) {
        if (s.subject === 'JavaScript') {
          suggestedFocus.push('JavaScript Scope & Closures', 'Async/Await & Promises', 'DOM Manipulation');
        } else if (s.subject === 'CSS') {
          suggestedFocus.push('CSS Grid & Flexbox layouts', 'CSS Specificity & Cascade', 'Responsive Media Queries');
        } else if (s.subject === 'HTML') {
          suggestedFocus.push('Semantic HTML5 Tags', 'ARIA Accessibility Roles', 'Form Validation Attributes');
        } else {
          suggestedFocus.push(`${s.subject} Core Fundamentals`);
        }
      }
    });

    if (suggestedFocus.length === 0 && totalQuizzes > 0) {
      suggestedFocus.push('Advanced Full-Stack Architectures', 'Performance Optimization & Benchmarks');
    }

    // Recent activity (latest 5 attempts)
    const recentActivity = attempts.slice(0, 5).map((a) => ({
      id: a._id,
      quizTitle: a.quizTitle,
      subject: a.subject,
      percentage: a.percentage,
      passed: a.passed,
      date: a.completedAt,
    }));

    res.status(200).json({
      success: true,
      stats: {
        totalQuizzes,
        avgScore,
        highestScore,
        subjectBreakdown,
        progressOverTime,
        suggestedFocus,
        recentActivity,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getTeacherDashboardStats = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const teacherId = req.user.id;

    // Get all quizzes created by this teacher
    const quizzes = await Quiz.find({ teacher: teacherId });
    const quizIds = quizzes.map((q) => q._id);

    // Get all classes
    const classes = await ClassGroup.find({ teacher: teacherId });
    const uniqueStudentsSet = new Set<string>();
    classes.forEach((c) => {
      c.students.forEach((s) => uniqueStudentsSet.add(s.toString()));
    });

    // Get all attempts for quizzes made by this teacher
    const attempts = await QuizAttempt.find({ quiz: { $in: quizIds } })
      .populate('student', 'name email avatar')
      .sort({ completedAt: -1 });

    const totalQuizzes = quizzes.length;
    const totalAttempts = attempts.length;
    const avgScore =
      totalAttempts > 0
        ? Math.round(attempts.reduce((sum, a) => sum + a.percentage, 0) / totalAttempts)
        : 0;

    // Also include students who attempted quizzes directly via public links
    attempts.forEach((a) => {
      if (a.student && (a.student as any)._id) {
        uniqueStudentsSet.add((a.student as any)._id.toString());
      }
    });

    const totalStudents = uniqueStudentsSet.size;

    // Popular quizzes
    const popularQuizzes = [...quizzes]
      .sort((a, b) => b.attemptsCount - a.attemptsCount)
      .slice(0, 5)
      .map((q) => ({
        id: q._id,
        title: q.title,
        subject: q.subject,
        difficulty: q.difficulty,
        attemptsCount: q.attemptsCount,
        status: q.status,
      }));

    // Student performance aggregation (Requirement 11)
    const studentPerformanceMap: Record<
      string,
      { student: any; attempts: number; totalScore: number; bestScore: number }
    > = {};

    attempts.forEach((a) => {
      if (!a.student) return;
      const sId = (a.student as any)._id.toString();
      if (!studentPerformanceMap[sId]) {
        studentPerformanceMap[sId] = {
          student: a.student,
          attempts: 0,
          totalScore: 0,
          bestScore: 0,
        };
      }
      studentPerformanceMap[sId].attempts += 1;
      studentPerformanceMap[sId].totalScore += a.percentage;
      if (a.percentage > studentPerformanceMap[sId].bestScore) {
        studentPerformanceMap[sId].bestScore = a.percentage;
      }
    });

    const studentPerformance = Object.values(studentPerformanceMap)
      .map((item) => ({
        student: item.student,
        quizzesTaken: item.attempts,
        averageScore: Math.round(item.totalScore / item.attempts),
        bestScore: item.bestScore,
      }))
      .sort((a, b) => b.averageScore - a.averageScore);

    // Recent activity
    const recentActivity = attempts.slice(0, 6).map((a) => ({
      id: a._id,
      studentName: (a.student as any)?.name || 'Student',
      studentAvatar: (a.student as any)?.avatar || '',
      quizTitle: a.quizTitle,
      percentage: a.percentage,
      passed: a.passed,
      date: a.completedAt,
    }));

    res.status(200).json({
      success: true,
      stats: {
        totalQuizzes,
        totalStudents,
        totalAttempts,
        avgScore,
        popularQuizzes,
        studentPerformance,
        recentActivity,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getQuizDetailedAnalytics = async (
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
      res.status(403).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const attempts = await QuizAttempt.find({ quiz: quizId });
    const totalAttempts = attempts.length;

    if (totalAttempts === 0) {
      res.status(200).json({
        success: true,
        analytics: {
          quizTitle: quiz.title,
          totalAttempts: 0,
          avgScore: 0,
          highestScore: 0,
          lowestScore: 0,
          avgTimeMinutes: 0,
          passRate: 0,
          questionStats: [],
        },
      });
      return;
    }

    const scores = attempts.map((a) => a.percentage);
    const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / totalAttempts);
    const highestScore = Math.max(...scores);
    const lowestScore = Math.min(...scores);
    const passedCount = attempts.filter((a) => a.passed).length;
    const passRate = Math.round((passedCount / totalAttempts) * 100);
    const avgTimeSeconds =
      attempts.reduce((sum, a) => sum + (a.timeSpentSeconds || 0), 0) / totalAttempts;
    const avgTimeMinutes = Math.round((avgTimeSeconds / 60) * 10) / 10;

    // Question-by-question difficulty & most frequently missed questions (Requirement 18)
    const questionStats = quiz.questions.map((q, idx) => {
      let correctCount = 0;
      let attemptCount = 0;

      attempts.forEach((att) => {
        const found = att.answers.find(
          (ans) => ans.questionIndex === idx || ans.questionText === q.questionText
        );
        if (found) {
          attemptCount++;
          if (found.isCorrect) correctCount++;
        }
      });

      const accuracyPercentage =
        attemptCount > 0 ? Math.round((correctCount / attemptCount) * 100) : 0;

      return {
        questionIndex: idx + 1,
        questionText: q.questionText,
        correctCount,
        totalAnswered: attemptCount,
        accuracyPercentage,
        isHardest: accuracyPercentage < 50,
      };
    });

    res.status(200).json({
      success: true,
      analytics: {
        quizTitle: quiz.title,
        totalAttempts,
        avgScore,
        highestScore,
        lowestScore,
        avgTimeMinutes,
        passRate,
        questionStats,
      },
    });
  } catch (error) {
    next(error);
  }
};
