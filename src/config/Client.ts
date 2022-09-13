import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const {
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_USER,
  POSTGRES_PORT,
  NODE_ENV,
} = process.env;

let client = new Pool({});

client = new Pool({
  host: POSTGRES_HOST,
  database: NODE_ENV,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  port: Number(POSTGRES_PORT),
});

export default client;
