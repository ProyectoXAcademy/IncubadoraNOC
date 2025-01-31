const {DataTypes} = require('sequelize')
const {dbConfig} = require('../Config')

const userRoleModel = dbConfig.sequelize.define("UserRoles", {
    userRole_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'user_id'
        }
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Roles',
            key: 'role_id'
        }
    }
}, {
    timestamps: false
})

module.exports = userRoleModel