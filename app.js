import express from "express";
import morgan from "morgan";
import fs from "fs";
import { UsersService } from "./services/user.service.js";

import songRouter from "./routes/song.routes.js";

import { requireAuth } from "./middleware/auth.middleware.js";

const app = express();

app.use(express.json());

app.use("/song", songRouter);
app.use("/auth", authRouter);
app.use("/users", userr);

app.use(morgan("tiny"));

const accessLogStream = fs.createWriteStream("./access.log", {
  flags: "a",
});

app.use(morgan("combined", { stream: accessLogStream }));

export default app;
