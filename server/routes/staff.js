const router = require("express").Router();

app.get("/staff", function (req, res) {
    res.send("Staff Dashboard");
  });

module.exports = router;