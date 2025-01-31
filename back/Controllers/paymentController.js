const {paymentService} = require('../Services')

const getPaymentById = async (req, res, next) => {
    try {
        const id = req.params.id
        const findPayment = await paymentService.getPaymentById(id)
        res.status(200).json(findPayment)
    } catch (error) {
        next(error)
    }
}

module.exports = {getPaymentById}