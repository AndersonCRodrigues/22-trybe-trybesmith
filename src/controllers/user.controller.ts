import { NextFunction, Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  create = async (req: Request, res: Response) => {
    const token = await this.service.create(req.body);
    res.status(201).json({ token });
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;
      const token = await this.service.login(username, password);
      res.status(200).json({ token });
    } catch (e) {
      next(e);
    }
  };
}