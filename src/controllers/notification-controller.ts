import { Request, Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../middlewares/authToken.js";
import gameService from "../services/game-service.js";
import httpStatus from "http-status";

export async function getUserNotifications(req:AuthenticatedRequest,res:Response, next:NextFunction){
    try {
        res.send('tudo funcionando.')

    } catch (error) {
        next(error);
    }
}


