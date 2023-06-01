import { Router } from "express";
import { getUsers } from '../controllers/user-controller.js';

const userRouter = Router();

userRouter
  .get('/users',getUsers);

export default userRouter;