const { connection } = require("../config/dbConn");

class User {
  static async findAll() {
    try {
      const [rows, fields] = await connection.execute("SELECT * FROM users");
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async findById(id) {
    try {
      const [rows, fields] = await connection.execute(
        "SELECT * FROM users WHERE id = ?",
        [id]
      );
      if (rows.length === 0) return null;
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async create({ username, password, email }) {
    try {
      const [result] = await connection.execute(
        "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
        [username, password, email]
      );
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, { username, password, email }) {
    try {
      await connection.execute(
        "UPDATE users SET username = ?, password = ?, email = ? WHERE id = ?",
        [username, password, email, id]
      );
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      await connection.execute("DELETE FROM users WHERE id = ?", [id]);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
