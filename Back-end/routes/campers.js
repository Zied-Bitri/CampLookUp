const campersRouter = require('express').Router();
const campersController = require("../controllers/campers.controller.js");

campersRouter.get("/", campersController.readCamper);
campersRouter.post("/", campersController.createCamper);
campersRouter.put("/:id", campersController.updateCamper);
campersRouter.delete("/:id", campersController.deleteCamper);

module.exports = campersRouter;