import Client from '../config/Client';
import IOrder from '../interfaces/Order';

class OrderService {



    static async create(order: IOrder): Promise<IOrder> {
        try {
            const connection = await Client.connect();
            const sql =
                'INSERT INTO products (name,price,category_id)VALUES( $1,$2,$3) RETURNING *;';
            const result = await connection.query(sql, [
                order.product_id,
                order.product_qty,
                order.user_id,
                order.status,
            ]);
            connection.release();
            return result.rows[0];
        } catch (e) {
            throw new Error(`Cann't update product : ${e}`);
        }
    }
}

export default OrderService;
