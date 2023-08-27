import { Router } from "express";
import { getExchanges,getExchangesByUser, postExchange, updateExchange, deleteExchange } from "../controllers/exchange-controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { authenticateToken } from "../middlewares/authToken.js";
import {exchangeImputSchema,exchangeUpdateSchema, deleteExchangeSchema} from "../schemas/exchange-Imput-schema.js";

const exchangeRouter = Router();

exchangeRouter
  .all('/*', authenticateToken)
  .get('/', getExchangesByUser)
  .post('/', validateSchema(exchangeImputSchema),postExchange)
  .put('/', validateSchema(exchangeUpdateSchema),updateExchange)
  .delete('/',validateSchema(deleteExchangeSchema), deleteExchange);

export default exchangeRouter;