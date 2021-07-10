const mongoose = require("mongoose")

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
  criadoEm: {
    type: Date,
    required: true,
    default: Date.now
  }
})

const farmaciaCollection = mongoose.model("farmacia", farmaciaSchema)

module.exports = farmaciaCollection