import Sequelize, { DataTypes } from "sequelize";
import { sequelize } from "../config/connection";

const Gun = sequelize.define("Gun", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  manufacturing_country: {
    type: DataTypes.STRING,
  },
  caliber: {
    type: DataTypes.STRING,
    defaultValue: "9mm",
  },
  licenseNumber: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
});

console.log("isGun>> ", Gun === sequelize.models.Gun);

export default Gun;
