// controllers/personatges.js
const Personatge = require("../models/Personatge");

// Obtener todos los personajes
const getAll = async (req, res, next) => {
  try {
    const personatges = await Personatge.find({});
    res.json(personatges);
  } catch (error) {
    next(error);
  }
};

// Obtener un personaje por id
const getOne = async (req, res, next) => {
  try {
    const personatge = await Personatge.findById(req.params.id);
    if (!personatge) return res.status(404).json({ error: "Personaje no encontrado" });
    res.json(personatge);
  } catch (error) {
    next(error);
  }
};

// Crear un personaje
const create = async (req, res, next) => {
  try {
    const body = req.body;

    const personatge = new Personatge({
      nom: body.nom,
      tipus: body.tipus,
      velocitat: body.velocitat,
      acceleracio: body.acceleracio,
      pes: body.pes,
      monedas: body.monedas,
      miniturbo: body.miniturbo,
      maneig: body.maneig
    });

    const saved = await personatge.save();
    res.status(201).json(saved);
  } catch (error) {
    next(error);
  }
};

// Editar un personaje
const edit = async (req, res, next) => {
  try {
    const updated = await Personatge.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: "Personaje no encontrado" });
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

// Borrar un personaje
const remove = async (req, res, next) => {
  try {
    const deleted = await Personatge.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Personaje no encontrado" });
    res.json({ message: "Personaje eliminado" });
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