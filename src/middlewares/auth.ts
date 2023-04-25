import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/http.exception';
import { verifyToken } from '../utils/auth';

const tokenVerify = (req: Request, _res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    const erro = { status: 401, message: 'Token not found' };
    throw erro as HttpException;
  }

  const validate = verifyToken(req.headers.authorization);

  if (validate.message) {
    const erro = { status: 401, message: 'Invalid token' };
    throw erro as HttpException;
  }

  next();
};

export default tokenVerify;