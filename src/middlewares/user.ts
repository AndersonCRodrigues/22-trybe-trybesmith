import { NextFunction, Request, Response } from 'express';
import { loginSchema, userSchema } from '../schema/user.joi';
import checkError from '../utils/checkError';

const verifyLogin = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    checkError(error);
  }

  next();
};

const verifyUser = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    checkError(error);
  }

  next();
};

export { verifyLogin, verifyUser };