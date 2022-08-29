const { application } = require('express');
const express = require('express');
const jwt = require('jsonwebtoken');
const route = require('express').Router()
const mailer = require('../mail/mail');

// route.use(express.json());
// route.use(express.urlencoded({extended: false}));
// route.set('view engine', 'ejs');
// route.set('views', 'views');
 
let user = {
    name: "abc",
    email: "nguyenhieuducduy1@gmail.com",
    password: "1234"
}


route.get('/forgot-password', (req, res, next) => {
    res.render('forgot-password');
    
});



route.post('/forgot-password', (req, res, next) => {
    const {email} = req.body;

    //check wheter the account is valid
    if(email !== user.email){
        res.send('Invalid email');
        return;
    }

    //user exists and create the one time link availabe for 15mins
    const JWT_THING = 'for file dotenv';
    const secure = JWT_THING + user.password;
    const payload = {
        email: user.email,
        name: user.name
    }
    const token = jwt.sign(payload, secure, {expiresIn: '15m'});
    mailer.sendMail(user.email, "Reset password", `<a href="${process.env.APP_URL}/reset-password/${user.name}/${token}}"> Reset Password </a>`)
    const link = `http://localhost:4000/reset-password/${user.name}/${token}`
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