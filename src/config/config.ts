import {Client} from 'pg';

const client = new Client({
    host: "localhost",
    port : 5432,
    user: "postgres",
    password: "4444love",
    database: "migrationdb"
})
export default client;