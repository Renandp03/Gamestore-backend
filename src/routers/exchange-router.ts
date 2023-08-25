import { Router } from "express";
import { getExchange, postExchange, updateExchange } from "../controllers/exchange-controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { authenticateToken } from "../middlewares/authToken.js";
import exchangeImputSchema from "../schemas/exchange-Imput-schema.js";
import exchangeUpdateSchema from "../schemas/exchange-update-schema.js";

const exchangeRouter = Router();

exchangeRouter
  .get('/', getExchange)
  .all('/*', authenticateToken)
  .post('/', validateSchema(exchangeImputSchema),postExchange)
  .put('/', validateSchema(exchangeUpdateSchema),updateExchange)

export default exchangeRouter;