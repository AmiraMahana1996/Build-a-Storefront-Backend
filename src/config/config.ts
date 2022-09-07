
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_PASSWORD,
    POSTGRES_USER,
} = process.env

let client = new Pool({})

client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: 5432
})

export default client;