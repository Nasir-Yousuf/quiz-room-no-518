import { Router } from 'express';
import {
  submitQuizAttempt,
  getStudentAttempts,
  getAttemptById,
  getQuizAttemptsForTeacher,
} from '../controllers/attemptController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/quizzes/:quizId/submit', protect, submitQuizAttempt);
router.get('/mine', protect, getStudentAttempts);
router.get('/:id', protect, getAttemptById);
router.get('/quizzes/:quizId/teacher', protect, authorize('teacher', 'admin'), getQuizAttemptsForTeacher);

export default router;
