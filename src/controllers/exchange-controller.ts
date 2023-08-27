import { Request, Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../middlewares/authToken.js";
import exchangeService from "../services/exchange-service.js";

export async function getExchanges(req:Request,res:Response,next:NextFunction) {
    try {
        const exchanges = await exchangeService.getExchanges()
        res.send(exchanges);    
    } catch (error) {
        console.log(error)
        next(error);
    }
}

export async function getExchangesByUser(req:AuthenticatedRequest,res:Response,next:NextFunction) {
    try {
        const userId = req.userId;
        const exchanges = await exchangeService.getExchangesByUser(userId);
        res.send(exchanges);
    } catch (error) {
        console.log(error);
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

export async function updateExchange(req:AuthenticatedRequest,res:Response,next:NextFunction) {
    try {
        const userId = req.userId;
        const exchangeId = req.body.exchangeId;
        const newStatus = req.body.newStatus;
        await exchangeService.updateExchange(userId,exchangeId,newStatus);
        res.sendStatus(200);
        
    } catch (error) {
        console.log(error.name)
        next(error);
    }
}

export async function deleteExchange(req:AuthenticatedRequest,res:Response,next:NextFunction) {
    try {
        const userId = req.userId;
        const exchangeId = req.body.exchangeId;
        await exchangeService.deleteExchange(exchangeId, userId);
        res.sendStatus(204);
        
    } catch (error) {
        console.log(error.name)
        next(error);
    }
}