import unauthorizedError from '../errors/unauthorized-error.js';
import badRequestError from '../errors/bad-request-error.js';
import notFoundError from '../errors/not-found-error.js';
import gameRepository from '../repositores/game-repository.js'

async function getallgames() {
    const games = await gameRepository.findAllGames();
    if(games.length == 0) throw notFoundError()
    return games;
}

async function getGameById(gameId:number) {
    const game = await gameRepository.findByGameId(gameId);
    if(!game) throw notFoundError('O jogo selecionado não foi encontrado.');

    return game;
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

async function deleteGame(userId:number, gameId:number) {
    const game = await gameRepository.findByGameId(gameId);
    if(!game) throw notFoundError('Jogo não encontrado.');
    if(game.owner.id !== userId) throw unauthorizedError('Só o proprietario pode deletar esse jogo.');
    await gameRepository.deleteGame(gameId);
}

export type gameInfo = {
    name:string,
    image:string,
    userId:number,
    consoleName:string,
}

const gameService = {getallgames,getGameById,getGamesByOwnerId,postGame,deleteGame};
export default gameService;