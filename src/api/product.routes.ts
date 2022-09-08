import Router from 'express';
// import { validationMiddelware } from '../middlewares/validation.middleware';
import { index, show, update, delete_, getByCategoryId, create } from '../handlers/product'
const productRouter = Router();

productRouter.get('/all', index);
productRouter.get('/update/:id', update);
productRouter.get('/show', show);
productRouter.post('/create', create);
productRouter.get('/delete/:id', delete_);
productRouter.get('/by-category/:id', getByCategoryId);
export default productRouter;
