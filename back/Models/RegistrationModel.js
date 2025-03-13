const {DataTypes} = require('sequelize')
const {dbConfig} = require('../Config');

const registrationModel = dbConfig.sequelize.define("Registrations", {
    registration_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    registration_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'user_id'
        }
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Courses',
            key: 'course_id'
        }
    },
    is_teacher: { // ✅ Nueva columna para identificar si el usuario es profesor
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false,
});

module.exports = registrationModel;
