const Ticket = require("../models/Ticket");

exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
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
    await Ticket.create({ userId, subject, description });
    res.status(201).json({ message: "Ticket created successfully" });
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
