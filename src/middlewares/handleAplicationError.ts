import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import httpStatus from 'http-status';

export function handleAplicationError(
    err:ErrorRequestHandler,
    req:Request,
    res:Response,
    next:NextFunction){

        if(err.name == 'notFound'){
            console.log('erro:',err);
            return res.status(httpStatus.NOT_FOUND).send({
                name:err.name,
                message:'No result for this search.'
            });
        }

}