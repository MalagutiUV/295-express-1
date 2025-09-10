import db from '../config/db.js';

import { compare, hash } from '../utils/auth.utils.js';

export const UsersService = {
  async getAll() {
    const [result] = await db.query('SELECT * FROM users');
    return result;
  },

  async get(id) {
    const [result] = await db.query('SELECT * FROM users WHERE id = ?', [id]);

    if (result.length !== 1) {
      throw new Error('User not found');
    }
    return result;
  },

  async getByEmail(email) {
    const [result] = await db.query('SELECT * FROM users WHERE email = ?', [
      email,
    ]);

    if (result.length !== 1) {
      throw new Error('User not found');
    }
    return result;
  },

  async insertOne(username, password, email) {
    const password_hashed = await hash(password);

    const [result] = await db.query(
      'INSERT INTO users (username, password_hash, email) VALUES (?, ?, ?)',
      [username, password_hashed, email],
    );
    return result;
  },

  async checkUser(email, password) {
    // todo ask if user exist
    const [result] = await db.query(
      'SELECT email, password_hash FROM users WHERE email = ?',
      [email],
    );
    if (result.length !== 1) {
      throw new Error('User Credentials wrong');
    }

    const user = result[0];

    const match = await compare(password, user.password_hash);
    return match;
  },
};
