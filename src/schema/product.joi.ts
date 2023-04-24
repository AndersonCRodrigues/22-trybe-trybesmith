import Joi from 'joi';

const producSchema = Joi.object({
  name: Joi.string().min(3).required().label('name'),
  amount: Joi.string().min(3).required().label('amount'),
}).messages({
  'string.empty': '{{#label}} is required',
  'any.required': '{{#label}} is required',
  'any.string': '{{#label}} must be a string',
  'any.min': '{{#label}} length must be at least 3 characters long',
});

export default producSchema;