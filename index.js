import { createServer } from "http";
import app from "./app.js";
import env from "./config.js";

const server = createServer(app);

server.listen(env.PORT, () => {
  console.log(`API läuft auf http://localhost:${env.PORT}`);
});
