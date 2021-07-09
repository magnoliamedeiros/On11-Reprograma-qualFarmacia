const express = require("express")
const router = express.Router()

const farmaciaController = require("../controllers/farmaciaController")

// Retorna todas as farmacias
router.get("/", farmaciaController.getAll)

// Retorna uma farmácia por id
router.get("/:id", farmaciaController.getById)

// Cadastra uma farmacia
router.post("/cadastrar", farmaciaController.cadastrarFarmacia)

// Atualiza uma farmácia
router.patch("/atualizar/:id", farmaciaController.atualizarFarmacia)

// Deleta uma farmácia
router.delete("/deletar/:id", farmaciaController.deletarFarmacia)

module.exports = router