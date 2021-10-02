const mongoose = require("mongoose")

const plantaoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  data: {
    type: String,
    required: true // 10/10/2021 == 10/10/2021
  },
  farmacia: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "farmacia"
  },
  criadoEm: {
    type: Date,
    required: true,
    default: Date.now
  }
})

const plantaoCollection = mongoose.model("plantao", plantaoSchema)

module.exports = plantaoCollection