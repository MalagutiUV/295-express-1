import db from "../db.js";

export const SongService = {
  async getAll() {
    const [result] = await db.query("SELECT * FROM songs");
    return result;
  },

  async insertOne(title, artist) {
    const [result] = await db.query(
      "INSERT INTO songs (title, artist) VALUES (?, ?)",
      [title, artist]
    );
    return result;
  },
};
