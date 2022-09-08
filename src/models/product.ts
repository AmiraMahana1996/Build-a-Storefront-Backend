import Client from '../config/config';
import IProduct from '../interfaces/Product';

export class ProductStore {

    async index(): Promise<IProduct[]> {
        try {
            const connection = await Client.connect();
            const sql = 'SELECT * FROM products';
            const result = await connection.query(sql);
            connection.release();
            return result.rows;
        } catch (e) {
            throw new Error(`Cann't get product information: ${e}`);
        }


    }

    async show(id: number): Promise<IProduct[]> {
        try {
            const connection = await Client.connect();
            const sql = 'SELECT * FROM products WHERE id = ($1)';
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows;
        } catch (e) {
            throw new Error(`Cann't show product : ${e}`);
        }
    }
    async create(product: IProduct): Promise<IProduct[]> {
        try {
            console.log(`Servert`);
            const connection = await Client.connect();
            const sql = 'INSERT INTO products (name,price,category_id)VALUES( $1,$2,$3) RETURNING *;';
            const result = await connection.query(sql, [product.name, product.price, product.category_id]);
            connection.release();
            return result.rows[0];
        } catch (e) {
            throw new Error(`Cann't create product : ${e}`);
        }
    }
    async update(id: number, product: IProduct): Promise<IProduct[]> {
        try {
            const connection = await Client.connect();
            const sql = 'UPDATE products SET name=$1,price=$2,category_id=$3 WHERE id=$4';
            const result = await connection.query(sql, [product.name, product.price, product.category_id, id]);
            connection.release();
            return result.rows[0];
        } catch (e) {
            throw new Error(`Cann't update product : ${e}`);
        }
    }
    async delete(id: number): Promise<IProduct[]> {
        try {
            const connection = await Client.connect();
            const sql = 'DELETE FROM products WHERE id = $1';
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        } catch (e) {
            throw new Error(`Cann't delete product : ${e}`);
        }
    }

    async getProductsByCategory(id: number): Promise<IProduct[]> {
        try {
            const connection = await Client.connect();
            const sql = 'SELECT	* FROM products INNER JOIN categories USING (category_id)';
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows;
        } catch (e) {
            throw new Error(`Cann't get products by category_id product : ${e}`);
        }
    }
}

export default ProductStore;