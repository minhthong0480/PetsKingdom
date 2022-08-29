const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors')


//import route
const Froute = require('./routes/route1');


dotenv.config();


app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', 'views');
 
//Connect DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("DB connected")
);

//middleware
app.use(express.json());
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})


app.use('/', Froute)

app.listen(4000, () => console.log("Server is Up and Running"));
