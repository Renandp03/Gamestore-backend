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

export async function getGameById(req:Request,res:Response, next:NextFunction) {
    try {
        const gameId = Number(req.params.gameId);
        const game = await gameService.getGameById(gameId);
        res.send(game);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export async function getGamesByOwnerId(req:AuthenticatedRequest,res:Response, next:NextFunction){
    try {
        const ownerId = Number(req.params.ownerId);
        const games = await gameService.getGamesByOwnerId(ownerId);
        res.send(games);

    } catch (error) {
        next(error);
    }
}

export async function postGame(req:AuthenticatedRequest,res:Response, next:NextFunction){
    try {
        const name = String(req.body.name);
        const image = String(req.body.image);
        const consoleName = String(req.body.consoleName);
        const userId = req.userId
        const gameInfo = {name,image,userId,consoleName}
        const game = await gameService.postGame(gameInfo);
        res.status(httpStatus.CREATED).send(game);
    } catch (error) {
        next(error);
    }
}

