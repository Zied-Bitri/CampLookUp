
module.exports = (sequelize, DataTypes) => {
    const Campers = sequelize.define("campers", {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telnumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {timestamps:false
    });
  
    return Campers;
  };
