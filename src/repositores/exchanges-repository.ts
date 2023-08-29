import prisma from "../config/database.js";

async function findAllExchanges() : Promise<exchange[]> {
    return prisma.exchanges.findMany({});
}

async function findExchangeById(id:number) {
    return prisma.exchanges.findUnique({
        where:{id},
        include:{
            desiredGame:{select:{name:true,owner:{select:{id:true,name:true,image:true}}}},
            offeredGame:{select:{name:true,owner:{select:{id:true,name:true,image:true}}}}
        }
    });
}

async function findExchangesByUserId(id:number) : Promise<exchange[]> {
    return prisma.exchanges.findMany({
        where:{
            OR:[
                {desiredGame:{owner:{id}}},
                {offeredGame:{owner:{id}}},
            ]
        }
    })
}

async function createExchange(exchangeImput:exchangeImput){
    return prisma.exchanges.create({
        data:{
            desiredGameId:exchangeImput.desiredGameId,
            offeredGameId:exchangeImput.offeredGameId,
        },
        include:{
            desiredGame:{select:{name:true,owner:{select:{id:true,name:true,image:true}}}},
            offeredGame:{select:{name:true,owner:{select:{id:true,name:true,image:true}}}}
        }
    })
}

async function updateExchange(exchangeId:number,status:string) {
    return prisma.exchanges.update({
        where:{id:exchangeId},
        data:{status},
        include:{
            desiredGame:{select:{name:true,owner:{select:{id:true,name:true,image:true}}}},
            offeredGame:{select:{name:true,owner:{select:{id:true,name:true,image:true}}}}
        }
    })
}

async function deleteExchange(id:number) {
    return prisma.exchanges.delete({where:{id}});
}

async function deleteExchangesByGameId(id:number) {
    return prisma.exchanges.deleteMany({
        where:{
            OR:[
                {desiredGame:{id}},
                {offeredGame:{id}}
            ],
            AND:[
                {status:'REQUIRED'},
            ]
        }
    });
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
    findExchangeById,
    deleteExchange,
    findExchangesByUserId,
    deleteExchangesByGameId
};

export default exchangeRepository;