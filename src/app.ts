import express from 'express';
import cors from 'cors';
import routes from './routers/routes.js';
import { handleAplicationError } from './middlewares/handleAplicationError.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(handleAplicationError);

app.listen(5000,()=>console.log('executando...'))