const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const plantaoSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  farmacia: { type: Schema.Types.ObjectId, ref: "farmacia", required: true },
  dataPlantao: {
    dataInicioPlantao: {type: String},
    dataTerminoPlantao: {type: String}
  },
  horarioPlantao: {
    horaInicioPlantao: {type: String},
    horaTerminoPlantao: {type: String}
  },
  criadoEm: {
    type: Date,
    required: true,
    default: Date.now
  }
})

const plantaoCollection = mongoose.model("plantao", plantaoSchema)

module.exports = plantaoCollection