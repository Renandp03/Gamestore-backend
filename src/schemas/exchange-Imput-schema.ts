import Joi from "joi";

const exchangeImputSchema = Joi.object({
    desiredGameId: Joi.number().required(),
    offeredGameId:Joi.number().required(),
})

export default exchangeImputSchema;