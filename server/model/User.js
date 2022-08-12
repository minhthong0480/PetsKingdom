const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is required",
    },
    email: {
        type: String,
        required: "Email is required",
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
})

module.exports = mongoose.model('User', userSchema)