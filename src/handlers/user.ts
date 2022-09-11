import express from 'express';
import UserService from '../services/user';
import IUser from '../interfaces/User';
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';
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

  static async create(req: express.Request, res: express.Response) {
    //hash password
    bcrypt.hash(req.body.password, 10).then(async (hash) => {
      try {
        req.body.password = hash;
        const jwtSecret = "ad5b0c9ce12b6a9f52736c31a31906fca0abe6ecabd7078e21db3cd8df795a90413204"
        const expirationTime = 3 * 60 * 60; //3hours
        const token = JWT.sign(req.body, jwtSecret,
          {
            expiresIn: expirationTime, // 3hrs in sec
          }
        );


        console.log(`${req.body}`);
        const user = await UserService.create(req.body as IUser, token as string);
        res.status(200).send(token);
      } catch (err) {
        const error = err as Error;
        console.log(`create error: ${error}`);
      }
    });
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
    this.router.post(`${this.path}/create`, Handler.create);
    this.router.get(`${this.path}/show/:id`, Handler.show);
  }
}

export default Handler;
