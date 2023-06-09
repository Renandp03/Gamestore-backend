import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { authenticateToken } from "../middlewares/authToken.js";
import { postFavorite, getUserFavoriteGames } from "../controllers/favorite-controller.js";

const favoritesRouter = Router();

favoritesRouter
  .all('/*',authenticateToken)
  .get('/favorites/get/:userId', getUserFavoriteGames)
  .post('/favorites/post/:gameId', postFavorite);

export default favoritesRouter;