const Vehicle = require("../models/Vehicle")

const getAll = async (req, res) => {
  const vehicles = await Vehicle.find({})
  res.json(vehicles)
}

const create = async (req, res) => {
  const body = req.body

  const vehicle = new Vehicle({
    nom: body.nom,
    tipus: body.tipus,
    velocitat: body.velocitat,
    acceleracio: body.acceleracio,
    pes: body.pes,
    monedas: body.monedas,
    miniturbo: body.miniturbo,
    maneig: body.maneig
  })

  const saved = await vehicle.save()
  res.status(201).json(saved)
}

module.exports = {
  getAll,
  create
}