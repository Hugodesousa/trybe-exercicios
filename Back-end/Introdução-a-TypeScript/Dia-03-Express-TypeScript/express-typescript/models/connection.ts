import mysql from 'mysql2/promise';

import dotenv from 'dotenv';

dotenv.config();
const myPort = Number(process.env.PORT)

export default mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_ROOT_DATABASE,
});
