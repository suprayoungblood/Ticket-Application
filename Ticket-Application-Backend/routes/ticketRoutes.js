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
const upload = require("../config/fileUpload");

router.get("/user/:userId", getTicketsByUserId);
router.get("/", getAllTickets);
router.post("/", upload.array("files"), createTicket);
router.put("/:id", updateTicket);
router.delete("/:id", deleteTicket);

module.exports = router;
