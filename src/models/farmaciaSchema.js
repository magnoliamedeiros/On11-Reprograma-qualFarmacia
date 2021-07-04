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
  telefone: {
    type: String,
    required: false
  },
  whatsapp: {
    type: String,
    required: false
  },
  servicoDeEntrega: {
    type: Boolean,
    required: false
  },
  plantao: {
    type: Boolean,
    required: false
  },
  filial: {
    type: String,
    required: false
  },
  enderecoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'endereco',
    required: true
  },
  criadoEm: {
    type: Date,
    required: true,
    default: new Date
  }
})

// atribuindo um schema a uma collection
const farmaciaCollection = mongoose.model('farmacia', farmaciaSchema)

module.exports = farmaciaCollection