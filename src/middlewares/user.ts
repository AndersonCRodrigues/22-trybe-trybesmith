import { NextFunction, Request, Response } from 'express';
import loginSchema from '../schema/user.joi';
import HttpException from '../utils/http.exception';

const verifyLogin = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    const erro = { status: 400, message: error.message };
    throw erro as HttpException;
  }

  next();
};

export default verifyLogin;