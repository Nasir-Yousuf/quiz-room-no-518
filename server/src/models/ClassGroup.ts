import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IClassGroup extends Document {
  name: string;
  description: string;
  subject: string;
  teacher: Types.ObjectId;
  inviteCode: string;
  students: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const ClassGroupSchema = new Schema<IClassGroup>(
  {
    name: {
      type: String,
      required: [true, 'Class name is required'],
      trim: true,
      maxlength: [100, 'Class name cannot exceed 100 characters'],
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
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    inviteCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
      index: true,
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IClassGroup>('ClassGroup', ClassGroupSchema);
