const express = require('express');
const router = express.Router();
const { roleController } = require('../Controllers');

/**
 * @swagger
 * /api/role/{id}:
 *   get:
 *     summary: Obtener un rol por ID
 *     description: Recupera los detalles de un rol específico utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del rol.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rol encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID del rol.
 *                 name:
 *                   type: string
 *                   description: Nombre del rol.
 *       404:
 *         description: Rol no encontrado
 */

/**
 * @swagger
 * /api/role/create:
 *   post:
 *     summary: Crear un nuevo rol
 *     description: Crea un nuevo rol con el nombre especificado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del rol a crear.
 *     responses:
 *       200:
 *         description: Rol creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID del nuevo rol.
 *                 name:
 *                   type: string
 *                   description: Nombre del nuevo rol.
 *       400:
 *         description: Error al crear el rol
 */

router.get('/:id', roleController.getRoleById);
router.post('/create', roleController.createRole);

module.exports = router;
