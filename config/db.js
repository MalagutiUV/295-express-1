import mysql from 'mysql2/promise.js';
import env from './config.js';

const connection = mysql.createPool({
  host: env.db.host,
  user: env.db.user,
  password: env.db.password,
  database: env.db.dbName,
  port: 3306,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default connection;
