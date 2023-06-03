import addressRepository from '../repositores/address-repository.js'
import userRepository from '../repositores/user-repository.js';
import bcrypt from 'bcrypt';
import userEmailAlreadyExistError from '../errors/user-email-already-exist-error.js'

async function signUp(userInfo:userInfo) {

    const {name, email, password, phone, image } = userInfo;

    const user = await userRepository.findUserByEmail(email);
    if(user) throw userEmailAlreadyExistError();
    
    const state = await addressRepository.getStateByName(userInfo.state);
    const city = await addressRepository.getCityByName(userInfo.city,state.id);
    const street = await addressRepository.getStreetByName(userInfo.street,city.id);
    const address = await addressRepository.createAddress(state.id,city.id,street.id);

    const hashPassword = bcrypt.hashSync(password,10);
    const newInfos = {name,email,password:hashPassword,phone,image,addressId:address.id};
    const newUser = await userRepository.createNewUser(newInfos);
    return newUser;

}

type userInfo = {
    name: string,
    email:string,
    password:string,
    phone:string,
    image:string,
    state:string,
    city:string,
    street:string
}

const authService = {signUp};

export default authService;