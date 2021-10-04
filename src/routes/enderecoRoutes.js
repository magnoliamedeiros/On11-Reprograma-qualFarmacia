const express = require("express")
const router = express.Router()

const enderecoController = require("../controllers/enderecoController")

// Retorna todos os endereços
router.get("/", enderecoController.mostrarEnderecos)

// Retorna um endereço por id
router.get("/:id", enderecoController.getEnderecoPorId)

// Rertorna um endereço por bairro
router.get("/bairro", enderecoController.getEnderecoPorBairro)

// Cadastra um endereço
router.post("/cadastrar", enderecoController.cadastrarEndereco)

// Atualiza um endereço
// router.patch("/atualizar/:id", enderecoController.atualizarEndereco)

// Deleta um endereço
router.delete("/deletar/:id", enderecoController.deletarEndereco)

module.exports = router