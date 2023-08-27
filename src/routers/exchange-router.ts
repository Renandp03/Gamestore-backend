import { Router } from "express";
import { getExchange, postExchange, updateExchange, deleteExchange } from "../controllers/exchange-controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { authenticateToken } from "../middlewares/authToken.js";
import {exchangeImputSchema,exchangeUpdateSchema, deleteExchangeSchema} from "../schemas/exchange-Imput-schema.js";

const exchangeRouter = Router();

exchangeRouter
  .get('/', getExchange)
  .get('/:id',)
  .all('/*', authenticateToken)
  .post('/', validateSchema(exchangeImputSchema),postExchange)
  .put('/', validateSchema(exchangeUpdateSchema),updateExchange)
  .delete('/',validateSchema(deleteExchangeSchema), deleteExchange);

export default exchangeRouter;