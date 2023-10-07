const TicketFile = require("../models/TicketFile");

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
    const ticketId = req.body.ticketId;

    if (!ticketId) {
      return res.status(400).send({ error: "TicketId is missing" });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).send({ error: "No files were uploaded." });
    }

    for (let i = 0; i < req.files.length; i++) {
      const filename = req.files[i].filename;
      await TicketFile.addFile({ ticketId, filename });
    }

    res.status(201).json({ message: "Files uploaded successfully" });
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
