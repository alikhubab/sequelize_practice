import { Sequelize, Model, DataTypes } from "sequelize";
import { sequelize } from "../config/connection";
import { json } from "stream/consumers";

interface StudentType extends Model {
  name: string;
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
  //   await sequelize.sync({ force: true });
  //   const ali = Student.build({ name: "Ali" });
  //   console.log(ali.name);
  //   ali.save();

  const amna = await Student.findOne({
    where: {
      age: 30,
    },
  });
  if (amna) {
    amna.name = "Amna Kanwal Khan";

    await amna.reload();
    console.log(amna.name);
    //   await amna.save();
  }

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

  const ali = await Student.findOne({
    where: {
      name: "Ali",
    },
  });

  if (ali) {
    // await ali.update({ age: 28, favoriteColor: "blue" });
    await ali.destroy();
  }
})();
