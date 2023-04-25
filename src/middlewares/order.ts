import { NextFunction, Request, Response } from 'express';
import checkError from '../utils/checkError';
import orderSchema from '../schema/order';

const verifyOrder = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { error } = orderSchema.validate(req.body);
  if (error) {
    checkError(error);
  }

  next();
};

export default verifyOrder;