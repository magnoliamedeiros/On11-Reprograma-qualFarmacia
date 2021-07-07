const express = require('express')
const router = express.Router()

// get home
router.get('/', (request, response)=>{
  response.status(200).json({
    title: "API Qual Farmácia - Projeto Final { reprograma }",
    version: "1.0.0",
    message: "Bem vindas(os) a Qual Farmácia"
  })
})

module.exports = router