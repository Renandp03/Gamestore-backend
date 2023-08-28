import prisma from "../config/database.js";

async function findAllGames() {
    return prisma.game.findMany({
        include:{
            owner:{
                select:{
                    id:true,
                    image:true
                }
            },
            platform:{
                select:{
                    name:true
                }
            }
        }
    })
}
async function findByGameId(id:number) : Promise<gameResponse> {
    return prisma.game.findUnique({
        where:{id},
        select:{
            id:true,
            name:true,
            image:true,
            owner:{select:{id:true, name:true, image:true}},
            platform:{select:{id:true,name:true}}
        }
    })
}

async function findByOwnerId(ownerId:number) {
    return prisma.game.findMany({
        where:{
            ownerId
        },
        include:{
            owner:{
                select:{
                    image:true
                }
            },
            platform:{
                select:{
                    name:true
                }
            }
        }
    })
}

async function findConsoleByName(name:string) {
    return prisma.platform.findFirst({
        where:{
            name
        },
        select:{
            id:true
        }
    })
}

async function createConsole(name:string) {
    return prisma.platform.create({
        data:{
            name
        },
        select:{
            id:true
        }
    })
}

async function createGame(gameInfo:gameInput){
    return prisma.game.create({
        data:{
            name:gameInfo.name,
            image:gameInfo.image,
            ownerId:gameInfo.userId,
            consoleId:gameInfo.consoleId
        }
    })
}

async function deleteGame(id:number) {
    return prisma.game.delete({where:{id}});
}

type gameResponse = {
    id: number,
    name:string,
    image:string,
    platform:{id:number,name:string},
    owner:{id:number,name:string,image:string}
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
    createConsole,
    deleteGame
};
export default gameRepository;