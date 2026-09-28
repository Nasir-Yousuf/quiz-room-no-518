import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IAttemptAnswer {
  questionIndex: number;
  questionText: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  pointsEarned: number;
  explanation?: string;
  codeSnippet?: string;
}

export interface IQuestionSnapshot {
  questionText: string;
  type: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  codeSnippet?: string;
  points: number;
}

export interface IQuizAttempt extends Document {
  student: Types.ObjectId;
  quiz: Types.ObjectId;
  quizTitle: string;
  subject: string;
  questionsSnapshot: IQuestionSnapshot[];
  answers: IAttemptAnswer[];
  score: number;
  maxScore: number;
  percentage: number;
  passed: boolean;
  timeSpentSeconds: number;
  tabSwitchesCount: number;
  attemptNumber: number;
  classGroup?: Types.ObjectId;
  completedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const AttemptAnswerSchema = new Schema<IAttemptAnswer>(
  {
    questionIndex: { type: Number, required: true },
    questionText: { type: String, required: true },
    selectedAnswer: { type: String, default: '' },
    correctAnswer: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
    pointsEarned: { type: Number, required: true },
    explanation: { type: String, default: '' },
    codeSnippet: { type: String, default: '' },
  },
  { _id: false }
);

const QuestionSnapshotSchema = new Schema<IQuestionSnapshot>(
  {
    questionText: { type: String, required: true },
    type: { type: String, default: 'multiple-choice' },
    options: { type: [String], required: true },
    correctAnswer: { type: String, required: true },
    explanation: { type: String, default: '' },
    codeSnippet: { type: String, default: '' },
    points: { type: Number, default: 1 },
  },
  { _id: false }
);

const QuizAttemptSchema = new Schema<IQuizAttempt>(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    quiz: {
      type: Schema.Types.ObjectId,
      ref: 'Quiz',
      required: true,
      index: true,
    },
    quizTitle: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
      index: true,
    },
    questionsSnapshot: [QuestionSnapshotSchema],
    answers: [AttemptAnswerSchema],
    score: {
      type: Number,
      required: true,
      min: 0,
    },
    maxScore: {
      type: Number,
      required: true,
      min: 1,
    },
    percentage: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
      index: true,
    },
    passed: {
      type: Boolean,
      default: false,
    },
    timeSpentSeconds: {
      type: Number,
      default: 0,
    },
    tabSwitchesCount: {
      type: Number,
      default: 0,
    },
    attemptNumber: {
      type: Number,
      default: 1,
    },
    classGroup: {
      type: Schema.Types.ObjectId,
      ref: 'ClassGroup',
    },
    completedAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

QuizAttemptSchema.index({ student: 1, createdAt: -1 });
QuizAttemptSchema.index({ quiz: 1, createdAt: -1 });

export default mongoose.model<IQuizAttempt>('QuizAttempt', QuizAttemptSchema);
