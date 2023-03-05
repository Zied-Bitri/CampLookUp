const express = require("express");
const cors = require("cors");
const bookingsRouter = require('./routes/bookings.js');
const campersRouter = require('./routes/campers.js');
const sitesRouter = require('./routes/sites.js');
const { verifySignUp, authJwt } = require("./middleware");
const {signup, signin} = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");


const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
app.use("/bookings", bookingsRouter);
app.use("/campers", campersRouter);
app.use("/sites", sitesRouter);

app.post(
  "/signup",
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
    //verifySignUp.checkRolesExisted
  ],
  signup
);

app.post("/signin", signin);


app.get("/", userController.allAccess);
app.get("/user", [authJwt.verifyToken], userController.userBoard);
app.get("/admin", [authJwt.verifyToken, authJwt.isAdmin], userController.adminBoard);


app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
