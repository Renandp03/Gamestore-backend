import { Request, Response, NextFunction } from "express";
import authService from "../services/auth-service.js";
import httpStatus from "http-status";

export async function signUp(req:Request,res:Response, next:NextFunction){
    try {
        const userInfo = req.body;
        const newUser = await authService.signUp(userInfo);
        res.status(httpStatus.CREATED).send(newUser)
    } catch (error) {
        next(error);
    }
}

export async function signIn(req:Request,res:Response, next:NextFunction){
    try {
        const {email, password} = req.body;
        const token = await authService.signIn(email,password);
        res.status(httpStatus.OK).send(token);
    } catch (error) {
        next(error);
    }
}