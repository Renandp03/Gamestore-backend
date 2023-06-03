import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import httpStatus from 'http-status';

export function handleAplicationError(
    err:ErrorRequestHandler,
    req:Request,
    res:Response,
    next:NextFunction){

        if(err.name == 'notFound'){
            return res.status(httpStatus.NOT_FOUND).send({
                name:err.name,
                message:'No result for this search.'
            });
        }

        if(err.name == 'userEmailAlreadyExist'){
            return res.status(httpStatus.CONFLICT).send({
                name:err.name,
                message:'This email can not be used.'
            });
        }

}