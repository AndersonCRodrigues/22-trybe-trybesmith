import Joi from 'joi';

const producSchema = Joi.object({
  name: Joi.string().min(3).required().label('name'),
  amount: Joi.string().min(3).required().label('amount'),
});

export default producSchema;