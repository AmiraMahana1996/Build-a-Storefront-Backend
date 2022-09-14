import express from 'express';
import OrderService from '../services/order';
import IOrder from '../interfaces/Order';
import IOrderTransaction from '../interfaces/order-transaction';
import authMiddelware from '../middlewares/auth.middleware';
import IOrderTransactionService from '../services/order_transaction';
class Handler {
  path: string;
  router: express.Router;
  constructor() {
    this.path = '/orders';
    this.router = express.Router();
    this.initializeRoutes();
  }

  static async createOrder(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      await OrderService.create(req.body as IOrder).then((order) => {
        const orderTransaction = {
          product_id: order.product_id,
          product_qty: order.product_qty,
          order_id: order.id,
          user_id: order.user_id,
        };
        IOrderTransactionService.create(
          orderTransaction as IOrderTransaction
        ).then((transaction) => {
          res.status(200).json({
            status: 200,
            message: 'success',
            data: transaction,
          });
        });
      });
    } catch (err) {
      const error = err as Error;
      console.log(`index error: ${error}`);
    }
  }
  static async getCurrentOrders(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      const orders = await OrderService.getCurrentOrders(
        req.params.id as string
      );
      res.status(200).json({
        status: 200,
        message: 'success',
        data: orders,
      });
    } catch (err) {
      const error = err as Error;
      console.log(`index error: ${error}`);
    }
  }

  static async getCompletedOrders(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      const orders = await OrderService.getCompleteOrders(
        req.params.id as string
      );
      res.status(200).json({
        status: 200,
        message: 'success',
        data: orders,
      });
    } catch (err) {
      const error = err as Error;
      console.log(`index error: ${error}`);
    }
  }

  initializeRoutes() {
    this.router.post(
      `${this.path}/create`,
      // authMiddelware,
      Handler.createOrder
    );
    this.router.get(
      `${this.path}/complete/:id`,
      authMiddelware,
      Handler.getCompletedOrders
    );
    this.router.get(
      `${this.path}/current/:id`,
      authMiddelware,
      Handler.getCurrentOrders
    );
  }
}

export default Handler;
