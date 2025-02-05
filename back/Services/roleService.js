const {roleModel} = require('../Models')

const getRoleById = async (role_id) => {
    try {
        const findRole = await roleModel.findByPk(role_id)
        if (!findRole) {
            const error = new Error()
            error.message = `Error al encontrar Rol con id=${role_id}`
            error.statusCode = 404
            throw error
        }
        return findRole
    } catch (error) {
        throw error
    }
}

const createRole = async (name) => {
    try {
        const newRole = {
            name: name
        }
        await roleModel.create(newRole)
        return newRole
    } catch (error) {
        throw error
    }
}

const getRoleByName = async (name) => {
    try {
        const findRole = await roleModel.findOne({
            where: {
                name: name
            }
        })
        if (!findRole) {
            const error = new Error()
            error.message = `Error al encontrar rol con nombre=${name}`
            error.statusCode = 404
            throw error
        }
        return findRole
    } catch (error) {
        throw error
    }
}

module.exports = {getRoleById, createRole, getRoleByName}