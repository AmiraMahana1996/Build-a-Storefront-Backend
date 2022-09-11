import Router from 'express';
import productRouter from '../api/product.routes';

const router = Router();

router.get('/products', productRouter);

export default router;
