import userRepository from '../repositores/user-repository.js';
import notFoundError from '../errors/not-found-error.js';

async function getUsers(){
    const users = await userRepository.findUsers();
    if(!users || users.length == 0) throw notFoundError();

    return users;
}

const userService = { getUsers };
export default userService;