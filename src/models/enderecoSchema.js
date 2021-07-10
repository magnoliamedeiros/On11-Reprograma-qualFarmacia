const mongoose = require("mongoose")

const enderecoSchema = new mongoose.Schema({
  
  _id: mongoose.Schema.Types.ObjectId,
  logradouro: {
    type: String,
    lowercase: true,
    trim: true,
    required: true
  },
  tipoDeLogradouro: {
    type: String,
    lowercase: true,
    trim: true,
    required: true
  },
  bairro: {
    type: String,
    lowercase: true,
    trim: true,
    required: true
  },
  criadoEm: {
    type: Date,
    required: true,
    default: Date.now
  }
})

// Atribuindo um Schema a uma Collection
const enderecoCollection = mongoose.model("endereco", enderecoSchema)

module.exports = enderecoCollection