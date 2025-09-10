import db from '../config/db.js';

export const SongService = {
  async getAll() {
    const [result] = await db.query('SELECT id, title, artist FROM songs');

    return result;
  },

  async insertOne(title, artist) {
    const [result] = await db.query(
      'INSERT INTO songs (title, artist) VALUES (?, ?)',
      [title, artist],
    );
    return result;
  },

  async getById(id) {
    const [result] = await db.query('SELECT * FROM songs WHERE id = ?', [id]);
    if (result.length === 0) {
      throw new Error('Song with the id not found');
    }
    return result[0];
  },
};
