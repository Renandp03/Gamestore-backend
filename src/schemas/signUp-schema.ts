import Joi from 'joi';

const signUpSchema = Joi.object({
    name:Joi.string().min(2).max(30).required(),
    email:Joi.string().min(8).required(),
    password:Joi.string().min(6).max(16).required(),
    state:Joi.string().required(),
    city:Joi.string().required(),
    street:Joi.string().required()
});

export default signUpSchema;