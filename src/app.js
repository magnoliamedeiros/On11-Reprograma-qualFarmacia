const express = require('express')
const app = express()

const index = require('./routes/index')
const farmacias = require('./routes/')

app.use(express.json())

// retorna um json formatado e tabulado de forma amigável
app.set('json spaces', 4)

// definindo rota raiz
app.use('/', index)
app.use('/farmacias', farmacias)

module.exports = app