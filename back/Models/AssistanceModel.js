const {DataTypes} = require('sequelize')
const {dbConfig} = require('../Config')

const assistanceModel = dbConfig.sequelize.define("Assistances", {
    assistance_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: true
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