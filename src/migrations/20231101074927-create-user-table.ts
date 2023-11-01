import { DataTypes, QueryInterface } from "sequelize";
import Sequelize from "sequelize";

module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.createTable("Users", {
      name: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      dob: {
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface: any, Sequelize: any) {
    await queryInterface.dropTable("Users");
  },
};
