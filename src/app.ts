import express from 'express';
import cors from 'cors';
import userRouter from './routers/user-routes.js';
import gameRouter from './routers/game-router.js';
import favoritesRouter from './routers/favorite-router.js';
import authRouter from './routers/auth-router.js';
import exchangeRouter from './routers/exchange-router.js';
import notificationRouter from './routers/notification-router.js';
import { handleAplicationError } from './middlewares/handleAplicationError.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users',userRouter);
app.use('/games',gameRouter);
app.use('/favorites',favoritesRouter);
app.use('/notifications',notificationRouter);
app.use('/exchange',exchangeRouter);
app.use(authRouter);

app.use(handleAplicationError);

app.listen(5000,()=>console.log('executando...'))