const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const { dbConfig } = require('./Config');
const { userRouter, roleRouter, userRoleRouter, courseRouter, registrationRouter, noteRouter, paymentRouter, 
    assistanceRouter, publicationRouter, loginRouter, 
    dictationRouter} = require('./Routes');
const { errorMiddleware } = require('./Middlewares');
const passport = require('passport')

const app = express();
const PORT = 3000;

// Configuración de Swagger
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Documentación",
            version: "1.0.0",
            description: "Documentación de la API con Swagger",
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ['./Routes/*.js'], // Archivos donde estarán los endpoints documentados
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use(cors());
app.use(passport.initialize())

app.use('/api/user', userRouter);
app.use('/api/role', roleRouter);
app.use('/api/userRole', userRoleRouter);
app.use('/api/course', courseRouter);
app.use('/api/registration', registrationRouter);
app.use('/api/note', noteRouter);
app.use('/api/payment', paymentRouter);
app.use('/api/assistance', assistanceRouter);
app.use('/api/publication', publicationRouter);
app.use('/api/login', loginRouter);

app.use(errorMiddleware);

app.listen(PORT, async () => {
    await dbConfig.initDB();
    console.log(`Servidor corriendo en puerto ${PORT}`);
    console.log(`Swagger disponible en http://localhost:${PORT}/api-docs`);
});
