import { Model, DataTypes, Deferrable } from "sequelize";
import { sequelize } from "../config/connection";
import Gun from "./gun";
class Kite extends Model {}

Kite.init(
  {
    flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    flyingDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    name: { type: DataTypes.STRING, allowNull: false },
    uniqueOne: { type: DataTypes.STRING, unique: "compositeIndex" },
    uniqueTwo: { type: DataTypes.STRING, unique: "compositeIndex" },

    // Unique constraints
    someUnique: { type: DataTypes.STRING, unique: true },

    id: { type: DataTypes.STRING, primaryKey: true },

    serialNumber: { type: DataTypes.INTEGER, autoIncrement: true },

    // custome column name
    owner: { type: DataTypes.STRING, field: "owner_name" },

    // foregin keys
    gun_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Gun,
        key: "id",
        deferrable: new Deferrable.INITIALLY_IMMEDIATE(),
      },
    },

    whenToFly: {
      type: DataTypes.STRING,
      comment: "Fly it when you feel like it.",
    },
  },
  {
    sequelize,
    modelName: "kite",
  }
);
