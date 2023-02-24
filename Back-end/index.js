const express = require("express");
const bookingRoutes = require('./routes/booking.js');
const campersRoutes = require('./routes/campers.js');
const sitesRoutes = require('./routes/sites.js');
const cors = require('cors');


const db = require('./orm-database');

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(__dirname + "/../Front-end/public"));

app.use("/booking", bookingRoutes);
app.use("/campers", campersRoutes);
app.use("/sites", sitesRoutes);

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});