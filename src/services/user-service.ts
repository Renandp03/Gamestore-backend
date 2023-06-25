import userRepository from '../repositores/user-repository.js';
import notFoundError from '../errors/not-found-error.js';

async function getUsers(){
    const users = await userRepository.findUsers();
    if(!users || users.length == 0) throw notFoundError();

    return users;
}

async function getUserInfo(userId:number){
    const userInfo = await userRepository.findUserById(userId);
    if(!userInfo) throw notFoundError();

    return userInfo;
}

const userService = { getUsers,getUserInfo };
export default userService;