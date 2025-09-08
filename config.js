import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

if (!PORT) {
  throw new Error(
    "Define a Port in the .env File or in the Env Variables of your server"
  );
}

const env = {
  PORT: PORT,
};

export default env;
