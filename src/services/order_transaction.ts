import Client from '../config/Client';
import IOrderTransaction from '../interfaces/order-transaction';

class IOrderTransactionService {
  static async create(order: IOrderTransaction): Promise<IOrderTransaction> {
    try {
      const connection = await Client.connect();
      const sql =
        'INSERT INTO orderTransactions (product_id,product_qty,order_id,user_id)VALUES( $1,$2,$3,$4) RETURNING *;';
      const result = await connection.query(sql, [
        order.product_id,
        order.product_qty,
        order.order_id,
        order.user_id,
      ]);
      connection.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cann't create order transaction : ${e}`);
    }
  }
}

export default IOrderTransactionService;
