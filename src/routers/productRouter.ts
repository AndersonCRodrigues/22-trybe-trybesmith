import Router from 'express';
import ProductController from '../controllers/product.controller';

const producRouter = Router();
const productController = new ProductController();

producRouter.post('/', productController.create);

export default producRouter;