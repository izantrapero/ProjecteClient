const router = require("express").Router();
const vehicles = require("../controllers/vehicles");

router.get("/", vehicles.getAll);
router.get("/:id", vehicles.getOne);
router.post("/", vehicles.create);
router.put("/:id", vehicles.edit);
router.delete("/:id", vehicles.remove);

module.exports = router;