import { Router } from "express";
import { getUsers, getUserById} from '../controllers/user-controller.js';
import { authenticateToken } from "../middlewares/authToken.js";

const userRouter = Router();

userRouter
  .get('/users',authenticateToken, getUsers)
  .get('/users/:id',authenticateToken, getUserById)

export default userRouter;