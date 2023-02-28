const sitesRouter = require("express").Router();
const sitesController = require("../controllers/sites.controller.js");

sitesRouter.get("/", sitesController.readSite);
sitesRouter.post("/", sitesController.createSite);
sitesRouter.put("/:id", sitesController.updateSite);
sitesRouter.delete("/:id", sitesController.deleteSite);

module.exports = sitesRouter;