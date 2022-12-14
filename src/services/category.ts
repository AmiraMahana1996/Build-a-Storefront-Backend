import Client from '../config/Client';
import ICategory from '../interfaces/category';
import removeSpaces from '../helpers/removeSpaces';
class CategoryService {
  static async index(): Promise<ICategory[]> {
    try {
      const connection = await Client.connect();
      const sql = 'SELECT * FROM categories';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (e) {
      throw new Error(`Cann't get categories information: ${e}`);
    }
  }

  static async show(id: string): Promise<ICategory> {
    try {
      const connection = await Client.connect();
      const sql = 'SELECT * FROM categories WHERE id = ($1)';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cann't show product : ${e}`);
    }
  }
  static async create(category: ICategory): Promise<ICategory> {
    try {
      const connection = await Client.connect();
      const sql = 'INSERT INTO categories (name)VALUES( $1) RETURNING *;';
      const result = await connection.query(sql, [removeSpaces(category.name)]);
      connection.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cann't create product : ${e}`);
    }
  }

  static async delete(id: string): Promise<ICategory> {
    try {
      const connection = await Client.connect();
      const sql = 'DELETE FROM categories WHERE id = $1';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cann't delete product : ${e}`);
    }
  }
}

export default CategoryService;
