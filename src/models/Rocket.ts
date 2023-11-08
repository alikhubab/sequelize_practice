import { Sequelize, DataTypes, Model } from "sequelize";

import { sequelize } from "../config/connection";

class Rocket extends Model {
  declare id: number;
  declare rocketName: string;
  declare manufacturer: string;
  declare fuelType: string;
  declare payloadCapacity: number;
  declare currentStatus: string;
}

Rocket.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rocketName: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    fuelType: DataTypes.STRING,
    payloadCapacity: DataTypes.INTEGER,
    currentStatus: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Rocket",
  }
);

// Rocket.sync(); // This creates the table if it doesn't exist (and does nothing if it already exists)

// const rocket = new Rocket();
// rocket.id;
// rocket.rocketName = "Yasin 105";
// rocket.manufacturer = "Hamas";
// rocket.fuelType = "Barood";
// rocket.payloadCapacity = 1000;
// rocket.save();

// Rocket.sync({ force: true }); // This creates the table, dropping it first if it already existed
// Rocket.sync({ alter: true }); // This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

console.log(Rocket === sequelize.models.Rocket);
