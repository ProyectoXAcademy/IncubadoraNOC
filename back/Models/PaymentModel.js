const {DataTypes} = require('sequelize')
const {dbConfig} = require('../Config')

const paymentModel = dbConfig.sequelize.define("Payments", {
    payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    value: {
        type: DataTypes.INTEGER,
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
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = paymentModel