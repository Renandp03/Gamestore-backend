import prisma from '../config/database.js';


async function findByUserId(userId:number) : Promise <notification[]> {
    return prisma.notifications.findMany({where:{userId}});
}

async function create(userId:number,message:string) {
    return prisma.notifications.create({data:{userId,message}});
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