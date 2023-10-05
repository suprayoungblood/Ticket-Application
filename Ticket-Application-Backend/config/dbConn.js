const mysql = require("mysql2/promise");

let connection;

const connectDB = async () => {
  try {
    console.log("Database Parameters:", {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });

    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });

    console.log("Connected to the MySQL database.");
  } catch (err) {
    console.error("Error connecting to the MySQL database: ", err);
  }
};

module.exports = {
  connectDB,
  connection,
};
