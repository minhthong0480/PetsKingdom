const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

//import route
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')


dotenv.config();


//Connect DB
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true},
() => console.log('DB connected'))

//middleware
app.use(express.json());

// Router middleware
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)


app.listen(4000, () => console.log('Server is Up and Running'))
