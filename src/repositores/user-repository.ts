import prisma from "../config/database.js";

async function findUsers(){
    return prisma.user.findMany({
        select:{
            id:true,
            name:true,
            email:true,
            image:true,
            games:true,
            phone:true,
            favorites:true
        }
    });
}

async function findUserById(id:number){
    return prisma.user.findUnique({
        where:{id},
        select:{
            id:true,
            name:true,
            email:true,
            image:true,
            games:{
                select:{
                    id:true,
                    name:true,
                    image:true,
                    platform:{
                        select:{
                            name:true
                        }
                    }
                },
            },
            phone:true,
            favorites:true,
            address:{
                select:{
                    city:{
                        select:{
                            name:true
                        }
                    }
                }
            }
        }
    });
}


async function findUserByEmail(email:string){
    return prisma.user.findUnique({
        where:{
            email
        }
    })
}

async function createNewUser(newUserInfo:newUserInfo){
    return prisma.user.create({
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
    const session = await prisma.session.findUnique({
        where:{userId}
    });

    if(session){
        return prisma.session.update({
            where:{userId},
            data:{token},
            select:{
                token:true,
                user:{
                    select:{
                        id:true,
                        name:true,
                        image:true
                    }
                }
            }
        })
    }
    return await prisma.session.create({
        data:{
            userId,
            token
        },
        select:{
            token:true,
            user:{
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
const userRepository = { findUsers, findUserById,findUserByEmail, createNewUser, createNewSession };
export default userRepository;