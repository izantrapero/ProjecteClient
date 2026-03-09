const mongoose = require("mongoose")

const personatgeSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    tipus: {
        type: String,
        enum: ["Pluma", "Ligero", "Semimedio", "Medio", "Pesado Medio", "Pesado", "Super Pesado"],
        requiered: true
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
    monedas: {
        type: Number,
        required: true
    },
    miniturbo: {
        type: Number,
        required: true
    },
    maneig: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Personatge", personatgeSchema)