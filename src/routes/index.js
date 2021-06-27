const express = require('express')
const router = express.Router()

// GET home page
router.get('/', (request, response)=>{
  response.status(200).json({
    titulo: "API Qual Farmacia - Projeto Final { reprograma }",
    versao: "1.0.0",
    mensagem: "Bem vindas(os) a Qual Farmacia"
  })
})

module.exports = router