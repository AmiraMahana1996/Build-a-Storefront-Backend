import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import Config from './config/config';
import Client from './config/Client';

import logger from './helpers/logger';
import bodyParser from 'body-parser';
dotenv.config();
class App {
  app: express.Application;
  constructor(handlers: Array<unknown>) {
    this.app = express();
    Client.connect();
    this.initializeMiddleWares();
    this.initializeControllers(handlers);
  }

  listen() {
    this.app.listen(Config.port, () => {
      logger.info(`App listening on the port ${Config.port}`);
    });
  }

  initializeMiddleWares() {
    this.app.use(cors());

    this.app.use(bodyParser.json({ limit: '8mb' }));
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use((req, res, done) => {
      logger.info(req.originalUrl);
      done();
    });
  }

  initializeControllers(handlers) {
    handlers.forEach((handlers) => {
      this.app.use('/', handlers.router);
    });
  }
}

export default App;
