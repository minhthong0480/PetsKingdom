const router = require("express").Router();
const formidable = require('express-formidable')

//controller
const { create } = require("../controller/pet");

router.post("/create-pet",formidable(), create);

module.exports = router;
