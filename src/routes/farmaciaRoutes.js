const express = require("express")
const router = express.Router()

const farmaciaController = require("../controllers/farmaciaController")

// Retorna todas as farmacias
router.get("/", farmaciaController.mostrarFarmacias)

// Retorna uma farmácia por id
router.get("/:id", farmaciaController.getById)

// Retorna uma farmácia por bairro = centro
router.get("/bairro/centro", farmaciaController.mostrarFarmaciasCentro)
// Retorna uma farmácia por bairro = centro
router.get("/bairro/jk", farmaciaController.mostrarFarmaciasJK)

// Cadastra uma farmacia
router.post("/cadastrar", farmaciaController.cadastrarFarmacia)

// Atualiza uma farmácia
router.patch("/atualizar/:id", farmaciaController.atualizarFarmacia)

// Deleta uma farmácia
router.delete("/deletar/:id", farmaciaController.deletarFarmacia)

module.exports = router