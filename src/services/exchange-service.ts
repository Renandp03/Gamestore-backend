import exchangeRepository from '../repositores/exchanges-repository.js'

async function getExchanges(){
    const exchanges = await exchangeRepository.findAllExchanges();
    return exchanges;
}

const exchangeService = {getExchanges};

export default exchangeService;