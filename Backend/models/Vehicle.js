const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    tipus: {
        type: String,
        enum: ["Moto", "Kart", "ATV"],
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
    minitubo: {
        type: Number,
        required: true
    },
    maneig: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Vehicle", vehicleSchema)