import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IAssignment extends Document {
  quiz: Types.ObjectId;
  classGroup: Types.ObjectId;
  teacher: Types.ObjectId;
  title: string;
  startDate: Date;
  dueDate: Date;
  attemptLimit: number;
  timeLimit: number;
  status: 'active' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

const AssignmentSchema = new Schema<IAssignment>(
  {
    quiz: {
      type: Schema.Types.ObjectId,
      ref: 'Quiz',
      required: true,
      index: true,
    },
    classGroup: {
      type: Schema.Types.ObjectId,
      ref: 'ClassGroup',
      required: true,
      index: true,
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    attemptLimit: {
      type: Number,
      default: 1, // default 1 attempt for formal class assignment
    },
    timeLimit: {
      type: Number,
      default: 0, // minutes
    },
    status: {
      type: String,
      enum: ['active', 'closed'],
      default: 'active',
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IAssignment>('Assignment', AssignmentSchema);
