import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  constructor(public service = new ProductService()) {}

  async create(req: Request, res: Response) {
    const { name, amout } = req.body;
    const result = await this.service.create(name, amout);
    res.status(201).json(result);
  }
}