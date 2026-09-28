import { Router } from 'express';
import {
  getQuestionBank,
  addQuestionToBank,
  deleteQuestionFromBank,
} from '../controllers/questionBankController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = Router();

router.use(protect, authorize('teacher', 'admin'));

router.get('/', getQuestionBank);
router.post('/', addQuestionToBank);
router.delete('/:id', deleteQuestionFromBank);

export default router;
