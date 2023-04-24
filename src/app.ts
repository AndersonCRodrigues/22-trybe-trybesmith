import express from 'express';
import errorHandler from './middlewares/errorHandler';
import producRouter from './routers/productRouter';

const app = express();

app.use(express.json());

// rotas
app.use('/products', producRouter);

// middleware de error
app.use(errorHandler);

export default app;
