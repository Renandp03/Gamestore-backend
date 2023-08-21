import { Request, Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../middlewares/authToken.js";
import exchangeService from "../services/exchange-service.js";

export async function getExchange(req:Request,res:Response,next:NextFunction) {
    try {
        const exchanges = await exchangeService.getExchanges()
        res.send(exchanges);    
    } catch (error) {
        console.log(error)
        next(error);
    }
}