import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import httpStatus from 'http-status';

export function handleAplicationError(
    err:HandleError,
    req:Request,
    res:Response,
    next:NextFunction){

        if(err.name == 'notFound'){
            return res.status(httpStatus.NOT_FOUND).send({
                name:err.name,
                message: err.message
            });
        }

        if(err.name == 'Email already exist error.'){
            return res.status(httpStatus.CONFLICT).send({
                name:err.name,
                message: err.message
            });
        }

        if(err.name == 'Bad request error.'){
            return res.status(httpStatus.BAD_REQUEST).send({
                name:err.name,
                message: err.message
            });
        }

        if(err.name == 'unauthorizedError'){
            return res.status(httpStatus.UNAUTHORIZED).send({
                name:err.name,
                message: err.message
            });
        }

        console.log(err)

        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            name:err.name,
            message:'Internal server error.'
        })

}

type HandleError = ErrorRequestHandler & {name:string,message:string}