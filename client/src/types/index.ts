export type UserRole = 'student' | 'teacher' | 'admin';

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  bio?: string;
  createdAt?: string;
}

export type QuizStatus = 'draft' | 'published' | 'archived';
export type QuestionType = 'multiple-choice' | 'true-false';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface IQuestion {
  _id?: string;
  questionText: string;
  type: QuestionType;
  options: string[];
  correctAnswer?: string;
  explanation?: string;
  codeSnippet?: string;
  points: number;
}

export interface IQuiz {
  _id: string;
  title: string;
  description: string;
  subject: string;
  difficulty: DifficultyLevel;
  teacher: {
    _id: string;
    name: string;
    avatar?: string;
    bio?: string;
  } | string;
  status: QuizStatus;
  timeLimit: number; // minutes
  passingPercentage: number;
  maxAttempts: number;
  randomizeQuestions: boolean;
  randomizeAnswers: boolean;
  showCorrectAnswers: boolean;
  shareCode: string;
  questions: IQuestion[];
  attemptsCount: number;
  createdAt: string;
  updatedAt: string;
}

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

export interface IQuizAttempt {
  _id: string;
  student: {
    _id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  quiz: {
    _id: string;
    title: string;
    passingPercentage: number;
    showCorrectAnswers: boolean;
  } | string;
  quizTitle: string;
  subject: string;
  answers: IAttemptAnswer[];
  score: number;
  maxScore: number;
  percentage: number;
  passed: boolean;
  timeSpentSeconds: number;
  tabSwitchesCount: number;
  attemptNumber: number;
  completedAt: string;
}

export interface IQuestionBankItem {
  _id: string;
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
  createdAt: string;
}

export interface IClassGroup {
  _id: string;
  name: string;
  description: string;
  subject: string;
  teacher: {
    _id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  inviteCode: string;
  students: {
    _id: string;
    name: string;
    email: string;
    avatar?: string;
  }[];
  createdAt: string;
}

export interface IAssignment {
  _id: string;
  quiz: {
    _id: string;
    title: string;
    subject: string;
    difficulty: DifficultyLevel;
    timeLimit: number;
    passingPercentage: number;
  };
  classGroup: {
    _id: string;
    name: string;
  };
  teacher: {
    _id: string;
    name: string;
  };
  title: string;
  dueDate: string;
  attemptLimit: number;
  timeLimit: number;
  status: 'active' | 'closed';
  createdAt: string;
}

export interface INotification {
  _id: string;
  title: string;
  message: string;
  type: 'assignment' | 'result' | 'class_joined' | 'general';
  link?: string;
  isRead: boolean;
  createdAt: string;
}
