import { Request, Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../middlewares/authToken.js";
import gameService from "../services/game-service.js";
import httpStatus from "http-status";

export async function getAllGames(req:Request,res:Response, next:NextFunction){
    try {
        const games = await gameService.getallgames();
        res.send(games);
    } catch (error) {
        next(error);
    }
}

export async function getGamesByOwnerId(req:AuthenticatedRequest,res:Response, next:NextFunction){
    try {
        const ownerId = Number(req.params.id);
        const games = await gameService.getGamesByOwnerId(ownerId);
        res.send(games);

    } catch (error) {
        next(error);
    }
}

export async function postGame(req:AuthenticatedRequest,res:Response, next:NextFunction){
    try {
        const {name, image, consoleId} = req.body;
        const userId = req.userId
        const gameInfo = {name,image,userId,consoleId}
        const game = await gameService.postGame(gameInfo);
        res.status(httpStatus.CREATED).send(game);
    } catch (error) {
        next(error);
    }
}

