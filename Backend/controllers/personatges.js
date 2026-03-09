const Personatge = require("../models/Personatge")

const getAll = async (req, res) => {
  const personatges = await Personatge.find({})
  res.json(personatges)
}

const create = async (req, res) => {
  const body = req.body

  const personatge = new Personatge({
    nom: body.nom,
    tipus: body.tipus,
    velocitat: body.velocitat,
    acceleracio: body.acceleracio,
    pes: body.pes,
    monedas: body.monedas,
    miniturbo: body.miniturbo,
    maneig: body.maneig
  })

  const saved = await personatge.save()
  res.status(201).json(saved)
}

module.exports = {
  getAll,
  create
}