import dotenv from 'dotenv';

dotenv.config();
const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  POSTGRES_USER,
  POSTGRES_PORT,
  SALT_ROUND,
  PEPPER,
  TOKEN_SECRET,
  PORT,
  TEST_DB,
  NODE_ENV,
} = process.env;

export default {
  port: PORT,
  user: POSTGRES_USER,
  host: POSTGRES_HOST,
  salt: SALT_ROUND,
  pepper: PEPPER,
  secretToken: TOKEN_SECRET,
  postgresPort: POSTGRES_PORT,
  postgresPassword: POSTGRES_PASSWORD,
  DB: NODE_ENV === 'dev' ? POSTGRES_DB : TEST_DB,
  testDB: TEST_DB,
};
