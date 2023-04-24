import connection from '../models/connection';
import OrderModel from '../models/order.model';

export default class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  getAll = async () => {
    const result = await this.model.getAll();
    return result;
  };
}