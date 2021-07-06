const mongoose = require('mongoose')

// estrutura do model (atributos da entidade)
const farmaciaSchema = new mongoose.Schema({

  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  numero: {
    type: String
  },
  bairro: {
    type: String,
    required: true
  },
  telefoneDeContato: {
    type: String
  },
  whatsapp: {
    type: String
  },
  // horarioDeFuncionamento: {
  //   type: String,
  //   required: false
  // },
  // servicoDeEntrega: {
  //   type: Boolean,
  //   required: false
  // },
  // horarioDeEntrega: {
  //   type: String,
  //   required: false
  // },
  // plantao: {
  //   type: Boolean,
  //   required: false,
  //   dataDoPlantao: [{
  //     type: Date,
  //     required: false,
  //     default: new Date().toLocaleDateString('pt-BR')
  //   }],
  // },
  // horarioDoPlantao: {
  //   type: String,
  //   required: false
  // },
  criadoEm: {
    type: Date,
    required: true,
    default: Date.now
  }
})
// console.log(farmaciaSchema)
// atribuindo um schema a uma collection
const farmaciaCollection = mongoose.model('farmacia', farmaciaSchema)

module.exports = farmaciaCollection