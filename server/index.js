const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors')


//import route
const authRoute = require("./routes/auth");
const petRoute = require("./routes/pet");
//const staffRoute = require("./routes/staff");

dotenv.config();


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

// Router middleware
app.use("/api/", authRoute);
// app.use("/api/posts", postRoute);
app.use("/api/pets", petRoute)

//app.use('api/staff', staffRoute)

app.listen(4000, () => console.log("Server is Up and Running"));
