import express from "express";
import morgan from "morgan";
import fs from "fs";

import songRouter from "./routes/song.routes.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
const accessLogStream = fs.createWriteStream("./access.log", {
  flags: "a",
});
app.use(morgan("combined", { stream: accessLogStream }));

app.use("/song", songRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);

export default app;
