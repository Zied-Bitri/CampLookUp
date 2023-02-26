module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("booking", {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      check_in: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
      
    },
    {timestamps:false
    });
  
    return Booking;
  };
