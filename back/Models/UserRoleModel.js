const {DataTypes} = require('sequelize')
const {dbConfig} = require('../Config')

const userRoleModel = dbConfig.sequelize.define("UserRoles", {
    userRole_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    }
}, {
    timestamps: false
})

module.exports = userRoleModel