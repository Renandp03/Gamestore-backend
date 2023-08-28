import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { getAllGames, getGameById, getGamesByOwnerId,postGame,deleteGame } from "../controllers/game-controller.js";
import { authenticateToken } from "../middlewares/authToken.js";
import postGameSchema from "../schemas/postGame-schema.js";

const gameRouter = Router();

gameRouter
  .get('/',getAllGames)
  .get('/:gameId', getGameById)
  .all('/', authenticateToken)
  .get('/byUser/:ownerId', getGamesByOwnerId)
  .post('/', validateSchema(postGameSchema), postGame)
  .delete('/', deleteGame)

export default gameRouter;