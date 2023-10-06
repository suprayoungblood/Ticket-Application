const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await User.create({ username, password, email });
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findByUsername(username); // You'll need to implement findByUsername in the User model

  if (user && (await User.checkPassword(password, user.password))) {
    req.session.userId = user.id; // Store user ID in session
    return res.status(200).json({ message: "Logged in successfully" });
  } else {
    return res.status(400).json({ error: "Invalid credentials" });
  }
};

exports.logoutUser = (req, res) => {
  req.session.destroy(); // Destroy the session
  res.status(200).json({ message: "Logged out successfully" });
};

exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const { username, password, email } = req.body;
  try {
    await User.update(userId, { username, password, email });
    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.patchUser = async (req, res) => {
  const userId = req.params.id;
  const { username, password, email } = req.body;
  try {
    await User.update(userId, { username, password, email });
    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    await User.delete(userId);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
