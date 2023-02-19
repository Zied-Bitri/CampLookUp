const sitesRouter = require('express').Router();
const sitesController = require("../controllers/booking.controller.js");

sitesRouter.get("/sites", sitesController.read);
sitesRouter.post("/sites", sitesController.create);
sitesRouter.put("/sites/:id", sitesController.update);
sitesRouter.delete("/sites/:id",sitesController.deleete);

module.exports = sitesRouter;