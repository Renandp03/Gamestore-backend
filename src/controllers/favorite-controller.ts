import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../middlewares/authToken.js";
import favoriteService from "../services/favorite-service.js";
import httpStatus from "http-status";

export async function postFavorite(req:AuthenticatedRequest,res:Response, next:NextFunction){
    try {
        const userId = req.userId 
        const gameId  = Number(req.params.gameId);
        const { message } = await favoriteService.postFavorite(userId,gameId);
        if(message == 'Created') return res.sendStatus(httpStatus.CREATED);
        if(message == 'Deleted') return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

export async function getUserFavoriteGames(req:AuthenticatedRequest,res:Response, next:NextFunction){
    try {
        const userId  = Number(req.params.userId);
        const favorites = await favoriteService.getClientFavoritesGames(userId);
        res.send(favorites);

    } catch (error) {
        next(error);
    }
}

