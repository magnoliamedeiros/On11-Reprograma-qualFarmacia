const mongoose = require('mongoose')
const Farmacia = require('../models/farmaciaSchema')

const create = async (request, response) => {

  const farmacia = new Farmacia({
    _id:  new mongoose.Types.ObjectId(),
    nome: request.body.nome,
    endereco: request.body.endereco,
    numero: request.body.numero,
    bairro: request.body.bairro,
    telefoneDeContato: request.body.telefoneDeContato,
    whatsapp: request.body.whatsapp,
    plantao: request.body.plantao,
    dataDoPlantao: request.body.dataDoPlantao,
    criadoEm: request.body.criadoEm
    // horarioDeFuncionamento: request.body.horarioDeFuncionamento,
    // servicoDeEntrega: request.body.servicoDeEntrega,
    // horarioDeEntrega: request.body.horarioDeEntrega,
    // horarioDoPlantao: request.body.horarioDoPlantao,
  })
  
  const farmaciaExistir = await Farmacia.findOne({nome: request.body.nome})

  if (farmaciaExistir) {
    return response.status(400).json({ error: 'Farmácia já cadastrada' })
  }
  
  try { 
    const novaFarmacia = await farmacia.save()
    response.status(201).json([{
      message: 'Farmácia cadastrada com sucesso!',
      novaFarmacia
    }])
  } catch (error) {
    response.status(400).json({ message: error.message })
  }
}

const getAll = async (request, response) => {
  try {
    const farmacias = await Farmacia.find()
    response.status(200).json(farmacias) 
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

module.exports = {
  create,
  getAll
}