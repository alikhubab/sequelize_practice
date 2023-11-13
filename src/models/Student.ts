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
  //   const students = await Student.findAll({
  //     where: {
  //       age: {
  //         [Op.or]: [26, 24],
  //       },
  //     },
  //   });

  //   const students = await Student.findAll({
  //     where: {
  //       [Op.or]: [{ age: 26 }, { cash: 10227 }],
  //       [Op.and]: [{ age: 26 }, { cash: 5000 }],
  //     },
  //   });

  //   const students = await Student.findAll({
  //     where: {
  //       //   age: {
  //       //     // [Op.ne]: 26,
  //       //     // [Op.eq]: 26,
  //       //     [Op.is]: null,
  //       //   },
  //       cash: {
  //         // [Op.not]: null,
  //         [Op.or]: [
  //           null,
  //           {
  //             [Op.gt]: 6000,
  //           },
  //         ],
  //       },
  //     },
  //   });
  //   const students = await Student.findAll({
  //     attributes: ["name", "cash"],
  //     where: {
  //       cash: {
  //         [Op.between]: [5000, 100000],
  //       },
  //     },
  //   });

  const students = await Student.findAll({
    attributes: ["name", "cash"],
    where: {
      cash: {
        [Op.notBetween]: [5000, 100000],
      },
    },
  });

  console.log(JSON.stringify(students, null, 4));
})();
