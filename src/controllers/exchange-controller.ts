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

export async function postExchange(req:AuthenticatedRequest,res:Response,next:NextFunction) {
    try {
        const userId = req.userId;
        const exchangeImput = req.body;
        const newExchange = await exchangeService.postExchange(userId,exchangeImput);
        res.send(newExchange);    
    } catch (error) {
        console.log(error.name)
        next(error);
    }
}