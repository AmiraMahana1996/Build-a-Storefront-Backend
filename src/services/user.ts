import Client from '../config/Client';
import IUser from '../interfaces/User';
import removeSpaces from '../helpers/removeSpaces';
class UserService {
  static async index(): Promise<IUser[]> {
    try {
      const connection = await Client.connect();
      const sql = 'SELECT * FROM users';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (e) {
      throw new Error(`Cann't get users information: ${e}`);
    }
  }

  static async show(id: string): Promise<IUser> {
    try {
      const connection = await Client.connect();
      const sql = 'SELECT * FROM users WHERE id = ($1)';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cann't show users : ${e}`);
    }
  }
  static async register(user: IUser): Promise<IUser> {
    try {
      const connection = await Client.connect();
      const sql =
        'INSERT INTO users (firstname,lastname,password,email)VALUES( $1,$2,$3,$4) RETURNING *;';
      const result = await connection.query(sql, [
        user.firstname,
        user.lastname,
        user.password,
        user.email,
      ]);
      connection.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cann't create user : ${e}`);
    }
  }
  static async login(email: string, password: string): Promise<IUser> {
    try {
      const connection = await Client.connect();
      const sql = 'SELECT * FROM users WHERE email = $1 AND password = $2';
      const result = await connection.query(sql, [
        removeSpaces(email),
        removeSpaces(password),
      ]);
      connection.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Cann't login user : ${e}`);
    }
  }
}

export default UserService;
