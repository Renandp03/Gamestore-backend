import Joi from "joi";

const exchangeSchema = Joi.object({
    desiredGameId: Joi.number().required(),
    offeredGameId:Joi.number().required(),
})

export default exchangeSchema;