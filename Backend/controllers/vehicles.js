// controllers/vehicles.js
const Vehicle = require("../models/Vehicle");

// Obtener todos los vehículos
const getAll = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find({});
    res.json(vehicles);
  } catch (error) {
    next(error);
  }
};

// Obtener un vehículo por id
const getOne = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ error: "Vehículo no encontrado" });
    res.json(vehicle);
  } catch (error) {
    next(error);
  }
};

// Crear un vehículo
const create = async (req, res, next) => {
  try {
    const body = req.body;

    const vehicle = new Vehicle({
      nom: body.nom,
      tipus: body.tipus,
      velocitat: body.velocitat,
      acceleracio: body.acceleracio,
      pes: body.pes,
      monedas: body.monedas,
      miniturbo: body.miniturbo,
      maneig: body.maneig
    });

    const saved = await vehicle.save();
    res.status(201).json(saved);
  } catch (error) {
    next(error);
  }
};

// Editar un vehículo
const edit = async (req, res, next) => {
  try {
    const updated = await Vehicle.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: "Vehículo no encontrado" });
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

// Borrar un vehículo
const remove = async (req, res, next) => {
  try {
    const deleted = await Vehicle.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Vehículo no encontrado" });
    res.json({ message: "Vehículo eliminado" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  edit,
  remove
};