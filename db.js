import mysql from "mysql2/promise";
import env from "./config.js";

const connection = await mysql.createPool({
  host: env.db.host,
  user: env.db.user,
  password: env.db.password,
  database: env.db.dbName,
});

export default connection;
