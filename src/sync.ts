import { sequelize } from "./config/connection";

sequelize
  .sync({ alter: true })
  .then((_) => console.log("Database synced"))
  .catch((error) => console.log("Error syncing db>>", error));
