const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  tipus: {
    type: String,
    enum: ["kart", "moto"],
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
  especial: {
    type: Boolean,
    default: false
  },
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Vehicle", vehicleSchema)