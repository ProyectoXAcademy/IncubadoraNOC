const {DataTypes} = require('sequelize')
const {dbConfig} = require('../Config')

const contentModel = dbConfig.sequelize.define("Contents", {
    content_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Courses',
            key: 'course_id'
        }
    }
}, {
    timestamps: false
})

module.exports = contentModel