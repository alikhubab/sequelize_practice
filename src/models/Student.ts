import { Sequelize, Model, DataTypes } from "sequelize";
import { sequelize } from "../config/connection";

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

  const misbah = await Student.create({
    name: "Misbah",
    age: 26,
    cash: 5000,
    favoriteColor: "blue",
  });
})();
