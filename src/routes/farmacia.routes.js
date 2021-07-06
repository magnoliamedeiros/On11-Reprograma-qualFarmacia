const express = require('express')
const router = express.Router()

const farmaciaController = require('../controllers/farmaciaController')

// cria uma nova farmacia
router.post('/cadastrar', farmaciaController.create)

module.exports = router