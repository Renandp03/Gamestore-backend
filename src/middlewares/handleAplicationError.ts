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

        if(err.name == 'Email already exist error.'){
            return res.status(httpStatus.CONFLICT).send({
                name:err.name,
                message:'This email can not be used.'
            });
        }

        if(err.name == 'Bad request error.'){
            return res.status(httpStatus.CONFLICT).send({
                name:err.name,
                message:'Bad request error.'
            });
        }

        if(err.name == 'unauthorizedError'){
            return res.status(httpStatus.CONFLICT).send({
                name:err.name,
                message:'Email or password is wrong.'
            });
        }

        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            name:'Internal server error.',
            message:'Internal server error.'
        })

}