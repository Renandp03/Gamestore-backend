import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { authenticateToken } from "../middlewares/authToken.js";
import { postFavorite, getUserFavoriteGames } from "../controllers/favorite-controller.js";

const favoritesRouter = Router();

favoritesRouter
  .get('/favorites/get/:userId', authenticateToken, getUserFavoriteGames)
  .post('/favorites/post/:gameId', authenticateToken, postFavorite);

export default favoritesRouter;