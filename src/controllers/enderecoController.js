const mongoose = require("mongoose")
const EnderecoSchema = require("../models/enderecoSchema")

// Cadastra endereço
const cadastrarEndereco = async (request, response) => {
  
  const endereco = new EnderecoSchema({
    _id: new mongoose.Types.ObjectId(),
    logradouro: request.body.logradouro,
    bairro: request.body.bairro,
    criadoEm: request.body.criadoEm
  })

  const enderecoJaExiste = await EnderecoSchema.findOne({
    logradouro: request.body.logradouro
  })

  if (enderecoJaExiste) {
    return response.status(400).json({
      error: "Endereço já cadastrado!"
    })
  }

  try {
    const novoEndereco = await endereco.save()
    response.status(201).json({
      success: "Endereço cadastrado com sucesso!",
      novoEndereco
    })
  } catch (err) {
    response.status(400).json({
      error: err.message
    })
  }
}

// Retorna todos os endereços
const mostrarEnderecos = async (request, response) => {
  try {
    const enderecos = await EnderecoSchema.find()
    response.status(200).json({
      success: "Endereços listados com sucesso!",
      enderecos
    })
  } catch (err) {
    response.status(500).json({
      error: err.message
    })
  }
}

// Retorna endereço por id
const getEnderecoPorId = async (request, response) => {

  try {

    const endereco = await EnderecoSchema.findById({ _id: request.params.id })
    
    if (endereco == null) {
      return response.status(404).json({
        message: "Endereço não encontrado!"
      })
    }

    response.status(200).json(endereco)

  } catch (err) {

    response.status(404).json({
      message: "Desculpa! Não existe endereço cadastrado", 
      error: err.message
    })

  }
}

// Deleta endereço
const deletarEndereco = async (request, response) => {

  try {

    const endereco = await EnderecoSchema.findById({ _id: request.params.id })

    if (endereco == null || endereco == "") {
      return response.status(404).json({
        message: "Endereço não encontrado!"
      })
    }

    await endereco.remove()

    response.json({
      success: "Endereço deletado com sucesso!"
    })

  } catch (err) {

    response.status(500).json({
      error: err.message
    })
  }
}

// Alterar endereço
const alterarEndereco = async (request, response) => {
  // Em construção
}

module.exports = {
  cadastrarEndereco,
  mostrarEnderecos,
  getEnderecoPorId,
  deletarEndereco,
  alterarEndereco
}
