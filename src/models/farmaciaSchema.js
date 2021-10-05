const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const farmaciaSchema = new Schema({
  _id: Schema.Types.ObjectId,
  nome: { type: String, lowercase: true, trim: true, required: true },
  telefoneDeContato: {type: String },
  whatsapp: { type: String },
  servicoDeEntrega: {type: String, enum: ['sim', 'não informado'], default: 'não informado'},
  horarioFuncionamento: {
    horaInicial: { type: String },
    horaFinal: { type: String }
  },
  endereco: { type: Schema.Types.ObjectId, required: true, ref: "endereco" },
  numero: { type: String, trim: true },
  localizacao: { type: String },
  plantao: { type: Schema.Types.ObjectId, ref: "plantao" },
  criadoEm: { type: Date, required: true, default: Date.now }
})

const farmaciaCollection = mongoose.model("farmacia", farmaciaSchema)

module.exports = farmaciaCollection