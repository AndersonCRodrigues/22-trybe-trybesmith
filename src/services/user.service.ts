import UserModel from '../models/user.model';
import connection from '../models/connection';
import { ICharacter } from '../interfaces';

export default class ProductService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  create = async ({ username, vocation, level, password } : ICharacter) => {
    const result = await this.model.create(username, vocation, level, password);
    return result;
  };
}