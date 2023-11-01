import { DataTypes, QueryInterface } from "sequelize";
import Sequelize from "sequelize";

module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.createTable("Orders", {
      date: {
        type: DataTypes.DATE,
      },
      price: {
        type: Sequelize.FLOAT,
      },
    });
  },
  async down(queryInterface: any, Sequelize: any) {
    await queryInterface.dropTable("Orders");
  },
};
