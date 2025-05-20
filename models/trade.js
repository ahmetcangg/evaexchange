const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Trade = sequelize.define("Trade", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  portfolioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("BUY", "SELL"),
    allowNull: false,
  },
  symbol: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rate: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Trade;
