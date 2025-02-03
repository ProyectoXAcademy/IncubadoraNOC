const errorHandler = (err, req, res, next) => {
    console.log('Ejecutando middleware para manejo de errores')
    const statusCode = err.statusCode || 500
    res.status(statusCode).json({
        message: err.message || 'Hubo un error inesperado'
    })
}

module.exports = errorHandler