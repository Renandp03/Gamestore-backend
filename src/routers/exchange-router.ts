import { Router } from "express";
import { getExchange, postExchange } from "../controllers/exchange-controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { authenticateToken } from "../middlewares/authToken.js";
import exchangeSchema from "../schemas/exchange-schema.js";

const exchangeRouter = Router();

exchangeRouter
  .get('/', getExchange)
  .all('/*', authenticateToken)
  .post('/', validateSchema(exchangeSchema),postExchange)

export default exchangeRouter;