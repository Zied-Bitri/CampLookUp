const express = require("express");
const cors = require("cors");
const db = require('./orm-database');
const bookingsRouter = require('./routes/bookings.js');
const campersRouter = require('./routes/campers.js');
const sitesRouter = require('./routes/sites.js');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/bookings", bookingsRouter);
app.use("/campers", campersRouter);
app.use("/sites", sitesRouter);

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});