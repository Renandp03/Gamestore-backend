import Joi from "joi";

const exchangeUpdateSchema = Joi.object({
    exchangeId: Joi.number().required(),
    newStatus:Joi.string().required(),
})

export default exchangeUpdateSchema;