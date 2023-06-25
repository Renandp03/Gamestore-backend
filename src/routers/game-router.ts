import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { getAllGames, getGamesByOwnerId,postGame } from "../controllers/game-controller.js";
import { authenticateToken } from "../middlewares/authToken.js";
import postGameSchema from "../schemas/postGame-schema.js";

const gameRouter = Router();

gameRouter
  .get('/games',getAllGames)
  .get('/games/:ownerId', authenticateToken, getGamesByOwnerId)
  .post('/games', authenticateToken, validateSchema(postGameSchema), postGame);

export default gameRouter;