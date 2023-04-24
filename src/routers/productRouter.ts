import Router from 'express';
import ProductController from '../controllers/product.controller';
import verifyProduct from '../middlewares/product';

const producRouter = Router();
const productController = new ProductController();
producRouter.post('/', verifyProduct, productController.create);
producRouter.get('/', productController.getAll);

export default producRouter;