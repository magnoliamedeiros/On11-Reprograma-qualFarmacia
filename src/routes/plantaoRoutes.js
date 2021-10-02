const express = require("express")
const router = express.Router()

const plantaoController = require("../controllers/plantaoController")

// Retorna todos os plantões
router.get("/", plantaoController.mostrarPlantao)

// Retorna um plantao por id
router.get("/:id", plantaoController.getById)

// Cadastra um plantao
router.post("/cadastrar", plantaoController.cadastrarPlantao)

// Atualiza um endereço
// router.patch("/atualizar/:id", enderecoController.atualizarEndereco)

// Deleta um plantão
router.delete("/deletar/:id", plantaoController.deletarPlantao)

module.exports = router