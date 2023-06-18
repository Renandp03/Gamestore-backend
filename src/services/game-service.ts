import badRequestError from '../errors/bad-request-error.js';
import notFoundError from '../errors/not-found-error.js';
import gameRepository from '../repositores/game-repository.js'

async function getallgames() {
    const games = await gameRepository.findAllGames();
    if(games.length == 0) throw notFoundError()
    return games;
}

async function getGamesByOwnerId(ownerId:number){
    const games = await gameRepository.findByOwnerId(ownerId);
    if(games.length == 0) throw notFoundError();
    return games;
}

async function postGame(gameInfo:gameInfo){
    const {name, image, userId, consoleName} = gameInfo;
    if(!name || !image || !userId || !consoleName) throw badRequestError();
    
    const consoleInfo = await gameRepository.findConsoleByName(consoleName); 
    let consoleId;
    if(!consoleInfo){
        const newConsoleInfo = await gameRepository.createConsole(consoleName);
        consoleId = newConsoleInfo.id;
    }
    else{consoleId = consoleInfo.id}
    

    const newGame = await gameRepository.createGame({name,image,userId,consoleId});
    return newGame;
}

export type gameInfo = {
    name:string,
    image:string,
    userId:number,
    consoleName:string,
}

const gameService = {getallgames,getGamesByOwnerId,postGame};
export default gameService;