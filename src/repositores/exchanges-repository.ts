import prisma from "../config/database.js";

async function findAllExchanges() : Promise<exchange[]> {
    return prisma.exchanges.findMany({});
}

async function findExchangeById(id:number) {
    return prisma.exchanges.findUnique({
        where:{id},
        include:{
            desiredGame:{select:{owner:{select:{id:true,name:true,image:true}}}},
            offeredGame:{select:{owner:{select:{id:true,name:true,image:true}}}}
        }
    });
}

async function createExchange(exchangeImput:exchangeImput){
    return prisma.exchanges.create({
        data:{
            desiredGameId:exchangeImput.desiredGameId,
            offeredGameId:exchangeImput.offeredGameId,
        },
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

export type exchange = {
    id: number,
    desiredGameId: number,
    offeredGameId:number,
    status: string,
    createdAt: object,
    updatedAt: object
}

const exchangeRepository = {
    findAllExchanges,
    createExchange,
    updateExchange,
    findExchangeById
};

export default exchangeRepository;