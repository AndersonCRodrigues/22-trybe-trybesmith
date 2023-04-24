import { sign } from 'jsonwebtoken';

const secretkey = process.env.JWT_SECRET || 'insecure';

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

export default createToken;