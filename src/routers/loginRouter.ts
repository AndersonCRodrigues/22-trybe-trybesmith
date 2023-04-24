import Router from 'express';
import UserController from '../controllers/user.controller';
import { verifyLogin } from '../middlewares/user';

const loginRouter = Router();
const userController = new UserController();

loginRouter.post('/', verifyLogin, userController.login);

export default loginRouter;