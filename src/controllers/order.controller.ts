import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  getAll = async (req: Request, res: Response) => {
    const result = await this.service.getAll();
    res.status(200).json(result);
  };

  create = async (req: Request, res: Response) => {
    let token = '';
    if (req.headers.authorization) {
      token = req.headers.authorization;
    }
    const { productsIds } = req.body;
    const result = await this.service.create(token, productsIds);
    res.status(201).json(result);
  };
}