const {userRoleModel} = require('../Models')

const getUserRoleById = async (userRole_id) => {
    try {
        const findUserRole = await userRoleModel.findByPk(userRole_id)
        if (!findUserRole) {
            const error = new Error()
            error.message = `Error al encontrar usuarioRol con id=${userRole_id}`
            error.statusCode = 404
            throw error
        }
        return findUserRole
    } catch (error) {
        throw error
    }
}

module.exports = {getUserRoleById}