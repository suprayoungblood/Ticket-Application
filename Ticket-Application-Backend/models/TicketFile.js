const { connection } = require("../config/dbConn");

class TicketFile {
  static async findAll() {
    try {
      const [rows] = await connection.execute("SELECT * FROM ticket_files");
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async findByTicketId(ticketId) {
    try {
      const [rows] = await connection.execute(
        "SELECT * FROM ticket_files WHERE ticket_id = ?",
        [ticketId]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async addFile({ ticketId, filename }) {
    try {
      const [result] = await connection.execute(
        "INSERT INTO ticket_files (ticket_id, filename) VALUES (?, ?)",
        [ticketId, filename]
      );
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }

  static async delete(fileId) {
    try {
      await connection.execute("DELETE FROM ticket_files WHERE id = ?", [
        fileId,
      ]);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TicketFile;
