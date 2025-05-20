const tradeService = require("../service/tradeService");

const handleTrade = (type) => async (req, res) => {
  try {
    const result = await tradeService.processTrade(type, req.body);
    res.status(200).json({ message: `${type} successful`, trade: result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { handleTrade };
