import { Router } from "express";
import { getExchange } from "../controllers/exchange-controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { authenticateToken } from "../middlewares/authToken.js";

const exchangeRouter = Router();

exchangeRouter
  .get('/exchange', getExchange);

export default exchangeRouter;