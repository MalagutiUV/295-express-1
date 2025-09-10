import { SongService } from "../services/song.service.js";

export const getSongs = async (req, res) => {
  try {
    const songs = await SongService.getAll();
    // logik
    res.status(200).send(songs);
  } catch (error) {
    res.status(401).send({
      message: "Token not valid",
    });
  }
};

export const getSongById = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await SongService.getById(id);
    res.status(200).send(song);
  } catch (error) {
    res.status(401).send({
      message: "Token not valid",
    });
  }
};

export const createSong = async (req, res) => {
  const { title, artist } = req.body;

  if (!title || !artist) {
    return res
      .status(400)
      .send({ message: "missing required fields: {title, artist}" });
  }

  try {
    const insertedSong = await SongService.insertOne(title, artist);
    res.status(201).send({
      message: "song created",
    });
  } catch (error) {
    res.status(500).send({ error: true });
  }
};
