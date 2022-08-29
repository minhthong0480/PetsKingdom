const { application } = require('express');
const express = require('express');
const jwt = require('jsonwebtoken');
const { User } = require("../model/User");
//const Token = require("../model/token");
const {forgotValid} = require('../validation')
const Joi = require("joi");
const mailer = require('../mail/mail');
const route = require('express').Router()


// let user = {
//     name: "abc",
//     email: "nguyenhieuducduy1@gmail.com",
//     password: "1234"
// }


route.get('/forgot-password', (req, res, next) => {
    res.render('forgot-password');
    
});



route.post('/forgot-password', async (req, res, next) => {
    const {email} = req.body;
    
    const emailSchema = Joi.object({
        email: Joi.string() .min(6) .required() .email(),
    });
    const {error} = forgotValid(req.body);
     if(error) return res.status(400).send(error.details[0].message)
//     const { error } = emailSchema.forgotValid(req.body);
//     if (error){
//         return res.status(400).send({ message: error.details[0].message });
//     }

    //check wheter the account is valid
    const user = await User.findOne({email: req.body.email});
    if(!user){return res.status(400).send('Email has not registered')}

    //user exists and create the one time link availabe for 15mins
    const JWT_THING = 'DON"T UNDERSTAND';
    const secure = JWT_THING + user.password;
    const payload = {
        email: user.email,
        name: user.name
    }
    const token = jwt.sign(payload, secure, {expiresIn: '59m'});
    mailer.sendMail(user.email, "Reset password", `<a href="${process.env.APP_URL}/rest-password/${user.name}/${token}}"> Reset Password </a>`)
    const link = `${process.env.APP_URL}/reset-password/${user.name}/${token}`
    console.log(link);
    res.send('link has been sent to your email');
});


route.get('/reset-password/:id/:token', (req, res, next) => {
    const {id, token} = req.params;
  
    //check if the id is valid
   if(id !== user.name){
    res.send('the name is invalid');
    return;
   }
   
   //valid id and user
   const JWT_THING = 'for file dotenv';
   const secure = JWT_THING + user.password
   try {
    const payload = jwt.verify(token, secure);
    res.render('reset-password', {email: user.email});
   } catch (error) {
    console.log('error.message');
    res.send('error.message');
    
   }

});

route.post('/reset-password/:id/:token', (req, res, next) => {
    const {id, token} = req.params;
    const {password, passwords2} = req.body; 
    //check if the id is valid
   if(id !== user.name){
    res.send('the name is invalid');
    return;
   }

   const JWT_THING = 'for file dotenv'
   const secure= JWT_THING + user.password;
   
   try {
    const payload = jwt.verify(token, secure);
    //validate pass and pass2 should match
    //we can find user id and email with the payload
    //for hashing process if have
    user.password = password //only do if pass and pass2 match
    res.send(user);
   } catch (error) {
    console.log(error.message);
    res.send(error.message);
    
   }

});


module.exports = route;