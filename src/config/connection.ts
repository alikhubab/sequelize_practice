import { filePath } from "../helpers/helper";
require("dotenv").config({ path: filePath("") + "/.env" });

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  host: "127.0.0.1",
  database: "test",
  username: "root",
  password: "admin",
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci",
  },
  pool: {
    acquire: 900000,
    idle: 100000,
    max: 60,
  },
  dialect: "mysql",
  logging: console.log,
});

const authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

authenticate();
