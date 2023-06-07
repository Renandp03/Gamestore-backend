import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { getAllGames, postGame } from "../controllers/game-controller.js";
import { authenticateToken } from "../middlewares/authToken.js";
import postGameSchema from "../schemas/postGame-schema.js";

const gameRouter = Router();

gameRouter
  .get('/games/all',getAllGames)
  .all('/*',authenticateToken)
  .post('/games',validateSchema(postGameSchema), postGame);

export default gameRouter;