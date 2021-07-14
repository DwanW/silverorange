import express, { Response, Request, NextFunction } from 'express';
import cors from 'cors';
import { posts } from './routes/posts';
import { terrible } from './middleware/terrible';
import { AppError } from './@types/AppError';

// CORS header configuration
const corsOptions = {
  methods: 'GET',
  allowedHeaders: 'Content-Type,Authorization',
};

export const app = express();

// Routes. Note these will fail about 25% due to "terrible" middleware.
app.use('/posts', terrible(), cors(corsOptions), posts);

// error handling middleware should be loaded after the loading the routes
app.use(
  '/',
  (err: AppError, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;

    const formattedError: { status: number; message: string } = {
      status,
      message: err.message,
    };

    res.status(status);
    res.send(JSON.stringify(formattedError));
  }
);
