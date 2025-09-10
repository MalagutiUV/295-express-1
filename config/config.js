import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB;
const JWT_SECRET = process.env.JWT_SECRET;

if (!PORT) {
  throw new Error(
    "Define a Port in the .env File or in the Env Variables of your server"
  );
}

if (!JWT_SECRET) {
  throw new Error("Define a jwt Secret");
}
const env = {
  PORT: PORT,
  db: {
    host: DB_HOST,
    password: DB_PASS,
    user: DB_USER,
    dbName: DB_NAME,
  },
  token: {
    secret: JWT_SECRET,
  },
};

export default env;
