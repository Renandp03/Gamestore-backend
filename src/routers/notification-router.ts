import { Router } from "express";
import { authenticateToken } from "../middlewares/authToken.js";
import { getUserNotifications } from "../controllers/notification-controller.js";
const notificationRouter = Router();

notificationRouter
  .all('/', authenticateToken)
  .get('/',getUserNotifications);

export default notificationRouter;