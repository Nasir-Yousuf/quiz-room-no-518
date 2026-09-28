import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/quiz_room_db';

  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[MongoDB] Connected successfully to host: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`[MongoDB] Could not connect to MongoDB (${error.message})`);
    console.error(`[MongoDB] Please set your MongoDB connection string in 'server/.env'`);
    console.error(`[MongoDB] Example: MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/quiz_room_db?retryWrites=true&w=majority`);
  }

  mongoose.connection.on('disconnected', () => {
    console.warn('[MongoDB] Disconnected from MongoDB');
  });

  mongoose.connection.on('error', (err: any) => {
    console.error('[MongoDB] Runtime error:', err);
  });
};
