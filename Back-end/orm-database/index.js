//const mysql = require('mysql2');
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('camp', 'root', 'root',
  {
    host: "localhost",
    dialect: "mysql",
    logging: false
  }
);
//const connection = mysql.createConnection({
 // host     : 'localhost',
  //user     : 'root',
  //password : 'root',
  //database : 'camp'
//});
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Booking = require("./booking.model")(sequelize, DataTypes);
db.Campers = require("./campers.model")(sequelize, DataTypes);
db.Sites = require("./sites.model")(sequelize, DataTypes);

db.Campers.hasMany(db.Booking,{
  onDelete: "CASCADE",
} );
db.Sites.hasMany(db.Booking,{
  onDelete: "CASCADE",
});

db.Booking.belongsTo(db.Campers, {
  onDelete: "CASCADE",
});

db.Booking.belongsTo(db.Sites, {
  onDelete: "CASCADE",
});


db.sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = db;

//module.exports = connection;