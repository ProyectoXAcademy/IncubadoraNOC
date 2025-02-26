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

const createUserRole = async (user_id, role_id) => {
    try {
        const newUserRole = {
            UserUserId: user_id,
            RoleRoleId: role_id
        }
        await userRoleModel.create(newUserRole)
        return newUserRole
    } catch (error) {
        throw error
    }
}

const getUserRoleByUserId = async (UserUserId) => {
    try {
        const findUserRole = await userRoleModel.findAll({
            where: {
                UserUserId: UserUserId
            }
        })
        if (!findUserRole) {
            const error = new Error()
            error.message = `Error al encontrar los roles del usuario con user_id=${UserUserId}`
            error.statusCode = 404
            throw error
        }
        return findUserRole
    } catch (error) {
        throw error
    }
}

module.exports = {getUserRoleById, createUserRole, getUserRoleByUserId}