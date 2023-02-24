module.exports = (sequelize, DataTypes) => {
    const Sites = sequelize.define("sites", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      availabity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      main_activity: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    return Sites;
  };
