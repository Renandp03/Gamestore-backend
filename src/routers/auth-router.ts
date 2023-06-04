import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import signUpSchema from "../schemas/signUp-schema.js";
import signInSchema from "../schemas/signIn-schema.js";
import { signUp, signIn } from "../controllers/auth-controller.js";

const authRouter = Router();

authRouter
  .post('/signUp', validateSchema(signUpSchema),signUp)
  .post('/signIn',validateSchema(signInSchema),signIn);

export default authRouter;