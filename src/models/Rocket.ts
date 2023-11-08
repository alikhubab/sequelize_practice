import { Sequelize, DataTypes, Model } from "sequelize";

import { sequelize } from "../config/connection";

class Rocket extends Model {}

Rocket.init(
  {
    rocketName: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    fuelType: DataTypes.STRING,
    payloadCapacity: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Rocket",
  }
);

console.log(Rocket === sequelize.models.Rocket);
