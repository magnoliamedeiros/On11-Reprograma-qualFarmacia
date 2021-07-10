/**
 * _id: autogerado e obrigatório
 * nome: texto e obrigatório
 * endereco: referencia do endereco cadastrado previamente e obrigatório
 * telefoneDeContato: texto e opcional
 * whatsapp: texto e opcional
 * criadoEm: data gerada automaticamente e obrigatório
 */

const mongoose = require("mongoose")

// Estrutura do model (atributos da entidade)
const farmaciaSchema = new mongoose.Schema({

  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    lowercase: true,
    trim: true,
    required: true
  },
  telefoneDeContato: {
    type: String
  },
  whatsapp: {
    type: String
  },
  endereco: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "endereco"
  },
  numero: {
    type: String,
    trim: true
  },
  // horarioDeFuncionamento: {
  //   type: String
  // },
  // servicoDeEntrega: {
  //   type: Boolean
  // },
  // horarioDeEntrega: {
  //   type: String
  // },
  // plantao: {
  //   type: Boolean,
  //   dataDoPlantao: [{type: Date}],
  // },
  // horarioDoPlantao: {
  //   type: String
  // },
  criadoEm: {
    type: Date,
    required: true,
    default: Date.now
  }
})

// Atribuindo um Schema a uma Collection
const farmaciaCollection = mongoose.model("farmacia", farmaciaSchema)

module.exports = farmaciaCollection