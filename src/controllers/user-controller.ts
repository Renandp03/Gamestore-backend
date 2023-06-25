import { Request, Response, NextFunction } from "express";
import userService from "../services/user-service.js";

export async function getUsers(req:Request,res:Response, next:NextFunction){
    try {
        const users = await userService.getUsers();
        res.send(users);
    } catch (error) {
        next(error);
    }
}

export async function getUserById(req:Request,res:Response, next:NextFunction){
    try {
        const userId = Number(req.params.id);
        const userInfo = await userService.getUserInfo(userId);
        res.send(userInfo);
    } catch (error) {
        next(error);
    }
}