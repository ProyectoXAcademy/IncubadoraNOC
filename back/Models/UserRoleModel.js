import {DataTypes} from 'sequelize'
import {dbConfig} from '../Config'

const userRoleModel = dbConfig.sequelize.define("UserRoles", {
    userRole_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
    }
}, {
    timestamps: false
})

module.exports = userRoleModel