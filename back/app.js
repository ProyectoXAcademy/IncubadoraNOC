const express = require('express')
const app = express()

const PORT = 3000
const cors = require('cors')
const {dbConfig} = require('./Config')
const {userRouter, roleRouter, userRoleRouter, courseRouter, registrationRouter, noteRouter, paymentRouter, assistanceRouter, publicationRouter} = require('./Routes')
const {errorMiddleware} = require('./Middlewares')

app.use(express.json())
app.use(cors())
app.use(errorMiddleware)

app.listen(PORT, async () => {
    await dbConfig.initDB()
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

app.use('/api/user', userRouter)
app.use('/api/role', roleRouter)
app.use('/api/userRole', userRoleRouter)
app.use('/api/course', courseRouter)
app.use('/api/registration', registrationRouter)
app.use('/api/note', noteRouter)
app.use('/api/payment', paymentRouter)
app.use('/api/assistance', assistanceRouter)
app.use('/api/publication', publicationRouter)