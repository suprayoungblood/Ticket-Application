require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const { logger } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");
const corsOptions = require("./config/corsOptions");
const { connectDB } = require("./config/dbConn");
const userRoutes = require("./routes/userRoutes");
const ticketFileRoutes = require("./routes/ticketFileRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const PORT = process.env.PORT || 3500;

// Database Connection
connectDB();

// Middleware for logging
app.use(logger);

// CORS Middleware
app.use(cors(corsOptions));

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for parsing cookies
app.use(cookieParser());

// Use session middleware
app.use(
  session({
    secret: "37963f589a3125e3a716bdd39914cc8d", // generates random string
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
  })
);

// Serving static files
app.use("/", express.static(path.join(__dirname, "public")));

// Root route
app.use("/", require("./routes/root"));

// User routes
app.use("/users", userRoutes);

// Ticket File routes
app.use("/files", ticketFileRoutes);

// Ticket routes
app.use("/tickets", ticketRoutes);

// Handle 404 for unrecognized routes
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// Error Handling Middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
