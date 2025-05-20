require('dotenv').config();
const express = require('express');
const { sequelize } = require("./models");
const app = express();

app.use(express.json());

app.use('/', require('./routes/tradeRoutes'));

const PORT = process.env.PORT || 3000;
(async () => {
    try {
      await sequelize.sync(); 
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    } catch (err) {
      console.error("Failed to start server:", err);
    }
  })();
  