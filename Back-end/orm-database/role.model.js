const {Sequelize, DataTypes}=require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("role", {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    });
  
    return Role;
  };