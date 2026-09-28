import { Request } from 'express';

export type UserRole = 'student' | 'teacher' | 'admin';

export interface IUserPayload {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

export interface AuthRequest extends Request {
  user?: IUserPayload;
}

export type QuizStatus = 'draft' | 'published' | 'archived';
export type QuestionType = 'multiple-choice' | 'true-false';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';
