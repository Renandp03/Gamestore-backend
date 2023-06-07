import badRequestError from '../errors/bad-request-error.js';
import notFoundError from '../errors/not-found-error.js';
import gameRepository from '../repositores/game-repository.js'

async function getallgames() {
    const games = await gameRepository.findAllGames();
    if(games.length == 0) throw notFoundError()
    return games;
}

async function postGame(gameInfo:gameInput){
    const {name, image, userId, consoleId} = gameInfo;
    if(!name || !image || !userId || !consoleId) throw badRequestError();

    const newGame = await gameRepository.createGame(gameInfo);
    return newGame;
}

export type gameInput = {
    name:string,
    image:string,
    userId:number,
    consoleId:number
}

const gameService = {getallgames,postGame};
export default gameService;