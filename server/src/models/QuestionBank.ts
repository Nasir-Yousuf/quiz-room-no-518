import mongoose, { Document, Schema, Types } from 'mongoose';
import { QuestionType, DifficultyLevel } from '../types/index.js';

export interface IQuestionBank extends Document {
  teacher: Types.ObjectId;
  subject: string;
  topic: string;
  difficulty: DifficultyLevel;
  questionText: string;
  type: QuestionType;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  codeSnippet?: string;
  points: number;
  createdAt: Date;
  updatedAt: Date;
}

const QuestionBankSchema = new Schema<IQuestionBank>(
  {
    teacher: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    topic: {
      type: String,
      default: 'General',
      trim: true,
      index: true,
    },
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner',
      index: true,
    },
    questionText: {
      type: String,
      required: [true, 'Question text is required'],
      trim: true,
    },
    type: {
      type: String,
      enum: ['multiple-choice', 'true-false'],
      default: 'multiple-choice',
    },
    options: {
      type: [String],
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
    explanation: {
      type: String,
      default: '',
    },
    codeSnippet: {
      type: String,
      default: '',
    },
    points: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IQuestionBank>('QuestionBank', QuestionBankSchema);
