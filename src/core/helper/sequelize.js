const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("geo_db", "root", "rootpassword", {
  host: "localhost",
  dialect: "mysql", // or 'mysql', 'sqlite', 'mariadb', 'mssql'
});


module.exports = sequelize;