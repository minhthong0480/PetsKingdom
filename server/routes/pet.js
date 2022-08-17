const router = require("express").Router();

//controller
const { create } = require("../controller/pet");

router.post("/create-pet", create);

module.exports = router;
