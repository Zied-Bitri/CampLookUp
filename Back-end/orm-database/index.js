const mysql = require('mysql2');
const { Sequelize, DataTypes } = require("sequelize");

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'camp'
});

module.exports = connection;