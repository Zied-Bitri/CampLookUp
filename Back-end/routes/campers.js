const campersRouter = require('express').Router();
const campersController = require("../controllers/campers.controller.js");

campersRouter.get("/campers", campersController.read);
campersRouter.post("/campers", campersController.create);
campersRouter.put("/campers/:id", campersController.update);
campersRouter.delete("/campers/:id", campersController.deleete);

module.exports = campersRouter;