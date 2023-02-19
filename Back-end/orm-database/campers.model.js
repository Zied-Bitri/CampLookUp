
module.exports = (sequelize, DataTypes) => {
    const Campers = sequelize.define("campers", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    });
  
    return Campers;
  };
