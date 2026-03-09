const mongoose = require("mongoose")

const personatgeSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  velocitat: {
    type: Number,
    required: true
  },
  acceleracio: {
    type: Number,
    required: true
  },
  pes: {
    type: Number,
    required: true
  },
  maneig: {
    type: Number,
    required: true
  },
  desbloquejable: {
    type: Boolean,
    default: false
  },
  habilitats: [
    {
      type: String
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Personatge", personatgeSchema)