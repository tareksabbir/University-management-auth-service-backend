import express, { Application } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';
//import { error } from 'winston'
//import ApiError from './errors/ApiError'

const app: Application = express();

app.use(cors());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api/v1/user', UserRoutes);

//testing route
// app.get('/', async(req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandled promise rejections'))
// })

// global error handler
app.use(globalErrorHandler);

export default app;
