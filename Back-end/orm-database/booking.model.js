const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("booking", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      check_in: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  
    return Booking;
  };
