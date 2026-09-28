import { Router } from 'express';
import {
  getStudentDashboardStats,
  getTeacherDashboardStats,
  getQuizDetailedAnalytics,
} from '../controllers/analyticsController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = Router();

router.use(protect);

router.get('/student', authorize('student', 'admin'), getStudentDashboardStats);
router.get('/teacher', authorize('teacher', 'admin'), getTeacherDashboardStats);
router.get('/quiz/:quizId', authorize('teacher', 'admin'), getQuizDetailedAnalytics);

export default router;
