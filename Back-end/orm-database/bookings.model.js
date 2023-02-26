const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("Booking", {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      check_in: {
        type: DataTypes.DATE,
        //allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        //allowNull: false,
      }
    },
    {
        timestamps:false
    });
  
    return Booking;
  };
