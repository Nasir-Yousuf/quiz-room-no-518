import mongoose, { Document, Schema, Types } from 'mongoose';
import { QuizStatus, QuestionType, DifficultyLevel } from '../types/index.js';

export interface IQuestion {
  _id?: Types.ObjectId;
  questionText: string;
  type: QuestionType;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  codeSnippet?: string;
  points: number;
}

export interface IQuiz extends Document {
  title: string;
  description: string;
  subject: string;
  difficulty: DifficultyLevel;
  teacher: Types.ObjectId;
  status: QuizStatus;
  timeLimit: number; // in minutes (0 = unlimited)
  passingPercentage: number;
  maxAttempts: number; // 0 = unlimited
  randomizeQuestions: boolean;
  randomizeAnswers: boolean;
  showCorrectAnswers: boolean;
  shareCode: string;
  questions: IQuestion[];
  attemptsCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export const QuestionSchema = new Schema<IQuestion>(
  {
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
      validate: {
        validator: function (opts: string[]) {
          return opts && opts.length >= 2;
        },
        message: 'A question must provide at least 2 answer choices',
      },
    },
    correctAnswer: {
      type: String,
      required: [true, 'Correct answer must be specified'],
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
      min: [1, 'Points must be at least 1'],
    },
  },
  { _id: true }
);

const QuizSchema = new Schema<IQuiz>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a quiz title'],
      trim: true,
      maxlength: [120, 'Title cannot exceed 120 characters'],
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
      index: true,
    },
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner',
      index: true,
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft',
      index: true,
    },
    timeLimit: {
      type: Number,
      default: 0, // 0 = unlimited minutes
    },
    passingPercentage: {
      type: Number,
      default: 70,
      min: 0,
      max: 100,
    },
    maxAttempts: {
      type: Number,
      default: 0, // 0 = unlimited attempts
    },
    randomizeQuestions: {
      type: Boolean,
      default: false,
    },
    randomizeAnswers: {
      type: Boolean,
      default: false,
    },
    showCorrectAnswers: {
      type: Boolean,
      default: true,
    },
    shareCode: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    questions: [QuestionSchema],
    attemptsCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Helpful compound indexes
QuizSchema.index({ status: 1, subject: 1, createdAt: -1 });

export default mongoose.model<IQuiz>('Quiz', QuizSchema);
