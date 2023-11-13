import { Sequelize, Model, DataTypes, Order, Op } from "sequelize";
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
  //   const students = await Student.findAll({
  //     where: {
  //       age: 26,
  //     },
  //   });

  //   const students = await Student.findAll({
  //     where: {
  //       age: {
  //         [Op.gt]: 20,
  //       },
  //       favoriteColor: "red",
  //     },
  //   });

  //   const students = await Student.findAll({
  //     where: {
  //       [Op.and]: {
  //         age: {
  //           [Op.gt]: 25,
  //         },
  //         favoriteColor: "red",
  //       },
  //     },
  //   });
  const students = await Student.findAll({
    where: {
      age: {
        [Op.or]: [26, 24],
      },
    },
  });

  console.log(JSON.stringify(students, null, 4));
})();
