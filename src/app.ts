import express from 'express';
import errorHandler from './middlewares/errorHandler';
import producRouter from './routers/productRouter';
import userRouter from './routers/userRouter';
import orderRouter from './routers/orderRouter';

const app = express();

app.use(express.json());

// rotas
app.use('/products', producRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

// middleware de error
app.use(errorHandler);

export default app;
