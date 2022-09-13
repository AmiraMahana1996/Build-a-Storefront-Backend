import Client from '../config/Client';
import IOrder from '../interfaces/Order';
import removeSpaces from '../helpers/removeSpaces'
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
        removeSpaces(order.status),
      ]);
      connection.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cann't create order : ${e}`);
    }
  }
  static async getCurrentOrders(userID: string): Promise<IOrder[]> {
    try {
      const status = "active";
      const connection = await Client.connect();
      const sql =
        'SELECT * FROM orders WHERE user_id = $1 AND status = $2';
      const result = await connection.query(sql, [userID, status]);
      connection.release();
      return result.rows;
    } catch (e) {
      throw new Error(`Cann't create order : ${e}`);
    }
  }
  static async getCompleteOrders(userID: string): Promise<IOrder[]> {
    try {
      const status = "complete";
      const connection = await Client.connect();
      const sql =
        'SELECT * FROM orders WHERE user_id = $1 AND status = $2';
      const result = await connection.query(sql, [userID, status]);
      connection.release();
      return result.rows;
    } catch (e) {
      throw new Error(`Cann't create order : ${e}`);
    }
  }
}

export default OrderService;
