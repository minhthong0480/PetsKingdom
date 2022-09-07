const { application } = require("express");
const express = require("express");
const jwt = require("jsonwebtoken");
const route = require("express").Router();
const mailer = require("../mail");
const User = require("../model/User");
const verifyToken = require ('./verifyToken')
// route.use(express.json());
// route.use(express.urlencoded({extended: false}));
// route.set('view engine', 'ejs');
// route.set('views', 'views');

// let user = {
//     name: "abc",
//     email: "nguyenhieuducduy1@gmail.com",
//     password: "1234"
// }

// route.get("/forgot-password", (req, res, next) => {
//   res.render("forgot-password");
//   next()
// });

route.post("/forgot-password", async (req, res, next) => {
  const { email } = req.body;
//   console.log(email);
//   let emaildata = await User.findOne({ email: req.body.email });
//   console.log(emaildata);
  //check wheter the account is valid
  const emailExist = await User.findOne({ email: req.body.email });
  if (!emailExist) {
    return res.status(400).send("Email not existed");
  
  }

  //user exists and create the one time link availabe for 15mins
  const JWT_THING = "for file dotenv";
  const secure = JWT_THING;
  const payload = {
    email: req.body.email,
  };
  const token = jwt.sign(payload, secure, { expiresIn: "15m" });
  mailer.sendMail(
    req.body.email,
    "Reset password",
    `<a href="${process.env.APP_URL}/reset-password/${token}"> Reset Password </a>`
  );
  const link = `${process.env.APP_URL}/reset-password/${token}`;
  console.log(link);
  res.send("link has been sent to your email");
});

route.get("/reset-password/:token", (req, res, next) => {
  const { token } = req.params;

  //check if the id is valid
//   if (id !== req.body.name) {
//     res.send("the name is invalid");
//     return;
//   }

  //valid id and user
  const JWT_THING = "for file dotenv";
  const secure = JWT_THING + req.body.password;
  try {
    // const payload = jwt.verify(token, secure);
    // res.render("reset-password", { email: req.body.email });
    res.send("Reset Link");
  } catch (error) {
    console.log("error.message");
    res.send("error.message");
  }
});

route.post("/reset-password/:token", async (req, res, next) => {
  const {  token } = req.params;
//   const { password } = req.body.password;
  //check if the id is valid
//   if (id !== req.body._id) {
//     res.send("the name is invalid");
//     return;
//   }

  const JWT_THING = "for file dotenv";
  const secure = JWT_THING + req.body.password;

  try {
    // const payload = jwt.verifyToken(token, secure);
    //validate pass and pass2 should match
    //we can find user id and email with the payload
    //for hashing process if have
    let updated = await User.findByIdAndUpdate(req.params.userId, {
        new: true,
      });
    //   res.json(updated)
      res.json('Password Updated')
    } catch (error) {
      console.log(error);
      res.status(400).send("Password Update Failed");
    }
  }
);

module.exports = route;
