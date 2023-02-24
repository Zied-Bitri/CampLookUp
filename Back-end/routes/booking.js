const bookingRouter = require('express').Router();
const bookingController = require("../controllers/booking.controller.js");

bookingRouter.get("/", bookingController.readBooking);
bookingRouter.post("/", bookingController.createBooking);
bookingRouter.put("/:id", bookingController.updateBooking);
bookingRouter.delete("/:id", bookingController.deleteBooking);

module.exports = bookingRouter;