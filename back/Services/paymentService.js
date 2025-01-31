const {paymentModel} = require('../Models')

const getPaymentById = async (payment_id) => {
    try {
        const findPayment = await paymentModel.findByPk(payment_id)
        if (!findPayment) {
            const error = new Error()
            error.message = `Error al encontrar pago con id=${payment_id}`
            error.statusCode = 404
            throw error
        }
        return findPayment
    } catch (error) {
        throw error
    }
}

module.exports = {getPaymentById}