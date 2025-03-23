const express = require('express');
const router = express.Router();
const { registrationController } = require('../Controllers');

/**
 * @swagger
 * /api/registration/{id}:
 *   get:
 *     summary: Obtener una inscripción por ID
 *     description: Recupera los detalles de una inscripción mediante el ID de la inscripción.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la inscripción.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Inscripción encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 student_id:
 *                   type: string
 *                   description: ID del estudiante.
 *                 course_id:
 *                   type: string
 *                   description: ID del curso.
 *       404:
 *         description: Inscripción no encontrada
 */

/**
 * @swagger
 * /api/registration/create:
 *   post:
 *     summary: Crear una nueva inscripción
 *     description: Crea una nueva inscripción de un estudiante en un curso.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *                 description: ID del estudiante que se inscribe.
 *               course_id:
 *                 type: string
 *                 description: ID del curso al que se inscribe el estudiante.
 *     responses:
 *       201:
 *         description: Inscripción creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                 registration:
 *                   type: object
 *                   properties:
 *                     student_id:
 *                       type: string
 *                       description: ID del estudiante.
 *                     course_id:
 *                       type: string
 *                       description: ID del curso.
 *       400:
 *         description: Error al crear la inscripción debido a datos inválidos
 */

/**
 * @swagger
 * /api/registration/user/{id}:
 *   get:
 *     summary: Obtener las inscripciones de un usuario
 *     description: Recupera todas las inscripciones de un estudiante dado su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del estudiante.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Inscripciones encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   student_id:
 *                     type: string
 *                     description: ID del estudiante.
 *                   course_id:
 *                     type: string
 *                     description: ID del curso.
 *       404:
 *         description: No se encontraron inscripciones para el estudiante
 */

/**
 * @swagger
 * /api/registration/course/{id}:
 *   get:
 *     summary: Obtener las inscripciones de un curso
 *     description: Recupera todas las inscripciones asociadas a un curso dado su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del curso.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Inscripciones encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   student_id:
 *                     type: string
 *                     description: ID del estudiante.
 *                   course_id:
 *                     type: string
 *                     description: ID del curso.
 *       404:
 *         description: No se encontraron inscripciones para el curso
 */

router.get('/:id', registrationController.getRegistrationById);
router.post('/create', registrationController.createRegistration);
router.get('/user/:id', registrationController.getUserRegistrations);
router.get('/course/:id', registrationController.getUsersRegistrationsByCourseId);

module.exports = router;
