const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  patchUser,
  loginUser,
  logoutUser,
} = require("../controllers/userController");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.patch("/:id", patchUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

module.exports = router;
