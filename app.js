import express from "express";
import morgan from "morgan";
import fs from "fs";
import { UsersService } from "./services/user.service.js";
import { SongService } from "./services/song.service.js";
import jwt from "jsonwebtoken";
import env from "./config.js";
const app = express();

app.use(express.json());
app.use(morgan("tiny"));

const accessLogStream = fs.createWriteStream("./access.log", {
  flags: "a",
});

app.use(morgan("combined", { stream: accessLogStream }));

app.get("/version", (req, res) => {
  const startTime = new Date("2025-09-08T07:30+02:00");

  const currentTime = new Date();

  console.log(startTime, currentTime);

  const timeSinceStartSeconds = (currentTime - startTime) / 1000;

  const timeSinceStartFormatted =
    Math.round(timeSinceStartSeconds / 60 / 60) +
    "h, " +
    Math.round(
      (timeSinceStartSeconds -
        Math.round(timeSinceStartSeconds / 60 / 60) * 60 * 60) /
        60
    ) +
    "min";

  res.status(200).send({
    message: "Hello World!",
    serverInfo: {
      port: PORT,
      hostname: req.hostname,
    },
    timeSinceStartSeconds: timeSinceStartSeconds,
    timeSinceStartFormatted: timeSinceStartFormatted,
  });
});

// Song Routes
app.get("/song", async (req, res) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    res.status(429).send({
      message: "Token not valid",
    });
  }
  if (!authorization.startsWith("Bearer")) {
    res.status(429).send({
      message: "Token not valid",
    });
  }

  const splitAuthorization = authorization.split(" ");
  const extractedToken = splitAuthorization[1];
  try {
    const verifyToken = jwt.verify(extractedToken, env.token.secret);
    const songs = await SongService.getAll();
    res.send(songs);
  } catch (error) {
    res.status(429).send({
      message: "Token not valid",
    });
  }
});

app.post("/song", async (req, res) => {
  const { title, artist } = req.body;

  if (!title || !artist) {
    return res
      .status(400)
      .send({ message: "missing required fields: {title, artist}" });
  }

  const insertedSong = SongService.insertOne(title, artist);

  res.status(201).send({
    id: result.insertId,
    message: `Neuer Song ${insertedSong.title} von Artist: ${insertedSong.artist} wurde erstellt`,
  });
});

// User Routes
app.get("/users", async (req, res) => {
  const users = await UsersService.getAll();
  res.send(users);
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UsersService.get(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({
      error: "User with the id not found",
    });
  }
});

app.post("/users", async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).send({
      message: "Missing required fields: {username, password, email}",
    });
  }

  try {
    const insertedUser = await UsersService.insertOne(
      username,
      password,
      email
    );
    res.status(201).send({ message: `User ${insertedUser.username} created` });
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
});

// Auth Routes
app.post("/auth/register", async (req, res) => {
  console.log("Auth Register Route");
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).send({
      message: "Missing required fields: {username, password, email}",
    });
  }

  const user = await UsersService.insertOne(username, password, email);

  res.status(200).send({ ok: true });
});

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      message: "Missing required fields: {email, password}",
    });
  }

  const userExist = await UsersService.checkUser(email, password);

  if (!userExist) {
    return res.status(429).send({
      message: "User Credentials not correct",
    });
  }

  const user = await UsersService.getByEmail(email);

  const payload = {
    sub: user.id,
    email: email,
  };

  const token = jwt.sign(payload, env.token.secret);

  res.status(200).send({
    ok: true,
    token: token,
  });
});

export default app;
