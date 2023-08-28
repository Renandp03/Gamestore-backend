import { Router } from "express";
import { authenticateToken } from "../middlewares/authToken.js";
import { postFavorite, getUserFavoriteGames } from "../controllers/favorite-controller.js";

const favoritesRouter = Router();

favoritesRouter
  .all('/', authenticateToken)
  .get('/:userId', getUserFavoriteGames)
  .get('/:gameId/find',)
  .post('/:gameId', postFavorite);

export default favoritesRouter;