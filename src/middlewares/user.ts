import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'joi';
import { loginSchema, userSchema } from '../schema/user.joi';
import HttpException from '../utils/http.exception';

const checkError = (error: ValidationError) => {
  const { type } = error.details[0];

  if (type === 'string.empty' || type === 'any.required') {
    const erro = { status: 400, message: error.message };
    throw erro as HttpException;
  } else {
    const erro = { status: 422, message: error.message };
    throw erro as HttpException;
  }
};

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