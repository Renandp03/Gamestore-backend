import Joi from 'joi';

const signInSchema = Joi.object({
    email:Joi.string().min(8).required(),
    password:Joi.string().min(6).max(16).required(),
});

export default signInSchema;