import pg from 'pg';
const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;
// console.log(connection);

export const pool = new Pool({ connectionString });
