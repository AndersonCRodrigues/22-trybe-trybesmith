import connection from '../models/connection';
import OrderModel from '../models/order.model';
import { decodeToken } from '../utils/auth';

export default class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  getAll = async () => {
    const result = await this.model.getAll();
    return result;
  };

  create = async (token: string, productIds: number[]) => {
    const decode = decodeToken(token);

    const result = await this.model.updateProduct(decode.id, productIds);

    return result;
  };
}