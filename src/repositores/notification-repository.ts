import prisma from '../config/database.js';

async function create(userId:number,message:string) {
    return prisma.notifications.create({data:{userId,message}});
}

async function deleteByUserId(userId:number) {
    return prisma.notifications.deleteMany({where:{userId}});
}

const notificationRepository = {
    create,
    deleteByUserId
}
export default notificationRepository;