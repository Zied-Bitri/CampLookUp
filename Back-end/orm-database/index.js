const {HOST, USER, PASSWORD, DB} = require ("../config/db.config");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(DB, USER, PASSWORD,
  {
    host: HOST,
    dialect: "mysql",
    logging: false
  }
);

const db = {};


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Booking = require("./bookings.model")(sequelize, DataTypes);
db.Camper = require("./campers.model")(sequelize, DataTypes);
db.Site = require("./sites.model")(sequelize, DataTypes);
db.User = require("./user.model.js")(sequelize, DataTypes);
//db.Role = require("./role.model.js")(sequelize, DataTypes);

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

/*db.Role.belongsToMany(db.User, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

db.User.belongsToMany(db.Role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});*/

db.ROLES = ["user", "admin"];
/*db.UserRole=sequelize.define("user_role",
{
  roleId:{ 
    type:DataTypes.INTEGER,
    primaryKey: true,
    foreignKey: true
  },
   userId:{
    type : DataTypes.INTEGER,
    primaryKey : true,
    foreignKey : true
  }
},
  {
    timestamps: false
  }

);*/

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
 
  db.User
  .sync()
  .then(()=>{console.log("Table users and Model User synchronised successfully.")})
  .catch((err)=>{console.log("error syncing Table users and Model User: " + err)});
   /*db.Role
  .sync()
  .then(()=>{console.log("Table roles and Model Role synchronised successfully.")})
  .catch((err)=>{console.log("error syncing Table roles and Model Role: " + err)});
  /*db.UserRole.sync()
  .then(()=>{console.log("Table user_roles and Model UserRole synchronised successfully.")})
  .catch((err)=>{console.log("error syncing Table user_roles and Model UserRole: " + err)});
  //created once
  /*db.Role.create({
    id: 1,
    name: "user"
  });
  //created once
  db.Role.create({
    id: 2,
    name: "admin"
  });*/

module.exports = db;
