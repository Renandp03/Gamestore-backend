import prisma from "../config/database.js";

async function findUsers(){
    return prisma.users.findMany({
        select:{
            id:true,
            name:true,
            email:true,
            image:true,
            games:true,
            phone:true,
            favorits:true
        }
    });
}

const userRepository = { findUsers };
export default userRepository;