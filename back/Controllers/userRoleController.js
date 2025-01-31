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

module.exports = {getUserRoleById}