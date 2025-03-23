const express = require('express')
const router = express.Router()

const {assistanceController} = require('../Controllers')

/**
 * @swagger
 * /api/assistance/{id}:
 *   get:
 *     summary: Obtener asistencia por ID
 *     description: Devuelve la información de asistencia de un estudiante en un curso utilizando el ID de la asistencia.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la asistencia.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Asistencia encontrada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la asistencia.
 *                 course_id:
 *                   type: string
 *                   description: ID del curso.
 *                 student_id:
 *                   type: string
 *                   description: ID del estudiante.
 *                 date:
 *                   type: string
 *                   description: Fecha de la asistencia.
 *       404:
 *         description: Asistencia no encontrada.
 *       500:
 *         description: Error en el servidor.
 */
router.get('/:id', assistanceController.getAssistanceById)

/**
 * @swagger
 * /api/assistance:
 *   post:
 *     summary: Crear una nueva asistencia
 *     description: Crea un nuevo registro de asistencia para un estudiante en un curso determinado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course_id:
 *                 type: string
 *                 description: ID del curso.
 *               student_id:
 *                 type: string
 *                 description: ID del estudiante.
 *               date:
 *                 type: string
 *                 description: Fecha de la asistencia.
 *     responses:
 *       200:
 *         description: Asistencia creada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la asistencia.
 *                 course_id:
 *                   type: string
 *                   description: ID del curso.
 *                 student_id:
 *                   type: string
 *                   description: ID del estudiante.
 *                 date:
 *                   type: string
 *                   description: Fecha de la asistencia.
 *       400:
 *         description: Datos de la solicitud incorrectos.
 *       500:
 *         description: Error en el servidor.
 */
router.post('/', assistanceController.createAssistance)

/**
 * @swagger
 * /api/assistance/student:
 *   post:
 *     summary: Obtener asistencia por estudiante y curso
 *     description: Devuelve la asistencia de un estudiante en un curso determinado, utilizando los IDs de estudiante y curso.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *                 description: ID del estudiante.
 *               course_id:
 *                 type: string
 *                 description: ID del curso.
 *     responses:
 *       200:
 *         description: Asistencia encontrada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la asistencia.
 *                 course_id:
 *                   type: string
 *                   description: ID del curso.
 *                 student_id:
 *                   type: string
 *                   description: ID del estudiante.
 *                 date:
 *                   type: string
 *                   description: Fecha de la asistencia.
 *       404:
 *         description: Asistencia no encontrada.
 *       500:
 *         description: Error en el servidor.
 */
router.post('/student', assistanceController.getAssistanceByIdStudentANDIdCourse)

module.exports = router
