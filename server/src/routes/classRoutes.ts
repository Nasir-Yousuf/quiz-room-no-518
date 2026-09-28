import { Router } from 'express';
import {
  createClass,
  getTeacherClasses,
  getStudentClasses,
  joinClass,
  getClassDetails,
  createAssignment,
  getStudentAssignments,
} from '../controllers/classController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = Router();

router.use(protect);

// Teacher-specific
router.post('/', authorize('teacher', 'admin'), createClass);
router.get('/teacher', authorize('teacher', 'admin'), getTeacherClasses);
router.post('/assignments', authorize('teacher', 'admin'), createAssignment);

// Student-specific
router.get('/student', authorize('student', 'admin'), getStudentClasses);
router.post('/join', authorize('student', 'admin'), joinClass);
router.get('/assignments', authorize('student', 'admin'), getStudentAssignments);

// Shared details
router.get('/:id', getClassDetails);

export default router;
