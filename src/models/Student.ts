import { Sequelize, Model, DataTypes, Order, Op } from "sequelize";
import { sequelize } from "../config/connection";
import { json } from "stream/consumers";
import { User } from "./user";
import { number } from "joi";

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
  //   const students = await Student.findAll({
  //     attributes: ["name", "cash"],
  //     where: {
  //       cash: {
  //         [Op.in]: [10227, 77],
  //       },
  //     },
  //   });
  const students = await Student.findAll({
    attributes: ["name", "cash"],
    where: {
      name: {
        [Op.endsWith]: "az",
      },
    },
  });

  console.log(JSON.stringify(students, null, 4));
})();
