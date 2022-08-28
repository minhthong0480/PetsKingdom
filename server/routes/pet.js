const router = require("express").Router();
const formidable = require("express-formidable");
const verifiedToken = require("./verifyToken");
//controller
const {
  create,
  pets,
  allPets,
  image,
  deletePet,
  read,
} = require("../controller/pet");

router.post("/create-pet", formidable(), create);
router.get("/pets", verifiedToken, pets);
router.get("/pet/image/:petId", image);
router.get("/allpets", verifiedToken, allPets);
router.delete("/delete-pet/:petId", verifiedToken, deletePet);
router.get('/pet/:petId', verifiedToken, read);

module.exports = router;
