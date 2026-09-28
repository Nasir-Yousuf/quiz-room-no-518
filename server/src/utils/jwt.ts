import jwt from 'jsonwebtoken';
import { IUserPayload } from '../types/index.js';

const JWT_SECRET = process.env.JWT_SECRET || 'dev_jwt_secret_quiz_room_518_education_platform_secure_token';

export const signToken = (payload: IUserPayload): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
  });
};

export const verifyToken = (token: string): IUserPayload => {
  return jwt.verify(token, JWT_SECRET) as IUserPayload;
};
