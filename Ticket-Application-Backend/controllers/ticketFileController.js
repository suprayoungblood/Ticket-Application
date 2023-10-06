const TicketFile = require("../models/TicketFile");
const upload = require("../config/fileUpload");

exports.getAllFiles = async (req, res) => {
  try {
    const files = await TicketFile.findAll();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getFileById = async (req, res) => {
  try {
    const fileId = req.params.id;
    const file = await TicketFile.findById(fileId);
    if (!file) {
      return res.status(404).send({ message: "File not found" });
    }
    res.status(200).json(file);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.uploadFile = async (req, res) => {
  try {
    console.log(req.file);
    const ticketId = req.body.ticketId;
    const filename = req.file.filename;

    if (!ticketId || !filename) {
      return res.status(400).send({ error: "TicketId or filename is missing" });
    }

    await TicketFile.addFile({ ticketId, filename });
    res.status(201).json({ message: "File uploaded successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const fileId = req.params.fileId;
    await TicketFile.delete(fileId);
    res.status(200).json({ message: "File deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
