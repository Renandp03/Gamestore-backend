import badRequestError from '../errors/bad-request-error.js';
import notFoundError from '../errors/not-found-error.js';
import favoriteRepository from '../repositores/favorite-repository.js';
import gameRepository from '../repositores/game-repository.js';

async function postFavorite(userId:number,gameId:number) {
    const game = await gameRepository.findByGameId(gameId);
    if(!game) throw notFoundError();
    if(game.owner.id == userId) throw badRequestError();

    const favorite = await favoriteRepository.findFavorite(userId,gameId);
    if(favorite){
        await favoriteRepository.deleteFavorite(userId,gameId);
        return {message:'Deleted'}
    }

    await favoriteRepository.createFavorite(userId,gameId);
    return {message:'Created'}
}

async function getClientFavoritesGames(userId:number) {
    const games = await favoriteRepository.findFavoriteGamesByUserId(userId);
    return games;
}

const favoriteService = { postFavorite, getClientFavoritesGames };
export default favoriteService;