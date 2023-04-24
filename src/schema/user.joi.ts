import Joi from 'joi';

const erroIsRequired = '{{#label}} is required';

const loginSchema = Joi.object({
  username: Joi.string().required().min(3).label('username'),
  password: Joi.string().required().min(3).label('password'),
}).messages({
  'string.empty': erroIsRequired,
  'any.required': erroIsRequired,
});

const userSchema = Joi.object({
  username: Joi.string().required().min(3).label('username'),
  password: Joi.string().required().min(8).label('password'),
  level: Joi.number().required().min(1).label('level'),
  vocation: Joi.string().required().min(3).label('vocation'),
}).messages({
  'string.empty': erroIsRequired,
  'any.required': erroIsRequired,
  'level.min': '{{#label}}  must be greater than or equal to 1',
});

export { loginSchema, userSchema };