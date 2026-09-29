import { Router } from 'express';
import {
  getQuizzes,
  getTeacherQuizzes,
  getQuizByShareCode,
  getQuizForTaking,
  createPracticeQuiz,
  getQuizForEditor,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  duplicateQuiz,
} from '../controllers/quizController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = Router();

// Public & Student discovery
router.get('/', getQuizzes);
router.post('/practice', protect, createPracticeQuiz);
router.get('/share/:shareCode', getQuizByShareCode);
router.get('/:id/take', protect, getQuizForTaking);

// Teacher-only management routes
router.get('/teacher/mine', protect, authorize('teacher', 'admin'), getTeacherQuizzes);
router.get('/:id/editor', protect, authorize('teacher', 'admin'), getQuizForEditor);
router.post('/', protect, authorize('teacher', 'admin'), createQuiz);
router.patch('/:id', protect, authorize('teacher', 'admin'), updateQuiz);
router.delete('/:id', protect, authorize('teacher', 'admin'), deleteQuiz);
router.post('/:id/duplicate', protect, authorize('teacher', 'admin'), duplicateQuiz);

export default router;
