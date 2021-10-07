const express = require("express")
const farmaciaController = require("../controllers/farmaciaController")
const router = express.Router()

// Retorna todas as farmacias
router.get("/", farmaciaController.mostrarFarmacias)

// Retorna uma farmácia por id
router.get("/:id", farmaciaController.getById)

// Retorna uma farmácia por nome
router.get("/:nome", farmaciaController.getByNome)

// Retorna farmácias por bairro = centro
router.get("/bairro/centro", farmaciaController.mostrarFarmaciasCentro)

// Retorna uma farmácia por bairro = jk
router.get("/bairro/jk", farmaciaController.mostrarFarmaciasJK)

// Retorna farmácias por bairro = parque dourado
router.get("/bairro/parquedourado", farmaciaController.mostrarFarmaciasParqueDourado)

// Cadastra uma farmacia
router.post("/cadastrar", farmaciaController.cadastrarFarmacia)


// Atualiza uma farmácia
router.patch("/atualizar/:id", farmaciaController.atualizarFarmacia)

// Deleta uma farmácia
router.delete("/deletar/:id", farmaciaController.deletarFarmacia)

module.exports = router