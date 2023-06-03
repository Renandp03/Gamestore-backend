import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import signUpSchema from "../schemas/signUp-schema.js";
import { signUp } from "../controllers/auth-controller.js";

const authRouter = Router();

authRouter
  .post('/signUp', validateSchema(signUpSchema),signUp);

export default authRouter;