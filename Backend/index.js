const personatgesRouter = require("./controllers/personatges")
const vehiclesRouter = require("./controllers/vehicles")

app.get("/api/personatges", personatgesRouter.getAll)
app.post("/api/personatges", personatgesRouter.create)

app.get("/api/vehicles", vehiclesRouter.getAll)
app.post("/api/vehicles", vehiclesRouter.create)

const Personatge = require("./models/Personatge")
const Vehicle = require("./models/Vehicle")

app.get("/api/combo/:personatgeId/:vehicleId", async (req, res) => {

  const base = 0.6

  const p = await Personatge.findById(req.params.personatgeId)
  const v = await Vehicle.findById(req.params.vehicleId)

  if (!p || !v) {
    return res.status(404).json({ error: "No encontrado" })
  }

  const stats = {
    velocitat: p.velocitat + v.velocitat + base,
    acceleracio: p.acceleracio + v.acceleracio + base,
    pes: p.pes + v.pes + base,
    maneig: p.maneig + v.maneig + base
  }

  res.json(stats)
})