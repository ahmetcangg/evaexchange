const express = require("express");
const router = express.Router();
const tradeController = require("../controllers/tradeController");

router.post("/buy", tradeController.handleTrade("BUY"));
router.post("/sell", tradeController.handleTrade("SELL"));

module.exports = router;
