import express from 'express';
import validate from 'express-validation';
import ProdutService from '../services/product'
import IProduct from '../interfaces/Product';
class Handler {
  path: string;
  router: express.Router;
  constructor() {
    this.path = '/products';
    this.router = express.Router();
    this.initializeRoutes();
  }

  static async index(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      const products = await ProdutService.index();
      res.status(200).send(products);
    } catch (err) {
      const error = err as Error;
      console.log(`index error: ${error}`);
    }
  }

  static async create(req: express.Request, res: express.Response) {
    try {
      console.log(`${req.body}`)
      const product = await ProdutService.create(req.body)
      res.status(200).send(product);
    } catch (err) {
      const error = err as Error;
      console.log(`create error: ${error}`);
    }
  }




  initializeRoutes() {
    this.router.get(`${this.path}/all`, Handler.index);
    this.router.post(`${this.path}/create`, Handler.create);


  }
}

export default Handler;




