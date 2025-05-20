const { Portfolio, Share, Trade } = require("../models");
const TradeType = require("../models/enums/tradeType");

const validatePortfolioAndShare = async (portfolioId, symbol) => {

  const portfolio = await Portfolio.findByPk(portfolioId);
  if (!portfolio) {
    throw new Error("Portfolio not registered.");
  }

  const share = await Share.findOne({ where: { symbol } });
  if (!share) {
    throw new Error("Share not registered.");
  }

  return { portfolio, share };
};

const getRateOfSymbol = async(symbol) => {
    const share = await Share.findOne({
        where: { symbol },
        order: [["createdAt", "DESC"]],
      });
    
    return share.rate;
}

const buy = async ({ portfolioId, symbol, quantity }) => {
  const rate = await getRateOfSymbol(symbol);
  console.log(rate);
  await Trade.create({
    portfolioId,
    type: TradeType.BUY,
    symbol,
    quantity,
    rate: rate,
  });

  return {
    portfolioId,
    message: `Successfully bought ${quantity} of ${symbol} at rate ${rate}`,
  };
};

const sell = async ({ portfolioId, symbol, quantity }) => {
  const rate = await getRateOfSymbol(symbol);

  const trades = await Trade.findAll({
    where: { portfolioId, symbol },
    order: [["timestamp", "ASC"]],
  });

  const available = trades.reduce((total, trade) => {
    if (trade.type === TradeType.BUY) return total + trade.quantity;
    if (trade.type === TradeType.SELL) return total - trade.quantity;
    return total;
  }, 0);
  

  if (available < quantity) {
    throw new Error(`Not enough shares to sell. Available: ${available}`);
  }

  await Trade.create({
    portfolioId,
    type: TradeType.SELL,
    symbol,
    quantity,
    rate: rate,
  });

  return {
    portfolioId,
    message: `Successfully sold ${quantity} of ${symbol} at rate ${rate}`,
  };
};

const processTrade = async (type, payload) => {
  const { portfolioId, symbol } = payload;
  await validatePortfolioAndShare(portfolioId, symbol); 

  if (type === TradeType.BUY) {
    return await buy(payload);
  } else if (type === TradeType.SELL) {
    return await sell(payload);
  }
};

module.exports = {
  buy,
  sell,
  processTrade,
};
