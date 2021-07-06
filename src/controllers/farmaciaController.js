const mongoose = require('mongoose')
const Farmacia = require('../models/farmaciaSchema')

const create =  async (request, response) => {

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
    return response.status(400).json({error: 'Farmácia já cadastrada'})
  }

  if (nome == null || endereco == null || bairro == null ){
    return response.status(400).json({error: 'Por favor, preencha todos os campos!'})
  }
  
  try { 
      const novaFarmacia = await farmacia.save()
      console.log(novaFarmacia)
      response.status(201).json(novaFarmacia)
  } catch (err) {
    response.status(400).json({ message: err.message })
  }
}

module.exports = {
  create
}