import gameRepository from '../repositores/game-repository.js';
import badRequestError from '../errors/bad-request-error.js';
import exchangeRepository, { exchangeImput } from '../repositores/exchanges-repository.js';
import unauthorizedError from '../errors/unauthorized-error.js';
import notFoundError from '../errors/not-found-error.js';

async function getExchanges() : Promise <any[]>{
    const exchanges = await exchangeRepository.findAllExchanges();
    return exchanges;
}

async function getExchangeById(id:number) {
    const exchange = exchangeRepository.findExchangeById(id);
    return exchange;
}
async function postExchange(userId:number,exchangeImput: exchangeImput) : Promise <any>{
    const game = await gameRepository.findByGameId(exchangeImput.offeredGameId);
    if(game.owner.id !== userId) throw unauthorizedError();
    if(!exchangeImput.desiredGameId || !exchangeImput.offeredGameId) throw badRequestError();
    if(exchangeImput.desiredGameId === exchangeImput.offeredGameId) throw badRequestError();
    const newExchange = await exchangeRepository.createExchange(exchangeImput);
    return newExchange;
}

async function updateExchange(userId:number,exchangeId:number,status:string) {
    const exchange = await exchangeRepository.findExchangeById(exchangeId);
    if(!exchange) throw notFoundError();
    if(exchange.desiredGame.owner.id !== userId) throw unauthorizedError();
    await exchangeRepository.updateExchange(exchangeId,status);
  
}
const exchangeService = {getExchanges,postExchange,updateExchange,getExchangeById};

export default exchangeService;