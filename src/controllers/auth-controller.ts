import { Request, Response, NextFunction } from "express";

export async function signUp(req:Request,res:Response, next:NextFunction){
    try {
        const userInfo : object = req.body
        res.send('testando')
    } catch (error) {
        next(error);
    }
}
