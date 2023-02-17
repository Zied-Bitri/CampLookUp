const router = require('express').Router();
const itemController = require("../controllers/controllers");

router.get("/", itemController.selectAll);

module.exports = router;