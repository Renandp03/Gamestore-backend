import prisma from "../config/database.js";

async function findAllExchanges() {
    return prisma.exchanges.findMany({});
}

async function findExchangeById(id:number) {
    return prisma.exchanges.findUnique({where:{id}});
}

async function createExchange(exchangeImput:exchangeImput){
    return prisma.exchanges.create({
        data:{
            desiredGameId:exchangeImput.desiredGameId,
            offeredGameId:exchangeImput.offeredGameId,
        }
    })
}

async function updateExchange(exchangeId:number,status:string) {
    return prisma.exchanges.update({
        where:{id:exchangeId},
        data:{status}
    })
}

export type exchangeImput = {
    desiredGameId: number,
    offeredGameId: number,
}

const exchangeRepository = {
    findAllExchanges,
    createExchange,
    updateExchange,
    findExchangeById
};

export default exchangeRepository;