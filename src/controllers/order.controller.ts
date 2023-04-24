import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  create = async (req: Request, res: Response) => {
    const result = await this.service.getAll();
    res.status(201).json(result);
  };
}