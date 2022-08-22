const router = require('express').Router()
const User = require('../model/User')
const jwt = require('jsonwebtoken')
const {registerValid} = require('../validation')
const {loginValid} = require('../validation')
const bcrypt = require('bcryptjs')
const {updateUserProfile} = require('../controller/auth');
//Register feature
router.post('/register', async (req, res) => {
//validate data
const {error} = registerValid(req.body);
if(error) return res.status(400).send(error.details[0].message)

//check if user existed
const emailExist = await User.findOne({email: req.body.email});
if(emailExist){return res.status(400).send('Email already existed')}

//Hash password
const salt = await bcrypt.genSalt(10);
const hashPass = await bcrypt.hash(req.body.password, salt)

//create new user
const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPass,
    isStaff: req.body.isStaff
});
try {
    const saveUser = await user.save();
    //res.send({user: user._id})
    res.send(saveUser)
} catch (error) {
    res.status(400).send(error)
}
})


//Login feature
router.post('/login', async (req, res) => {
    //validate login data
    const {error} = loginValid(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //check of email existed
    const user = await User.findOne({email: req.body.email});
    if(!user){return res.status(400).send('Email has not registered')}

    //check if pass is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass){
        return res.status(400).send('Password incorrect')
    }

    //Token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send({user, token})

    //res.send('Logged In')
})

router.post('/profile', updateUserProfile);


module.exports = router;