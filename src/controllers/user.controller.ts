import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  create = async (req: Request, res: Response) => {
    const token = await this.service.create(req.body);
    res.status(201).json(token);
  };
}