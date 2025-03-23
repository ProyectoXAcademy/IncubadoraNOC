const express = require('express');
const router = express.Router();
const { userRoleController } = require('../Controllers');

/**
 * @swagger
 * /api/role/{id}:
 *   get:
 *     summary: Obtener un rol de usuario por ID
 *     description: Recupera los detalles del rol de un usuario utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del rol de usuario.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rol de usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                   description: ID del usuario.
 *                 roleId:
 *                   type: string
 *                   description: ID del rol asociado.
 *       404:
 *         description: Rol de usuario no encontrado
 */

/**
 * @swagger
 * /api/role/userID/{id}:
 *   get:
 *     summary: Obtener rol de usuario por ID de usuario
 *     description: Recupera los roles de un usuario específico utilizando el ID de usuario.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del usuario.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Roles de usuario encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: string
 *                     description: ID del usuario.
 *                   roleId:
 *                     type: string
 *                     description: ID del rol asociado.
 *       404:
 *         description: No se encontraron roles para el usuario
 */

/**
 * @swagger
 * /api/role/create:
 *   post:
 *     summary: Crear una asignación de rol a un usuario
 *     description: Crea una nueva asignación de rol para un usuario dado un ID de usuario y un ID de rol.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserUserId:
 *                 type: string
 *                 description: ID del usuario.
 *               RoleRoleId:
 *                 type: string
 *                 description: ID del rol a asignar al usuario.
 *     responses:
 *       200:
 *         description: Asignación de rol creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                   description: ID del usuario.
 *                 roleId:
 *                   type: string
 *                   description: ID del rol asignado.
 *       400:
 *         description: Error al crear la asignación de rol
 */

router.get('/:id', userRoleController.getUserRoleById);
router.get('/userID/:id', userRoleController.getUserRoleByUserId);
router.post('/create', userRoleController.createUserRole);

module.exports = router;
