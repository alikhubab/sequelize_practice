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
  //     attributes: ["name", "cash", "age"],
  //     where: {
  //       age: {
  //         [Op.and]: {
  //           [Op.gt]: 20,
  //           [Op.lt]: 32,
  //         },
  //       },
  //     },
  //   });
  //   const students = await Student.findAll({
  //     attributes: ["name", "cash", "age"],
  //     where: {
  //       age: {
  //         [Op.gt]: 20,
  //         [Op.lt]: 32,
  //       },
  //     },
  //   });

  //   const students = await Student.findAll({
  //     attributes: ["name", "cash", "age"],
  //     where: {
  //       [Op.or]: [
  //         {
  //           age: {
  //             [Op.gt]: 20,
  //             [Op.lt]: 32,
  //           },
  //         },
  //         {
  //           name: {
  //             [Op.startsWith]: "am",
  //           },
  //         },
  //       ],
  //     },
  //   });

  const students = await Student.findAll({
    attributes: ["name", "cash", "age"],
    where: {
      [Op.not]: [
        {
          cash: {
            [Op.is]: null,
          },
        },
        // {
        //   name: {
        //     [Op.startsWith]: "am",
        //   },
        // },
      ],
    },
  });

  console.log(JSON.stringify(students, null, 4));
})();
