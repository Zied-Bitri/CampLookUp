const bookingsRouter = require("express").Router();
const bookingsController = require("../controllers/bookings.controller.js");

bookingsRouter.get("/", bookingsController.readBooking);
bookingsRouter.post("/", bookingsController.createBooking);
bookingsRouter.put("/:id", bookingsController.updateBooking);
bookingsRouter.delete("/:id", bookingsController.deleteBooking);

module.exports = bookingsRouter;