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
    criadoEm: request.body.criadoEm
    // horarioDeFuncionamento: request.body.horarioDeFuncionamento,
    // servicoDeEntrega: request.body.servicoDeEntrega,
    // horarioDeEntrega: request.body.horarioDeEntrega,
    // plantao: request.body.plantao,
    // horarioDoPlantao: request.body.horarioDoPlantao,
  })

  const farmaciaExistir = await Farmacia.findOne({nome: request.body.nome})

  if (farmaciaExistir) {
    return response.status(400).json({error: 'Farmácia já cadastrada'})
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