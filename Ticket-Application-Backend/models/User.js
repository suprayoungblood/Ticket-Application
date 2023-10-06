const bcrypt = require("bcrypt");
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

  static async findByUsername(username) {
    try {
      const [rows, fields] = await connection.execute(
        "SELECT * FROM users WHERE username = ?",
        [username]
      );
      if (rows.length === 0) return null;
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async hashPassword(password) {
    return bcrypt.hash(password, 10);
  }

  static async checkPassword(password, hash) {
    const isMatch = await bcrypt.compare(password, hash);
    console.log("Password match status:", isMatch); // Added this log
    return isMatch;
  }

  static async create({ username, password, email }) {
    const hashedPassword = await User.hashPassword(password);
    try {
      const [result] = await connection.execute(
        "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
        [username, hashedPassword, email]
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
