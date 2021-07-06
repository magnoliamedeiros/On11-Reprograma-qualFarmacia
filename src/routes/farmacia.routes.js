const express = require('express')
const router = express.Router()

const farmaciaController = require('../controllers/farmaciaController')

// retorna todas as farmacias
router.get('/listar', farmaciaController.getAll)

// cria uma nova farmacia
router.post('/cadastrar', farmaciaController.create)

module.exports = router