import prisma from '../config/database.js';

async function findFavorite(userId:number, gameId:number) {
    return prisma.favorits.findFirst({
        where:{
            userId,
            gameId
        }
    });
};

async function createFavorite(userId:number, gameId:number) {
    return prisma.favorits.create({
        data:{
            userId,
            gameId
        }
    })
};

async function deleteFavorite(userId:number, gameId:number) {
    return prisma.favorits.deleteMany({
        where:{
            gameId,
            userId
        }
    })
};

async function findFavoriteGamesByUserId(userId:number) {
    return prisma.favorits.findMany({
        where:{
            userId
        },
        include:{
            games: true
        }
    })
}

const favoriteRepository = { findFavorite, createFavorite, deleteFavorite, findFavoriteGamesByUserId };
export default favoriteRepository;