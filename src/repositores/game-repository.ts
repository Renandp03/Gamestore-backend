import prisma from "../config/database.js";

async function findAllGames() {
    return prisma.games.findMany({
        include:{
            users:{
                select:{
                    id:true,
                    image:true
                }
            },
            consoles:{
                select:{
                    name:true
                }
            }
        }
    })
}
async function findByGameId(id:number) {
    return prisma.games.findUnique({
        where:{id},
        include:{
            consoles:{
                select:{name:true}
            },
            users:{select:{name:true}}
        }
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
            },
            consoles:{
                select:{
                    name:true
                }
            }
        }
    })
}

async function findConsoleByName(name:string) {
    return prisma.consoles.findFirst({
        where:{
            name
        },
        select:{
            id:true
        }
    })
}

async function createConsole(name:string) {
    return prisma.consoles.create({
        data:{
            name
        },
        select:{
            id:true
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

type gameInput = {
    name:string,
    image:string,
    userId:number,
    consoleId:number
}


const gameRepository = {
    findAllGames, 
    findByGameId, 
    findByOwnerId, 
    createGame, 
    findConsoleByName,
    createConsole
};
export default gameRepository;