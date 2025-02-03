const {userRoleService} = require('../Services')

const getUserRoleById = async (req, res, next) => {
    try {
        const id = req.params.id
        const findUserRole = await userRoleService.getUserRoleById(id)
        res.status(200).json(findUserRole)
    } catch (error) {
        next(error)
    }
}

const createUserRole = async (req, res, next) => {
    try {
        const {UserUserId, RoleRoleId} = req.body
        const newUserRole = await userRoleService.createUserRole(UserUserId, RoleRoleId)
        res.status(200).json(newUserRole)
    } catch (error) {
        next(error)
    }
}

module.exports = {getUserRoleById, createUserRole}