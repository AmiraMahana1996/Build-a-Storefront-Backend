import Client from '../config/Client';
import IOrder from '../interfaces/Order';

class OrderService {

  static async create(order: IOrder): Promise<IOrder> {
    try {
      const connection = await Client.connect();
      const sql =
        'INSERT INTO orders (product_id,product_qty,user_id,status)VALUES( $1,$2,$3,$4) RETURNING *;';
      const result = await connection.query(sql, [
        order.product_id,
        order.product_qty,
        order.user_id,
        order.status,
      ]);
      connection.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cann't create order : ${e}`);
    }
  }
  static async getCurrentOrders(userID: string): Promise<IOrder> {
    try {
      const connection = await Client.connect();
      const sql =
        'SELECT * FROM orders WHERE user_id = $1 AND status = "active"';
      const result = await connection.query(sql, [
        userID
      ]);
      connection.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cann't create order : ${e}`);
    }
  }
  static async getCompleteOrders(userID: string): Promise<IOrder> {
    try {
      const connection = await Client.connect();
      const sql =
        'SELECT * FROM orders WHERE user_id = $1 AND status = "complete"';
      const result = await connection.query(sql, [
        userID
      ]);
      connection.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cann't create order : ${e}`);
    }
  }
}

export default OrderService;
