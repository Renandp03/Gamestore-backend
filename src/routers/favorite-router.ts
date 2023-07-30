import { Router } from "express";
import { authenticateToken } from "../middlewares/authToken.js";
import { postFavorite, getUserFavoriteGames } from "../controllers/favorite-controller.js";

const favoritesRouter = Router();

favoritesRouter
  .get('/favorites/:userId', authenticateToken, getUserFavoriteGames)
  .get('/favorites/:gameId/find',authenticateToken)
  .post('/favorites/:gameId', authenticateToken, postFavorite);

export default favoritesRouter;