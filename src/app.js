const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const index = require('./routes/index')
const farmacia = require('./routes/farmacia.routes')

// conectando o mongo ao mongoose
const db = require('./data/database')
db.connect()

// retorna um json formatado e tabulado de forma amigável
app.set('json spaces', 4)

// definindo rota raiz
app.use('/', index)
app.use('/farmacias', farmacia)

module.exports = app