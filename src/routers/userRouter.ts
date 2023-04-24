import Router from 'express';
import UserController from '../controllers/user.controller';
import { verifyUser } from '../middlewares/user';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', verifyUser, userController.create);

export default userRouter;