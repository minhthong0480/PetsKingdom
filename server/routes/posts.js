const router = require('express').Router()
const verify = require('./verifyToken')


router.get('/', verify, (req, res) => {
    res.json({posts: {title: 'My fisrt post', description: 'some message here!'}})
})


module.exports = router;