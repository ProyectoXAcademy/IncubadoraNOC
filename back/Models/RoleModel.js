const {DataTypes} = require('sequelize')
const {dbConfig} = require('../Config')

const roleModel = dbConfig.sequelize.define("Roles", {
    role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = roleModel