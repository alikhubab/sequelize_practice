import { Sequelize, Model, DataTypes } from "sequelize";
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

(async () => {
  const students = await Student.findAll();
  console.log(students.every((user) => user instanceof User));
  console.log("All users>>", JSON.stringify(students, null, 2));

  //   const hamza = await Student.create(
  //     {
  //       name: "Hamza",
  //       age: 24,
  //       favoriteColor: "magenta",
  //     },
  //     {
  //       fields: ["name", "age"],
  //     }
  //   );

  //   await sequelize.sync({ force: true });
  //   const ali = Student.build({ name: "Ali" });
  //   console.log(ali.name);
  //   ali.save();

  //   const amna = await Student.findOne({
  //     where: {
  //       age: 118,
  //     },
  //   });
  //   if (amna) {
  //     // await amna.increment("age");
  //     await amna.increment({
  //       age: 10,
  //       cash: 33,
  //     });
  //     await amna.increment(["age", "cash"], {
  //       by: 64,
  //     });
  // amna.name = "Amna Kanwal Khan";
  // amna.age = 32;
  // amna.save({ fields: ["name"] });

  // await amna.reload();
  // console.log(amna.age);
  //   await amna.save();
  //   }

  //   const misbah = await Student.findOne({
  //     where: {
  //       age: 26,
  //     },
  //   });
  //   if (misbah) {
  //     misbah.set({
  //       name: "Misbah Fayaz",
  //       favoriteColor: "red",
  //     });
  //     await misbah.save();
  //   }
  //   console.log(misbah?.toJSON());

  //   const ali = await Student.findOne({
  //     where: {
  //       name: "Ali",
  //     },
  //   });

  //   if (ali) {
  //     // await ali.update({ age: 28, favoriteColor: "blue" });
  //     await ali.destroy();
  //   }
})();
