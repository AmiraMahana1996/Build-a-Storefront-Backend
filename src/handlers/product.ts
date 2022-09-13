import express from 'express';
import ProdutService from '../services/product';
import IProduct from '../interfaces/Product';
import authMiddelware from '../middlewares/auth.middleware';
class Handler {
  path: string;
  router: express.Router;
  constructor() {
    this.path = '/products';
    this.router = express.Router();
    this.initializeRoutes();
  }

  static async index(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      const products = await ProdutService.index();
      res.status(200).json({
        status: 200,
        message: 'success',
        data: products,
      });
    } catch (err) {
      const error = err as Error;
      console.log(`index error: ${error}`);
    }
  }

  static async create(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      console.log(`${req.body}`);
      const product = await ProdutService.create(req.body as IProduct);
      res.status(200).json({
        status: 200,
        message: 'success',
        data: product,
      });
    } catch (err) {
      const error = err as Error;
      console.log(`create error: ${error}`);
    }
  }

  static async show(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      console.log(`${req.body}`);
      const product = await ProdutService.show(req.params.id as string);
      res.status(200).json({
        status: 200,
        message: 'success',
        data: product,
      });
    } catch (err) {
      const error = err as Error;
      console.log(`create error: ${error}`);
    }
  }
  static async update(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      console.log(`${req.body}`);
      const product = await ProdutService.update(
        req.params.id as unknown as number,
        req.body as IProduct
      );
      res.status(200).json({
        status: 200,
        message: 'success',
        data: product,
      });
    } catch (err) {
      const error = err as Error;
      console.log(`update error: ${error}`);
    }
  }

  static async delete(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      console.log(`${req.body}`);
      const product = await ProdutService.delete(req.params.id as string);
      res.status(200).json({
        status: 200,
        message: 'success',
        data: product,
      });
    } catch (err) {
      const error = err as Error;
      console.log(`delete error: ${error}`);
    }
  }

  static async getProductsByCategory(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      console.log(`${req.body}`);
      const products = await ProdutService.getProductsByCategory(
        req.params.id as string
      );
      res.status(200).json({
        status: 200,
        message: 'success',
        data: products,
      });
    } catch (err) {
      const error = err as Error;
      console.log(`delete error: ${error}`);
    }
  }

  initializeRoutes() {
    this.router.get(`${this.path}/all`, Handler.index);
    this.router.post(`${this.path}/create`, authMiddelware, Handler.create);
    this.router.get(`${this.path}/show/:id`, authMiddelware, Handler.show);
    this.router.put(`${this.path}/update/:id`, authMiddelware, Handler.update);
    this.router.delete(
      `${this.path}/delete/:id`,
      authMiddelware,
      Handler.delete
    );
    this.router.get(
      `${this.path}/by-category-id/:id`,
      authMiddelware,
      Handler.getProductsByCategory
    );
  }
}

export default Handler;
