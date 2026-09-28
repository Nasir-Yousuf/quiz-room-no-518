import { Router } from 'express';
import {
  getUserNotifications,
  markNotificationAsRead,
} from '../controllers/notificationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.use(protect);

router.get('/', getUserNotifications);
router.patch('/:id/read', markNotificationAsRead);

export default router;
