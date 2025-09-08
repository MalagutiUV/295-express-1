import express from "express";
import morgan from "morgan";
import fs from "fs";
import db from "./db.js";

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

//songs
app.get("/song", async (req, res) => {
  const [result] = await db.query("SELECT * FROM songs");
  res.send(result);
});

app.post("/song", async (req, res) => {
  const { title, artist } = req.body;

  if (!title || !artist) {
    return res
      .status(400)
      .send({ message: "missing required fields: {title, artist}" });
  }

  const [result] = await db.query(
    "INSERT INTO songs (title, artist) VALUES (?, ?)",
    [title, artist]
  );

  res.status(201).send({
    id: result.insertId,
    message: `Neuer Song ${title} von Artist: ${artist} wurde erstellt`,
  });
});

//users
app.get("/users", async (req, res) => {
  const [result] = await db.query("SELECT * FROM users");
  res.send(result);
});

app.post("/users", async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).send({
      message: "Missing required fields: {username, password, email}",
    });
  }

  const [conflict] = await db.query(
    "SELECT * FROM users WHERE username = ? OR email = ?",
    [username, email]
  );

  console.log(conflict);

  if (conflict[0]) {
    return res.status(409).send({
      message: "username or email already in use",
    });
  }

  const [result] = await db.query(
    "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
    [username, password, email]
  );
  res.status(201).send({ message: "User Created" });
});

export default app;
