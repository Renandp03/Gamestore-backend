import Joi from "joi";

export const exchangeImputSchema = Joi.object({
    desiredGameId: Joi.number().required(),
    offeredGameId:Joi.number().required(),
})

export const exchangeUpdateSchema = Joi.object({
    exchangeId: Joi.number().required(),
    newStatus:Joi.string().required(),
})

export const deleteExchangeSchema = Joi.object({
    exchangeId: Joi.number().required()
})