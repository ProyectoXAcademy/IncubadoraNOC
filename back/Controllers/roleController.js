const {roleService} = require('../Services')

const getRoleById = async (req, res, next) => {
    try {
        const id = req.params.id
        const findRole = await roleService.getRoleById(id)
        res.status(200).json(findRole)
    } catch (error) {
        next(error)
    }
}
module.exports = {getRoleById}