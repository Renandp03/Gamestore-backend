import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import unauthorizedError from '../errors/unauthorized-error.js';

import prisma  from '../config/database.js';

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if(!token) throw unauthorizedError();

    const session = await findSessionByToken(token);
    if(!session) throw unauthorizedError();

    req.userId = session.userId;

    next();
    
  } catch (error) {
    res.status(httpStatus.UNAUTHORIZED).send({name:error.name,message:error.message})
  }
}

async function findSessionByToken(token:string){
    return prisma.sessions.findFirst({
        where:{
            token
        }
    })
}


export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
  userId: number;
};
