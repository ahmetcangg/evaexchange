const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Portfolio = sequelize.define("Portfolio", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = Portfolio;
