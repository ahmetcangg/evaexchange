const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Share = sequelize.define("Share", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  symbol: {
    type: DataTypes.STRING(3),
    allowNull: false,
    validate: {
      isUppercase: true,
      len: [3, 3],
    },
  },
  rate: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  }
});

module.exports = Share;
