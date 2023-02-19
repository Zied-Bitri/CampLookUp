const bookingRouter = require('express').Router();
const bookingController = require("../controllers/booking.controller.js");

bookingRouter.get("/booking", bookingController.read);
bookingRouter.post("/booking", bookingController.create);
bookingRouter.put("/booking/:id", bookingController.update);
bookingRouter.delete("/booking/:id",bookingController.deleete);

module.exports = bookingRouter;