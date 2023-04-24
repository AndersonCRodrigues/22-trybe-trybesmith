import connection from '../models/connection';
import ProductModel from '../models/product.model';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  create = async (name: string, amount: string) => {
    const result = await this.model.create(name, amount);
    return result;
  };

  getAll = async () => {
    const result = await this.model.getAll();
    return result;
  };
}