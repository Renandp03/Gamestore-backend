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
            image:newUserInfo.image,
            phone:newUserInfo.phone,
            addressId:newUserInfo.addressId
        }
    })
}

async function createNewSession(userId:number,token:string) {
    const session = await prisma.sessions.findUnique({
        where:{userId}
    });

    if(session){
        return prisma.sessions.update({
            where:{userId},
            data:{token},
            select:{
                token:true,
                users:{
                    select:{
                        id:true,
                        name:true,
                        image:true
                    }
                }
            }
        })
    }
    return await prisma.sessions.create({
        data:{
            userId,
            token
        },
        select:{
            token:true,
            users:{
                select:{
                    id: true,
                    name:true,
                    image:true
                }
            }
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
const userRepository = { findUsers, findUserByEmail, createNewUser, createNewSession };
export default userRepository;