import prisma from "../config/database.js";

async function findAllExchanges() {
    return prisma.exchanges.findMany({});
}

async function createExchange(exchangeImput:exchangeImput){
    return prisma.exchanges.create({
        data:{
            desiredGameId:exchangeImput.desiredGameId,
            offeredGameId:exchangeImput.offeredGameId,
        }
    })
}

export type exchangeImput = {
    desiredGameId: number,
    offeredGameId: number,
}

const exchangeRepository = {findAllExchanges,createExchange};

export default exchangeRepository;