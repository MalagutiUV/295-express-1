import express, { response } from "express";
import morgan from "morgan";
import fs from "fs";
import path from "path";

const app = express();

app.use(express.json());

const accessLogStream = fs.createWriteStream(path.join(".", "access.log"), {
  flags: "a",
});
app.use(morgan("combined", { stream: accessLogStream }));
// localhost:3030/version

function log(message) {
  const timestamp = new Date().toISOString();
  accessLogStream.write(`[${timestamp}] ${message}\n`);
  console.log(message); // still prints to console if you want
}

app.get("/version", (req, res) => {
  // kurs startpunkt
  const courseStarted = new Date("2025-09-08T06:00:00.000");
  const dateNow = new Date();
  const miliSeconds = dateNow.getTime() - courseStarted.getTime();
  const timeSinceCourseStarted = miliSeconds / 1000;

  res.status(200).send({
    greetingText: "Hello World",
    serverInfo: {
      port: process.env.PORT,
    },
    timeSinceCourseStarted: timeSinceCourseStarted,
  });
});

// GET: alle Songs {"id": 1, "title": "bla", "artist": "blabla"}
// POST: neue Song erstellen (muss nicht gespeichert werden, da wir keine DB haben)
//       - Neuer Song {title} von Artist: {artist} wurde erstellt

const songsInMemoryDb = [
  { id: 1, title: "Blinding Lights", artist: "The Weekend" },
  {
    id: 2,
    title: "Shape of you",
    artist: "Ed Sheeran",
  },
];

app.get("/songs", (req, res) => {
  log("HELLOOOOO ");

  res.status(200).send(songsInMemoryDb);
});

app.post("/songs", (req, res) => {
  const { title, artist } = req.body;

  const lastElement = songsInMemoryDb[songsInMemoryDb.length - 1];
  console.log(lastElement);
  const lastElementsId = lastElement.id;
  console.log(lastElementsId);
  console.log("HELLOOOOO ");
  const newId = lastElementsId + 1;

  const newSong = {
    id: newId,
    title: title,
    artist: artist,
  };

  console.log(newSong);

  songsInMemoryDb.push(newSong);

  res.status(200).send({
    message: `Song with Title ${title} from Artist ${artist} wurde erstellt. Neue Id ${newId}`,
  });
});

export default app;
