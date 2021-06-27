const express = require('express')
const app = express()

const index = require('./routes/index')
const farmacias = require('./routes/')

app.use(express.json())

// definindo rota raiz
app.use('/', index)
app.use('/farmacias', farmacias)

module.exports = app