const express = require("express");
const router = express.Router();
const {
  getAllFiles,
  getFileById,
  uploadFile,
  deleteFile,
} = require("../controllers/ticketFileController");
const upload = require("../config/fileUpload");

router.get("/", getAllFiles);
router.get("/:id", getFileById);
router.post("/", upload.array("file"), uploadFile);
router.delete("/:id", deleteFile);

module.exports = router;
