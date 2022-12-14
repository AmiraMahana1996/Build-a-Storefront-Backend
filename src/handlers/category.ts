import express from 'express';
import CategoryService from '../services/category';
import ICategory from '../interfaces/category';
import authMiddelware from '../middlewares/auth.middleware';
class Handler {
  path: string;
  router: express.Router;
  constructor() {
    this.path = '/categories';
    this.router = express.Router();
    this.initializeRoutes();
  }

  static async index(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      const categories = await CategoryService.index();
      res.status(200).json({
        status: 200,
        message: 'success',
        data: categories,
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
      const category = await CategoryService.create(req.body as ICategory);
      res.status(200).json({
        status: 200,
        message: 'success',
        data: category,
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
      const category = await CategoryService.show(req.params.id as string);
      res.status(200).json({
        status: 200,
        message: 'success',
        data: category,
      });
    } catch (err) {
      const error = err as Error;
      console.log(`create error: ${error}`);
    }
  }

  static async delete(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      console.log(`${req.body}`);
      const category = await CategoryService.delete(req.params.id as string);
      res.status(200).json({
        status: 200,
        message: 'success',
        data: category,
      });
    } catch (err) {
      const error = err as Error;
      console.log(`delete error: ${error}`);
    }
  }

  initializeRoutes() {
    this.router.get(`${this.path}/all`, authMiddelware, Handler.index);
    this.router.post(`${this.path}/create`, authMiddelware, Handler.create);
    this.router.get(`${this.path}/show/:id`, authMiddelware, Handler.show);

    this.router.delete(
      `${this.path}/delete/:id`,
      authMiddelware,
      Handler.delete
    );
  }
}

export default Handler;
