import express from 'express';
import UserService from '../services/user';
import IUser from '../interfaces/User';
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';
import hashPasseord from '../helpers/encryption';
class Handler {
  path: string;

  router: express.Router;
  constructor() {
    this.path = '/users';
    this.router = express.Router();
    this.initializeRoutes();
  }

  static async index(req: express.Request, res: express.Response) {
    try {
      const users = await UserService.index();
      res.status(200).send(users);
    } catch (err) {
      const error = err as Error;
      console.log(`index error: ${error}`);
    }
  }

  static async register(req: express.Request, res: express.Response) {
    try {
      // req.body.password = hashPasseord(req.body.password);
      const user = await UserService.register(req.body as IUser);
      res.status(200).send(user);
    } catch (err) {
      const error = err as Error;
      console.log(`create error: ${error}`);
    }
  }
  static async login(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      const user = await UserService.login(req.body as IUser);

      res.status(200).send(user);
    } catch (err) {
      const error = err as Error;
      console.log(`create error: ${error}`);
    }
  }

  static async show(req: express.Request, res: express.Response) {
    try {
      console.log(`${req.body}`);
      const product = await UserService.show(req.params.id as string);
      res.status(200).send(product);
    } catch (err) {
      const error = err as Error;
      console.log(`create error: ${error}`);
    }
  }

  initializeRoutes() {
    this.router.get(`${this.path}/all`, Handler.index);
    this.router.post(`${this.path}/register`, Handler.register);
    this.router.get(`${this.path}/show/:id`, Handler.show);
    this.router.get(`${this.path}/login`, Handler.login);
  }
}

export default Handler;
