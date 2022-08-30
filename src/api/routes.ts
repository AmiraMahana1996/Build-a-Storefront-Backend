import { Request, Response, Router } from 'express';
import { validationMiddelware } from '../middlewares/validation.middleware';


import cacheMiddleware from '../middlewares/cacge.middleware';

const router = Router();

// server side routes


// call handel
router.get('/', async (req: Request, res: Response) => {
  res.json({ message: 'Server is running and you can call apis.' });
});
export default router;
