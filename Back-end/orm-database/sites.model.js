module.exports = (sequelize, DataTypes) => {
    const Sites = sequelize.define("site", {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      availibity: {
        type: DataTypes.INTEGER,
        // allowNull: true,
      },
      main_activity: {
        type: DataTypes.STRING,
        // allowNull: true,
      }
    },
    {
      timestamps:false
    });
  return Sites;
  };
