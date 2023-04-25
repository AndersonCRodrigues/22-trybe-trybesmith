import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/http.exception';
import { decodeToken } from '../utils/auth';

const tokenVerify = (req: Request, _res: Response, next: NextFunction) => {
  if (!req.body.authorization) {
    const erro = { status: 401, message: 'Token not found' };
    throw erro as HttpException;
  }

  const validate = decodeToken(req.body.authorization);

  if (!validate || !validate.id) {
    const erro = { status: 401, message: 'Invalid token' };
    throw erro as HttpException;
  }

  next();
};

export default tokenVerify;