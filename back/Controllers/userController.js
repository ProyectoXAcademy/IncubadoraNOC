const {userService} = require('../Services')

const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id
        const findUser = await userService.getUserById(id)
        res.status(200).json(findUser)
    } catch (error) {
        next(error)
    }
}

module.exports = {getUserById}