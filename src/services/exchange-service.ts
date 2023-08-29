import gameRepository from '../repositores/game-repository.js';
import badRequestError from '../errors/bad-request-error.js';
import exchangeRepository, { exchangeImput } from '../repositores/exchanges-repository.js';
import unauthorizedError from '../errors/unauthorized-error.js';
import notFoundError from '../errors/not-found-error.js';
import {exchange} from '../repositores/exchanges-repository.js';
import notificationRepository from '../repositores/notification-repository.js'

async function getExchanges() : Promise <exchange[]>{
    const exchanges = await exchangeRepository.findAllExchanges();
    return exchanges;
}
async function getExchangeById(id:number) : Promise <exchange>{
    const exchange = exchangeRepository.findExchangeById(id);
    return exchange;
}
async function getExchangesByUser(userId:number) : Promise <exchange[]>{
    const exchanges = await exchangeRepository.findExchangesByUserId(userId);
    return exchanges;
}
async function postExchange(userId:number,exchangeImput: exchangeImput) : Promise <exchange>{
    const game = await gameRepository.findByGameId(exchangeImput.offeredGameId);
    if(game.owner.id !== userId) throw unauthorizedError();
    if(!exchangeImput.desiredGameId || !exchangeImput.offeredGameId) throw badRequestError();
    if(exchangeImput.desiredGameId === exchangeImput.offeredGameId) throw badRequestError();
    const newExchange = await exchangeRepository.createExchange(exchangeImput);
    const {offeredGame,desiredGame} = newExchange;
    const message = `${offeredGame.owner.name} está oferecendo o jogo ${offeredGame.name}.`;
    await notificationRepository.create(desiredGame.owner.id,message);
    return newExchange;
}
async function updateExchange(userId:number,exchangeId:number,status:string) {
    const exchange = await exchangeRepository.findExchangeById(exchangeId);
    if(!exchange) throw notFoundError();
    if(exchange.desiredGame.owner.id !== userId) throw unauthorizedError('Somente o proprietário do jogo desejado pode atualizar o status da troca.');
    const updatedGame = await exchangeRepository.updateExchange(exchangeId,status);
    const {desiredGame, offeredGame} = updatedGame;
    const message = `${desiredGame.owner.name} aceitou sua troca. Inicie uma conversa no WhatsApp.`
    await notificationRepository.create(offeredGame.owner.id,message);
  
}
async function deleteExchange(exchangeId:number, userId:number){
    const exchange = await exchangeRepository.findExchangeById(exchangeId);
    if(!exchange) throw notFoundError('Troca não encontrada');
    if(exchange.desiredGame.owner.id !== userId && exchange.offeredGame.owner.id !== userId) throw unauthorizedError();
    await exchangeRepository.deleteExchange(exchangeId);
}
const exchangeService = {
    getExchanges,
    getExchangesByUser,
    postExchange,
    updateExchange,
    getExchangeById,
    deleteExchange
};

export default exchangeService;