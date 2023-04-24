import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const result = await this.service.create(name, amount);
    res.status(201).json(result);
  };
}