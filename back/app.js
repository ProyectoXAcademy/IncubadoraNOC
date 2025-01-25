const express = require('express')
const app = express()

const PORT = 3000
const cors = require('cors')
const {dbConfig} = require('./Config')
const {firstRouter} = require('./Routes')

app.use(express.json())
app.use(cors())

app.listen(PORT, async () => {
    await dbConfig.initDB()
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

app.use('/api/hello', firstRouter)