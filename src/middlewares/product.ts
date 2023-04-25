import { NextFunction, Request, Response } from 'express';
import producSchema from '../schema/product.joi';
import checkError from '../utils/checkError';

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