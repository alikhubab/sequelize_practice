import { sequelize } from "./config/connection";

sequelize
  .sync()
  .then((_) => console.log("Database synced"))
  .catch((error) => console.log("Error syncing db>>", error));
