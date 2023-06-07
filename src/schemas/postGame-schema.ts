import Joi from "joi";

const postGameSchema = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    image:Joi.string().required(),
    consoleId:Joi.number().required()
})

export default postGameSchema;