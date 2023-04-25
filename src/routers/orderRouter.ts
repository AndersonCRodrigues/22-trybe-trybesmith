import Router from 'express';
import OrderController from '../controllers/order.controller';
import tokenVerify from '../middlewares/auth';
import verifyOrder from '../middlewares/order';

const orderRouter = Router();
const oderController = new OrderController();

orderRouter.get('/', oderController.getAll);
orderRouter.post('/', tokenVerify, verifyOrder, oderController.create);

export default orderRouter;