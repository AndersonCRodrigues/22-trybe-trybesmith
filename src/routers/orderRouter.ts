import Router from 'express';
import OrderController from '../controllers/order.controller';

const orderRouter = Router();
const oderController = new OrderController();

orderRouter.get('/', oderController.getAll);

export default orderRouter;