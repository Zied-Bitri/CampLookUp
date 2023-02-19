const sitesRouter = require('express').Router();
const sitesController = require("../controllers/booking.controller.js");

router.get("/sites", sitesController.read);
router.post("/sites", sitesController.create);
router.put("/sites/:id", sitesController.update);
router.delete("/sites/:id",sitesController.deleete);

module.exports = sitesRouter;