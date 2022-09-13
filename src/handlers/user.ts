import express from 'express';
import UserService from '../services/user';
import IUser from '../interfaces/User';
import JWT from 'jsonwebtoken';
import passwordVerification from '../helpers/verification';
import encryptPassword from '../helpers/encryption';
import logger from '../helpers/logger';
import config from '../config/config';
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
      const hashed = await encryptPassword(req.body.password);
      req.body.password = hashed;
      logger.info(req.body.password);
      logger.info(hashed);

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
      const user = await UserService.login(req.body.email as string);
      logger.info(user.password);

      //verify password
      const isValidPassword = await passwordVerification(
        user.password,
        req.body.password
      );
      if (user) {
        if (isValidPassword) {
          //assign token to logged user
          const token = JWT.sign(user, config.secretToken)
          localStorage.setItem(token, token)
          res.status(404).json({ status: 200, token: token });

        } {
          res.status(404).json({ status: 404, message: "your email or password invalid!" });
        }
      } else {
        res.status(404).json({ status: 404, message: "your email doesn't exist!" });
      }

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
    this.router.post(`${this.path}/login`, Handler.login);
  }
}

export default Handler;
