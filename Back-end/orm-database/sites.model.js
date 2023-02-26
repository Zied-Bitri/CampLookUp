const {Sequelize, DataTypes}=require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Site = sequelize.define("Site", {
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
        //allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      availability: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        //allowNull: false,
      },
      main_activity: {
        type: DataTypes.STRING,
        //allowNull: false,
      }
    },
    {
      timestamps:false
    });
  return Site;
  };
