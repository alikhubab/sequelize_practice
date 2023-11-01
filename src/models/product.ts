import Sequelize from "sequelize";
import { sequelize } from "../config/connection";

const Product = sequelize.define("product", {
  name: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.FLOAT,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
});

export default Product;
