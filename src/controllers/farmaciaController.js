const mongoose = require("mongoose")
const FarmaciaSchema = require("../models/farmaciaSchema")

// Cadastra uma farmácia
const cadastrarFarmacia = async (request, response) => {
  
  // Criando objeto Farmácia
  const farmacia = new FarmaciaSchema({
    _id: new mongoose.Types.ObjectId(),
    nome: request.body.nome,
    telefoneDeContato: request.body.telefoneDeContato,
    whatsapp: request.body.whatsapp,
    endereco: request.body.endereco,
    numero: request.body.numero,
    criadoEm: request.body.criadoEm
  })

  // Não permitir o cadastro de uma farmácia que já existe
  const farmaciaJaExiste = await FarmaciaSchema.findOne({
    nome: request.body.nome
  })

  if (farmaciaJaExiste) {
    return response.status(400).json({
      message: "Farmácia já cadastrada!"
    })
  }

  // Salvando no banco
  try {
    const novaFarmacia = await farmacia.save()
    response.status(201).json({
      success: "Farmácia cadastrada com sucesso!",
      novaFarmacia
    })
  } catch (err) {
    response.status(400).json({
      error: err.message
    })
  }
}

// Retorna todas as farmácias cadastradas
const mostrarFarmacias = async (request, response) => {
  try {
    const farmacias = await FarmaciaSchema.find().populate("endereco")
    response.status(200).json({
      success: "Farmácias listadas com sucesso!",
      farmacias
    })
  } catch (err) {
    response.status(500).json({
      error: err.message
    })
  }
}

// Retorna uma farmácia pelo id
const getById = async (request, response) => {
  try {
    const farmacia = await FarmaciaSchema.findById({ _id: request.params.id })
    if (farmacia == null) {
      return response.status(404).json({
        message: 'Farmácia não encontrada!'
      })
    }
    response.status(200).json(farmacia)
  } catch (err) {
    response.status(500).json({
      error: err.message
    })
  }
}

// Retorna uma farmácia por nome
const getByNome = async (request, response) => {
  try {
    const farmacia = await FarmaciaSchema.find({ nome: request.query.nome })
    if (farmacia == null) {
      return response.status(404).json({
        message: 'Farmácia não encontrada!'
      })
    }
    response.status(200).json(farmacia)
  } catch (err) {
    response.status(500).json({
      error: err.message
    })
  }
}

// Retorna uma farmácia por bairro = centro
const mostrarFarmaciasPorBairro = async (request, response) => {
  try {
    const farmacias = await FarmaciaSchema.find().populate("endereco")
    const farmaciasFiltradas = farmacias.filter(farmacia => farmacia.endereco.bairro == "centro")

    response.status(200).json(farmaciasFiltradas)
  } catch (err) {
    response.status(500).json({
      error: err.message
    })
  }
}

// Atualiza uma farmácia
const atualizarFarmacia = async (request, response) => {
  const encontraFarmacia = await FarmaciaSchema.findById({
    _id: request.params.id
  })

  if (encontraFarmacia == null) {
    return response.status(404).json({
      message: 'Farmácia não encontrada!'
    })
  }

  if (request.body.nome != null) {
    encontraFarmacia.nome = request.body.nome
  }

  if (request.body.endereco != null) {
    encontraFarmacia.endereco = request.body.endereco
  }

  if (request.body.bairro != null) {
    encontraFarmacia.bairro = request.body.bairro
  }

  try {
    const farmaciaAtualizada = await encontraFarmacia.save()
    response.json(farmaciaAtualizada)
  } catch (error) {
    response.status(500).json({
      message: error.message
    })
  }
}

// Deleta uma farmácia
const deletarFarmacia = async (request, response) => {
  try {
    const farmacia = await FarmaciaSchema.findById({ _id: request.params.id })
    if (farmacia == null || farmacia == "") {
      return response.status(404).json({
        message: 'Farmácia não encontrada!'
      })
    }
    await farmacia.remove()
    response.json({
      success: 'Farmácia deletada com sucesso!'
    })
  } catch (err) {
    response.status(500).json({
      error: err.message
    })
  }
}

module.exports = {
  cadastrarFarmacia,
  mostrarFarmacias,
  getById,
  getByNome,
  mostrarFarmaciasPorBairro,
  atualizarFarmacia,
  deletarFarmacia
}
