import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection";

const Boat = sequelize.define("Boat", { 
    name: DataTypes.STRING 
});

Boat.sync();
