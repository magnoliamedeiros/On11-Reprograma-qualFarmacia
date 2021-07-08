const mongoose = require('mongoose')
const Farmacia = require('../models/farmaciaSchema')

// Retorna todas as farmácias
const getAll = async (request, response) => {
  try {
    const farmacias = await Farmacia.find()
    response.status(200).json(farmacias) 
  } catch (error) {
    response.status(500).json({
      message: error.message
    })
  }
}

// Retorna uma farmácia pelo id
const getOne = async (request, response) => {
  try {
    const farmacia = await Farmacia.findById(request.params.id)
    if(farmacia == null) {
      return response.status(404).json({
        message: 'Farmácia não encontrada!'
      })
    }
    response.json(farmacia)
  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
}

// Adiciona uma farmácia
const create = async (request, response) => {

  const farmacia = new Farmacia({
    _id: new mongoose.Types.ObjectId(),
    nome: request.body.nome,
    endereco: request.body.endereco,
    numero: request.body.numero,
    bairro: request.body.bairro,
    telefoneDeContato: request.body.telefoneDeContato,
    criadoEm: request.body.criadoEm
    // whatsapp: request.body.whatsapp,
    // plantao: request.body.plantao,
    // dataDoPlantao: request.body.dataDoPlantao,
    // horarioDeFuncionamento: request.body.horarioDeFuncionamento,
    // servicoDeEntrega: request.body.servicoDeEntrega,
    // horarioDeEntrega: request.body.horarioDeEntrega,
    // horarioDoPlantao: request.body.horarioDoPlantao,
  })
  
  const farmaciaJaExiste = await Farmacia.findOne({nome: request.body.nome})

  if (farmaciaJaExiste) {
    return response.status(400).json({
      message: 'Farmácia já cadastrada!'
    })
  }

  try { 
    const novaFarmacia = await farmacia.save()
    response.status(201).json([{
      success: 'Farmácia cadastrada com sucesso!',
      novaFarmacia
    }])
  } catch (err) {
    response.status(400).json({
      error: err.message
    })
  }
}

const deleteOne = async (request, response) => {
  try {    
    const farmacia = await Farmacia.findById(request.params.id)
    if (farmacia == null || farmacia == undefined) {
      return response.status(404).json({
        message: 'Farmácia não encontrada!'
      })
    }
    await farmacia.remove()
    response.json({ success: 'Farmácia deletada com sucesso!'})
  } catch (err) {
    response.status(500).json({
      error: err.message
    })
  }
}

module.exports = {
  create,
  getAll,
  getOne,
  deleteOne
}