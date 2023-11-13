import { Sequelize, Model, DataTypes, Order } from "sequelize";
import { sequelize } from "../config/connection";
import { json } from "stream/consumers";
import { User } from "./user";

interface StudentType extends Model {
  name: string;
  age: number;
}
const Student = sequelize.define<StudentType>("student", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: "green",
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER,
});

let k: Order;

(async () => {
  const students = await Student.findAll({
    attributes: {
      include: [[sequelize.fn("COUNT", sequelize.col("cash")), "money"]],
    },
    raw: true,
    group: ["cash"],
  });
})();
