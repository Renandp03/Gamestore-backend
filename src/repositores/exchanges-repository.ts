import prisma from "../config/database.js";

async function findAllExchanges() {
    return prisma.exchanges.findMany({});
}

const exchangeRepository = {findAllExchanges};

export default exchangeRepository;