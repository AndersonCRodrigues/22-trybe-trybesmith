import Joi from 'joi';

const erroIsRequired = '{{#label}} is required';

const orderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number().min(1)).min(1).required()
    .label('productsIds'),
}).messages({
  'any.empty': erroIsRequired,
  'any.required': erroIsRequired,
});

export default orderSchema;