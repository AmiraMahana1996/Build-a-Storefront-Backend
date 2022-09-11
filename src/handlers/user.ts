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
  static hashPassword(password: string) {
    const salt = bcrypt.randomBytes(128).toString('base64');
    const iterations = 10000;
    const hash = bcrypt.pbkdf2(password, salt, iterations);

    return {
      salt: salt,
      hash: hash,
      iterations: iterations
    };
  }
  static isPasswordCorrect(savedHash: string, savedSalt: string, savedIterations: string, passwordAttempt: string) {
    return savedHash == bcrypt.pbkdf2(passwordAttempt, savedSalt, savedIterations);
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
    //hash password

    try {
      req.body.password = this.hashPassword(req.body.password);
      const user = await UserService.register(req.body as IUser);
      res.status(200).send(user);
    } catch (err) {
      const error = err as Error;
      console.log(`create error: ${error}`);
    }
  }
  static async login(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user = await UserService.login(req.body as IUser);
      const token = req.body;
      if (user) {
        if (!token) {
          res.status(401).send("Unauthorized");
          return;
        } else {
          const savedToken = user.token;

          if (savedToken === token) {
            res.status(200).send({ success: "You are logged in" });
          }
          else {
            const jwtSecret = "ad5b0c9ce12b6a9f52736c31a31906fca0abe6ecabd7078e21db3cd8df795a90413204"
            const expirationTime = 3 * 60 * 60; //3hours
            const token = JWT.sign(req.body, jwtSecret,
              {
                expiresIn: expirationTime, // 3hrs in sec
              }
            );

            res.status(404).send({ fail: "invalid token" });
          }
        }
      } else {
        res.status(404).send({ fail: "this user not exist" });

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
    this.router.get(`${this.path}/login`, Handler.login);

  }
}

export default Handler;
