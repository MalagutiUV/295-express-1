import db from "../db.js";

export const UsersService = {
  async getAll() {
    const [result] = await db.query("SELECT * FROM users");
    return result;
  },

  async get(id) {
    const [result] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    if (result.length !== 1) {
      throw new Error("User not found");
    }
    return result;
  },
};
