import UserModel from '../models/user.model';
import connection from '../models/connection';
import { ICharacter } from '../interfaces';
import HttpException from '../utils/http.exception';
import { createToken } from '../utils/auth';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  create = async ({ username, vocation, level, password } : ICharacter) => {
    const id = await this.model.create(username, vocation, level, password);
    return createToken(id);
  };

  login = async (username: string, password: string) => {
    const result = await this.model.login(username);
    console.log(result);

    if (!result || result.password !== password) {
      const erro = { status: 401, message: 'Username or password invalid' };
      throw erro as HttpException;
    }

    return createToken(result.id);
  };
}