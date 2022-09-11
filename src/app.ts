import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import Client from './config/config';
import logger from 'morgan';
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
        this.app.listen(3000, () => {
            logger.compile(`App listening on the port ${3000}`);
        });
    }



    initializeMiddleWares() {
        this.app.use(cors());
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json({ limit: "8mb" }));
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    initializeControllers(handlers) {
        handlers.forEach((handlers) => {
            this.app.use('/', handlers.router);
        });
    }

    static loggerMiddleware(request, response, next) {
        logger.bind(`${request.method} ${request.path}`);
        next();
    }

}

export default App;