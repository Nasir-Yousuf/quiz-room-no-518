import { Response, NextFunction } from 'express';
import Notification from '../models/Notification.js';
import { AuthRequest } from '../types/index.js';

export const getUserNotifications = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const notifications = await Notification.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .limit(30);

    const unreadCount = await Notification.countDocuments({
      user: req.user.id,
      isRead: false,
    });

    res.status(200).json({
      success: true,
      unreadCount,
      notifications,
    });
  } catch (error) {
    next(error);
  }
};

export const markNotificationAsRead = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    if (id === 'all') {
      await Notification.updateMany({ user: req.user?.id }, { isRead: true });
      res.status(200).json({ success: true, message: 'All notifications marked as read' });
      return;
    }

    await Notification.findOneAndUpdate(
      { _id: id, user: req.user?.id },
      { isRead: true }
    );

    res.status(200).json({ success: true, message: 'Notification marked as read' });
  } catch (error) {
    next(error);
  }
};
