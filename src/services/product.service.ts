import connection from '../db/connection';
import ProductModel from '../models/product.model';

export default class ProductService {
  constructor(public model = new ProductModel(connection)) {}

  async create(name: string, amount: string) {
    const result = await this.model.create(name, amount);
    return result;
  }
}