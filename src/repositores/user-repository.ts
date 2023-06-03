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

async function findUserByEmail(email:string){
    return prisma.users.findUnique({
        where:{
            email
        }
    })
}


async function createNewUser(newUserInfo:newUserInfo){
    return prisma.users.create({
        data:{
            name:newUserInfo.name,
            email:newUserInfo.email,
            password:newUserInfo.password,
            image:newUserInfo.password,
            phone:newUserInfo.phone,
            addressId:newUserInfo.addressId
        }
    })
}

type newUserInfo = {
    name:string,
    email:string,
    password:string,
    image:string | null,
    phone:string,
    addressId:number
}
const userRepository = { findUsers, findUserByEmail, createNewUser };
export default userRepository;