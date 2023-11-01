import { DataTypes, QueryInterface } from "sequelize";
import Sequelize from "sequelize";

module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.createTable("Products", {
      date: {
        type: DataTypes.DATE,
      },
      amount: {
        type: Sequelize.FLOAT,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface: any, Sequelize: any) {
    await queryInterface.dropTable("Products");
  },
};
