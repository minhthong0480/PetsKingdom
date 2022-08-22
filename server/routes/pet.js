const router = require("express").Router();
const formidable = require('express-formidable')
const verifiedToken = require("./verifyToken")
//controller
const { create, pets, image } = require("../controller/pet");

router.post("/create-pet",formidable(), create);
router.get('/pets', verifiedToken, pets)
router.get('/pet/image/:petId', image);

module.exports = router;
