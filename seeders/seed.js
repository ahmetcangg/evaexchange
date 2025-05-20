const { sequelize, User, Share, Portfolio } = require("../models");

const seed = async () => {
  try {
    await sequelize.sync({ force: true }); 

    const users = await User.bulkCreate([
      { name: "John", email: "john@eva.com" },
      { name: "Tom", email: "tom@eva.com" },
      { name: "Hailey", email: "hailey@eva.com" },
      { name: "Jerry", email: "jerry@eva.com" },
      { name: "Ashley", email: "ashley@eva.com" },
      { name: "Justin", email: "justin@eva.com" },
    ]);

    const shares = await Share.bulkCreate([
      { symbol: "ABC", rate: 100.20 ,timestamp: new Date("2025-05-20T10:00:00Z"),},
      { symbol: "XYZ", rate: 250.50 ,timestamp: new Date("2025-05-20T09:00:00Z"),},
      { symbol: "LMN", rate: 75.25 ,timestamp: new Date("2025-05-20T10:00:00Z"),},
      { symbol: "KLM", rate: 110.20 ,timestamp: new Date("2025-05-20T10:00:00Z"),},
      { symbol: "YUT", rate: 150.30 ,timestamp: new Date("2025-05-20T10:00:00Z"),},
      { symbol: "EKS", rate: 53.25 ,timestamp: new Date("2025-05-20T10:00:00Z"),},
      { symbol: "ABC", rate: 130.20 ,timestamp: new Date("2025-05-20T11:00:00Z"),},
      { symbol: "XYZ", rate: 262.10 ,timestamp: new Date("2025-05-20T10:00:00Z"),},
      { symbol: "XYZ", rate: 272.10 ,timestamp: new Date("2025-05-20T11:00:00Z"),},
      { symbol: "XYZ", rate: 265.30 ,timestamp: new Date("2025-05-20T12:00:00Z"),},
    ]);


    await Portfolio.bulkCreate([
      { userId: users[0].id},
      { userId: users[1].id},
      { userId: users[2].id},
      { userId: users[3].id},
      { userId: users[4].id},
      { userId: users[5].id},
      { userId: users[1].id},
      { userId: users[3].id},
    ]);

    console.log("Seed loaded successfully");
    process.exit();
  } catch (error) {
    console.error("Error on seed load", error);
    process.exit(1);
  }
};

seed();
