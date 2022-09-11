interface IUser {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  token?: string;
}
export default IUser;
