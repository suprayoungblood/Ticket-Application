const Ticket = require("../models/Ticket");
const TicketFile = require("../models/TicketFile"); // Added this line

exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    for (let ticket of tickets) {
      ticket.files = await TicketFile.findByTicketId(ticket.id);
    }
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getTicketById = async (req, res) => {
  const ticketId = req.params.id;
  try {
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });
    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTicketsByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const tickets = await Ticket.findByUserId(userId);
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTicket = async (req, res) => {
  console.log("createTicket called with data:", req.body);
  const { userId, subject, description } = req.body;
  if (!userId || !subject || !description) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const ticketId = await Ticket.create({ userId, subject, description });

    if (req.files && req.files.length) {
      for (let file of req.files) {
        await TicketFile.addFile({ ticketId, filename: file.filename });
      }
    }

    res
      .status(201)
      .json({ message: "Ticket and associated files created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTicket = async (req, res) => {
  const ticketId = req.params.id;
  const { subject, description } = req.body;
  try {
    await Ticket.update(ticketId, { subject, description });
    res.status(200).json({ message: "Ticket updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTicket = async (req, res) => {
  const ticketId = req.params.id;
  try {
    await Ticket.delete(ticketId);
    res.status(200).json({ message: "Ticket deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
