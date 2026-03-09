const express = require("express");
const router = express.Router();
const { getAll, getOne, create, edit, remove } = require("./vehicles");

// Endpoints CRUD
router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", edit);
router.delete("/:id", remove);

module.exports = router;