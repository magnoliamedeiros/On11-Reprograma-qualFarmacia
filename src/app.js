const express = require("express")
const cors = require("cors")
const db = require("./data/dbConfig")
const index = require("./routes/index")
const farmacia = require("./routes/farmaciaRoutes")

// Conectando o banco
db.connect()

const app = express()

app.use(cors())
app.use(express.json())

// Retorna um json formatado e tabulado de forma amigável
app.set("json spaces", 4)

// Definindo rota
app.use("/", index)
app.use("/farmacias", farmacia)

module.exports = app