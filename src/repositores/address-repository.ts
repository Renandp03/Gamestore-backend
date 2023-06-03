import prisma from "../config/database.js";


async function getStateByName(stateName:string) {
    const state = await prisma.state.findFirst({
        where:{
            name: stateName
        },
        select:{
            id:true
        }
    });
    if(state) {
        return state;
    };
    const newState = await prisma.state.create({
        data:{
            name: stateName
        },
        select:{
            id:true
        }
    });

    return newState;

}

async function getCityByName(cityName:string, stateId:number) {
    const city = await prisma.city.findFirst({
        where:{
            name: cityName
        },
        
    });
    if(city && city.stateId == stateId) {
        return city;
    };
    const newCity = await prisma.city.create({
        data:{
            name: cityName,
            stateId
        },
        select:{
            id:true
        }
    });

    return newCity;

}

async function getStreetByName(StreetName:string, cityId:number) {
    const Street = await prisma.street.findFirst({
        where:{
            name: StreetName
        },
       
    });
    if(Street && Street.cityId == cityId) {
        return Street;
    };
    const newStreet = await prisma.street.create({
        data:{
            name: StreetName,
            cityId
        },
        select:{
            id:true
        }
    });

    return newStreet;

}

async function createAddress(stateId:number,cityId:number,streetId:number){
    return prisma.address.create({
        data:{
            stateId,
            cityId,
            streetId
        },
        select:{
            id:true
        }
    })
}



const addressRepository = {getStateByName, getCityByName, getStreetByName, createAddress};
export default addressRepository;