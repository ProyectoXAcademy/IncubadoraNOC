import { DataTypes } from "sequelize";
import { dbConfig } from "../Config";

const assistanceModel = dbConfig.sequelize.define("Assistances", {
    assistance_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Courses',
            key: 'course_id'
        }
    },
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'user_id'
        }
    }
}, {
    timestamps: false
})

module.exports = assistanceModel