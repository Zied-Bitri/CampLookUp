const controller = require("../controllers/user.controller");
const authJwt = require("../middleware/authJwt.js");

module.exports = function (app){
    
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Header-",
            "x-access-token, Origin, Content-Type, Accept"
        );
    next();
    });

    app.get("/", controller.allAccess);
    app.get("/user", [authJwt.verifyToken], controller.userBoard);
    app.get("/admin", [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);
}