const mongoose = require('mongoose')
const Schema = mongoose.Schema

// estrutura do model (atributos da entidade)
const farmaciaSchema = new Schema({

  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    required: true
  },
  nome: {
    type: String,
    auto: false,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  numero: {
    type: String,
    required: false
  },
  bairro: {
    type: String,
    required: true
  },
  telefoneDeContato: {
    type: String,
    required: false
  },
  whatsapp: {
    type: String,
    required: false
  },
  horarioDeFuncionamento: {
    type: String,
    required: true
  },
  servicoDeEntrega: {
    type: Boolean,
    required: true,
    horarioDeEntrega: {
      type: String,
      required: true
    }
  },
  plantao: {
    type: Boolean,
    required: false,
    dataDoPlantao: [{
      type: Date,
      required: true,
      default: new Date().toLocaleDateString('pt-BR')
    }],
    horarioDoPlantao: {
      type: String,
      required: true
    }
  },
  criadoEm: {
    timestamps: true,
    required: true
  }
})

// atribuindo um schema a uma collection
const farmaciaCollection = mongoose.model('farmacia', farmaciaSchema)

module.exports = farmaciaCollection