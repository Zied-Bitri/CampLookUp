const bookingRouter = require('express').Router();
const bookingController = require("../controllers/booking.controller.js");

bookingRouter.get("/", bookingController.read);
bookingRouter.post("/", bookingController.create);
bookingRouter.put("/:id", bookingController.update);
bookingRouter.delete("/:id",bookingController.deleete);

module.exports = bookingRouter;