const db = require('../../models');


db.Booking = require("./booking.model");
db.Campers = require("./campers.model");
db.Sites = require("./sites.model");

db.Campers.hasMany(db.Booking, {
  foreignKey: "id",
});
db.Sites.hasMany(db.Booking, {
  foreignKey: "id",
});

db.Booking.belongsTo(db.Campers, {
  as: "camper",
  foreignKey: "camperId",
  onDelete: "CASCADE",
});

db.Booking.belongsTo(db.Sites, {
  as: "site",
  foreignKey: "siteId",
  onDelete: "CASCADE",
});


db.sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = db;

//module.exports = connection;