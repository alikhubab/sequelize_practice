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

  const amna = await Student.build({
    name: "Amna",
    age: 30,
    cash: 10000,
    favoriteColor: "orange",
  });
  console.log(JSON.stringify(amna, null, 4));
})();
