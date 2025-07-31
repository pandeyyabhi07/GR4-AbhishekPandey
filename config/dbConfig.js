import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(' MongoDB connected');
  } catch (error) {
    console.error('DB Connection Failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
