import { DataTypes } from "sequelize";
import { dbConfig } from "../Config";

const RoleModel = dbConfig.sequelize.define("Roles", {
    role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = RoleModel