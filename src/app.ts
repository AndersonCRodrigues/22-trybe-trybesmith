import express from 'express';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());

// rotas

// middleware de error
app.use(errorHandler);

export default app;
