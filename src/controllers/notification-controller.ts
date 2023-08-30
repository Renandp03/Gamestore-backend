import { Request, Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../middlewares/authToken.js";
import notificationService from "../services/notification-service.js";
import httpStatus from "http-status";

export async function getUserNotifications(req:AuthenticatedRequest,res:Response, next:NextFunction){
    try {
        const userId = req.userId;
        const notifications = await notificationService.getUserNotifications(userId);
        res.send(notifications);

    } catch (error) {
        next(error);
    }
}

export async function getNotificationInfos(req:AuthenticatedRequest,res:Response, next:NextFunction){
    try {

    } catch (error) {
        next(error);
    }
}