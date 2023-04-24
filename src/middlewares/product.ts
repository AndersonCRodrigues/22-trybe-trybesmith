import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'joi';
import producSchema from '../schema/product.joi';
import HttpException from '../utils/http.exception';

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

const verifyProduct = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { error } = producSchema.validate(req.body);
  if (error) {
    checkError(error);
  }

  next();
};

export default verifyProduct;