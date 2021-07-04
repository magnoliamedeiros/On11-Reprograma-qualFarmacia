const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const index = require('./routes/index')
const farmacias = require('./routes/')

const db = require('./data/database')
db.connect()

// retorna um json formatado e tabulado de forma amigável
app.set('json spaces', 4)

// definindo rota raiz
app.use('/', index)
app.use('/farmacias', farmacias)

module.exports = app