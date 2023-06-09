import prisma from "../config/database.js";
import {gameInput} from '../services/game-service.js'

async function findAllGames() {
    return prisma.games.findMany({
        include:{
            users:{
                select:{
                    id:true,
                    image:true
                }
            }
        }
    })
}
async function findByGameId(id:number) {
    return prisma.games.findUnique({
        where:{id}
    })
}

async function findByOwnerId(ownerId:number) {
    return prisma.games.findMany({
        where:{
            ownerId
        },
        include:{
            users:{
                select:{
                    image:true
                }
            }
        }
    })
}

async function createGame(gameInfo:gameInput){
    return prisma.games.create({
        data:{
            name:gameInfo.name,
            image:gameInfo.image,
            ownerId:gameInfo.userId,
            consoleId:gameInfo.consoleId
        }
    })
}


const gameRepository = {findAllGames, findByGameId, findByOwnerId, createGame};
export default gameRepository;