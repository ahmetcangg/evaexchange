const sequelize = require("../config/database");

const User = require("./user");
const Share = require("./share");
const Portfolio = require("./portfolio");
const Trade = require("./trade");

User.hasMany(Portfolio, { foreignKey: "userId" });
Portfolio.belongsTo(User, { foreignKey: "userId" });

Portfolio.hasMany(Trade, { foreignKey: "portfolioId" });
Trade.belongsTo(Portfolio, { foreignKey: "portfolioId" });

module.exports = {
  sequelize,
  User,
  Share,
  Portfolio,
  Trade,
};
