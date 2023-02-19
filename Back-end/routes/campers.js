const campersRouter = require('express').Router();
const campersController = require("../controllers/campers.controller.js");

router.get("/campers", campersController.read);
router.post("/campers", campersController.create);
router.put("/campers/:id", campersController.update);
router.delete("/campers/:id", campersController.deleete);

module.exports = campersRouter;