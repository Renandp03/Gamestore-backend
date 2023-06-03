import { Request, Response, NextFunction } from "express";

export function validateSchema(schema:any){

    return(req:Request,res:Response,next:NextFunction) => {

        const { error } = schema.validate(req.body,{abortEarly:false});

        if(error){

            const errorMessages = error.details.map((err:any) => err.message);

            return res.status(422).send(errorMessages);

        }
        next()
    }
}