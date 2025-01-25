const {firstService} = require('../Services')

const holaMundo = (req, res, next) => {
    try {
        res.status(200).json({
            msg: firstService.holaMundo()
        })
    } catch (error) {
        console.log('Hubo un error', error)       
    }
}

module.exports = {holaMundo}