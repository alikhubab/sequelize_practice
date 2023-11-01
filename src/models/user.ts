import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";

import { sequelize } from "../config/connection";
import { UserRole } from "../constants/enums";
import { getEnumKeys } from "../helpers/helper";

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  id: number = 0;
  name: string = "";
  email: string = "";
  password: string = "";
  role: UserRole = UserRole.USER;
}

User.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
    },
    email: {
      type: DataTypes.STRING(150),
    },
    password: {
      type: DataTypes.STRING(500),
    },
    role: {
      type: DataTypes.ENUM(...getEnumKeys(UserRole)),
      defaultValue: UserRole.USER,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: "users",
    indexes: [
      {
        fields: ["name"],
        where: {
          role: UserRole.USER,
        },
      },
    ],
  }
);
