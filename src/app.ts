import express from 'express';
import cors from 'cors';
import userRouter from './routers/user-routes.js';
import gameRouter from './routers/game-router.js';
import favoritesRouter from './routers/favorite-router.js';
import authRouter from './routers/auth-router.js';
import exchangeRouter from './routers/exchange-router.js';
import { handleAplicationError } from './middlewares/handleAplicationError.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(gameRouter);
app.use(favoritesRouter);
app.use(authRouter);
app.use(exchangeRouter);

app.use(handleAplicationError);

app.listen(5000,()=>console.log('executando...'))