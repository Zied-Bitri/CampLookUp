const bookingRouter = require('express').Router();
const bookingController = require("../controllers/booking.controller.js");

router.get("/booking", bookingController.read);
router.post("/booking", bookingController.create);
router.put("/booking/:id", bookingController.update);
router.delete("/booking/:id",bookingController.deleete);

module.exports = bookingRouter;