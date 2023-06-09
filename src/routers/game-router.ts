import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { getAllGames, getGamesByOwnerId,postGame } from "../controllers/game-controller.js";
import { authenticateToken } from "../middlewares/authToken.js";
import postGameSchema from "../schemas/postGame-schema.js";

const gameRouter = Router();

gameRouter
  .get('/games',getAllGames)
  .all('/*',authenticateToken)
  .get('/games/:ownerId',getGamesByOwnerId)
  .post('/games',validateSchema(postGameSchema), postGame);

export default gameRouter;