import { Sequelize, DataTypes, Model } from "sequelize";

import { sequelize } from "../config/connection";

class Rocket extends Model {
  declare id: number;
}

Rocket.init(
  {
    id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    rocketName: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    fuelType: DataTypes.STRING,
    payloadCapacity: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Rocket",
    freezeTableName: true,
    tableName: "Rocket",
  }
);

const rocket = new Rocket();
rocket.id;
console.log(Rocket === sequelize.models.Rocket);
