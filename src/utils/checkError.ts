import { ValidationError } from 'joi';
import HttpException from './http.exception';

const checkError = (error: ValidationError) => {
  console.log(error.details[0].type);
  const { type } = error.details[0];

  if (type === 'string.empty' || type === 'any.required') {
    const erro = { status: 400, message: error.message };
    throw erro as HttpException;
  } else {
    const erro = { status: 422, message: error.message };
    throw erro as HttpException;
  }
};

export default checkError;