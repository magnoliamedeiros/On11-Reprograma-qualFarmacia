const mongoose = require("mongoose")

// Estrutura do model (atributos da entidade)
const farmaciaSchema = new mongoose.Schema({

  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    required: true
  },
  nome: {
    type: String,
    trim: true,
    required: true
  },
  endereco: {
    type: String,
    trim: true,
    required: true
  },
  numero: {
    type: String,
    trim: true
  },
  bairro: {
    type: String,
    trim: true,
    required: true
  },
  telefoneDeContato: {
    type: String
  },
  // whatsapp: {
  //   type: String
  // },
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
  //   dataDoPlantao: [{type: Date}],
  // },
  // horarioDoPlantao: {
  //   type: String,
  //   required: false
  // },
  criadoEm: {
    type: Date,
    default: Date.now
  }
})

// Atribuindo um Schema a uma Collection
const farmaciaCollection = mongoose.model("farmacia", farmaciaSchema)

module.exports = farmaciaCollection