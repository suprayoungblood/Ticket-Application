const express = require("express");
const router = express.Router();
const {
  getAllTickets,
  getTicketById,
  getTicketsByUserId,
  createTicket,
  updateTicket,
  deleteTicket,
} = require("../controllers/ticketController");

router.get("/user/:userId", getTicketsByUserId);
router.get("/", getAllTickets);
router.post("/", createTicket);
router.put("/:id", updateTicket);
router.delete("/:id", deleteTicket);

module.exports = router;
