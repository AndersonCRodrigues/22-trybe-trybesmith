import { sign, verify } from 'jsonwebtoken';

const secretkey = process.env.JWT_SECRET || 'insecure';

interface ITokenId {
  id:number
}

const createToken = (id: number) => {
  const data = {
    id,
  };

  const token = sign(
    data,
    secretkey,
    {
      expiresIn: '1d',
      algorithm: 'HS256',
    },
  );

  return token;
};

const decodeToken = (token: string) : ITokenId => {
  const decode = verify(token, secretkey);
  return decode as ITokenId;
};

export { createToken, decodeToken };