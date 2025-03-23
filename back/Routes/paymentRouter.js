const express = require('express');
const router = express.Router();
const { paymentController } = require('../Controllers');

/**
 * @swagger
 * /api/payment/{id}:
 *   get:
 *     summary: Obtener un pago por ID
 *     description: Recupera los detalles de un pago específico utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del pago.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pago encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID del pago.
 *                 amount:
 *                   type: number
 *                   description: Monto del pago.
 *                 date:
 *                   type: string
 *                   format: date
 *                   description: Fecha del pago.
 *                 status:
 *                   type: string
 *                   description: Estado del pago.
 *       404:
 *         description: Pago no encontrado
 */
router.get('/:id', paymentController.getPaymentById);

module.exports = router;
