const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize('camp', 'root', 'root',
  {
    host: "localhost",
    dialect: "mysql",
    logging: false
  }
);

const db = {};


db.sequelize = sequelize;
//db.Sequelize = Sequelize;

db.Booking = require("./bookings.model")(sequelize, DataTypes);
db.Camper = require("./campers.model")(sequelize, DataTypes);
db.Site = require("./sites.model")(sequelize, DataTypes);

db.Camper.hasMany(db.Booking,{
  onDelete: "CASCADE"
} );
db.Site.hasMany(db.Booking,{
  onDelete: "CASCADE"
});

db.Booking.belongsTo(db.Camper, {
  //onDelete: "CASCADE",
});

db.Booking.belongsTo(db.Site, {
  //onDelete: "CASCADE",
});

db.sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

db.Site
  .sync()
  .then(()=>{console.log("Table sites and Model Site synchronised successfully.")})
  .catch((err)=>{console.log("error syncing Table sites and Model Site: " + err)});
db.Camper
  .sync()
  .then(()=>{console.log("Table campers and Model Camper synchronised successfully.")})
  .catch((err)=>{console.log("error syncing Table campers and Model Camper: " + err)});
db.Booking
  .sync()
  .then(()=>{console.log("Table bookings and Model Booking synchronised successfully.")})
  .catch((err)=>{console.log("error syncing Table bookings and Model Booking: " + err)});


module.exports = db;
