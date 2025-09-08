import db from "../db.js";

export const UsersService = {
  async getAll() {
    const [result] = await db.query("SELECT * FROM users");
    return result;
  },
};
