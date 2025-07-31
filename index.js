import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/dbConfig.js';
import studentRoutes from './routes/studentRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
// PORT=5000
// MONGO_URL=mongodb://localhost:27017/mydatabase

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(` Server running at http://localhost:${port}`);
  });
}).catch((err) => {
  console.error(' Failed to connect to MongoDB:', err);
});
