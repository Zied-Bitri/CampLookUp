const express = require("express");
const jwt = require ("jsonwebtoken");
//const axios = require ("axios");
const bookingRoutes = require('./routes/booking.js');
const campersRoutes = require('./routes/campers.js');
const sitesRoutes = require('./routes/sites.js');
const cors = require('cors');


const db = require('./orm-database');
const { result } = require("lodash");

const app = express();
let secretKey = "hahaha"
const PORT = process.env.PORT || 3000
// creating a middleware
function CreateToken(req,res,next){
  const user = { username:req.body.username}
  jwt.sign(user,secretKey,(err, result)=> {
 if (err){
  res.json({ error:err})
 } else {
  res.json({token:result})
 }
  });
  next()
}
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(__dirname + "/../Front-end/public"));

app.use("/booking", bookingRoutes);
app.use("/campers", campersRoutes);
app.use("/sites", sitesRoutes);

app.listen(PORT, CreateToken, function () {
  console.log(`listening on port ${PORT}!`);
});