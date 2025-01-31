const {DataTypes} = require('sequelize')
const {dbConfig} = require('../Config')

const noteModel = dbConfig.sequelize.define("Notes", {
    note_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
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
    }

}, {
    timestamps: false
})

module.exports = noteModel