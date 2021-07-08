const express = require('express')
const router = express.Router()

const farmaciaController = require('../controllers/farmaciaController')

// Retorna todas as farmacias
router.get('/listar', farmaciaController.getAll)

// Retorna uma farmácia por id
router.get('/listar/:id', farmaciaController.getOne)

// Adiciona uma farmacia
router.post('/cadastrar', farmaciaController.create)

// Deleta uma farmácia
router.delete('/deletar/:id', farmaciaController.deleteOne)

module.exports = router