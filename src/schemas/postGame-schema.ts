import Joi from "joi";

const postGameSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    image:Joi.string().required(),
    consoleName:Joi.string().required()
})

export default postGameSchema;