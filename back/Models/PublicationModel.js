const {DataTypes} = require('sequelize')
const {dbConfig} = require('../Config')

const publicationModel = dbConfig.sequelize.define("Publications", {
    publication_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    issue_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    owner_id: {
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

module.exports = publicationModel