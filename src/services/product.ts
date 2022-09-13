import Client from '../config/Client';
import IProduct from '../interfaces/Product';
import removeSpaces from '../helpers/removeSpaces'
class ProductService {
  static async index(): Promise<IProduct[]> {
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

  static async show(id: string): Promise<IProduct[]> {
    try {
      const connection = await Client.connect();
      const sql = 'SELECT * FROM products WHERE id = ($1)';
      const result = await connection.query(sql, [removeSpaces(id)]);
      connection.release();
      return result.rows;
    } catch (e) {
      throw new Error(`Cann't show product : ${e}`);
    }
  }
  static async create(product: IProduct): Promise<IProduct> {
    try {
      const connection = await Client.connect();
      const sql =
        'INSERT INTO products (name,price,category_id)VALUES( $1,$2,$3) RETURNING *;';
      const result = await connection.query(sql, [
        removeSpaces(product.name),
        product.price,
        product.category_id,
      ]);
      connection.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cann't create product : ${e}`);
    }
  }
  static async update(id: string, product: IProduct): Promise<IProduct> {
    try {
      const connection = await Client.connect();
      const sql =
        'UPDATE products SET name=$1,price=$2,category_id=$3 WHERE id=$4';
      const result = await connection.query(sql, [
        removeSpaces(product.name),
        product.price,
        product.category_id,
        id,
      ]);
      connection.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cann't update product : ${e}`);
    }
  }
  static async delete(id: string): Promise<IProduct[]> {
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

  static async getProductsByCategory(id: string): Promise<IProduct[]> {
    try {
      const connection = await Client.connect();
      const sql =
        'SELECT *FROM products p JOIN categories c ON c.id = p.category_id WHERE c.id = $1';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows;
    } catch (e) {
      throw new Error(`Cann't get products by category_id product : ${e}`);
    }
  }
}

export default ProductService;
