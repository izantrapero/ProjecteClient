const router = require("express").Router();
const personatges = require("../controllers/personatges");

router.get("/", personatges.getAll);
router.get("/:id", personatges.getOne);
router.post("/", personatges.create);
router.put("/:id", personatges.edit);
router.delete("/:id", personatges.remove);

module.exports = router;