const { connection } = require("../config/dbConn");

class Ticket {
  static async findAll() {
    try {
      const [rows] = await connection.execute("SELECT * FROM tickets");
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async findById(id) {
    try {
      const [rows] = await connection.execute(
        "SELECT * FROM tickets WHERE id = ?",
        [id]
      );
      if (rows.length === 0) return null;
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async findByUserId(userId) {
    try {
      const [rows] = await connection.execute(
        "SELECT * FROM tickets WHERE user_id = ?",
        [userId]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async create({ userId, subject, description }) {
    try {
      const [result] = await connection.execute(
        "INSERT INTO tickets (user_id, subject, description) VALUES (?, ?, ?)",
        [userId, subject, description]
      );
      console.log("Database insertion result:", result);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, { subject, description }) {
    try {
      await connection.execute(
        "UPDATE tickets SET subject = ?, description = ? WHERE id = ?",
        [subject, description, id]
      );
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      await connection.execute("DELETE FROM tickets WHERE id = ?", [id]);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Ticket;
