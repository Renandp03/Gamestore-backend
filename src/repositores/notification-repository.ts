import prisma from '../config/database.js';


async function findByUserId(userId:number) : Promise <notification[]> {
    return prisma.notifications.findMany({
        where:{userId},
        include:{exchange:{
            select:{
                desiredGame:{select:{id:true,name:true, image:true,owner:{select:{id:true,name:true,image:true}}}},
                offeredGame:{select:{id:true,name:true, image:true,owner:{select:{id:true,name:true,image:true}}}},

            }
        }}
    });
}

async function create(userId:number,message:string, exchangeId?:number) {
    return prisma.notifications.create({data:{userId,message,exchangeId}});
}

async function deleteByUserId(userId:number) {
    return prisma.notifications.deleteMany({where:{userId}});
}

export type notification = {
    id: number,
    userId: number,
    message:string
}

const notificationRepository = {
    findByUserId,
    create,
    deleteByUserId
}
export default notificationRepository;