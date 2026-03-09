// index.js
const express = require("express");
const connectDB = require("./mongo");

// Routers
const personatgesRouter = require("./controllers/personatges");
const vehiclesRouter = require("./controllers/vehicles");

// Middlewares
const notFound = require('./middlewares/notFound');
const handleErrors = require('./middlewares/handleErrors');

// Models
const Personatge = require("./models/Personatge");
const Vehicle = require("./models/Vehicle");

const app = express();

// Middleware para leer JSON
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Rutas principales
app.use("/api/personatges", personatgesRouter);
app.use("/api/vehicles", vehiclesRouter);

// Ruta especial de combo
app.get("/api/combo/:personatgeId/:vehicleId", async (req, res) => {
    const base = 0.6;

    try {
        const p = await Personatge.findById(req.params.personatgeId);
        const v = await Vehicle.findById(req.params.vehicleId);

        if (!p || !v) {
            return res.status(404).json({ error: "No encontrado" });
        }

        // Combinación de stats
        const stats = {
            velocitat: p.velocitat + v.velocitat + base,
            acceleracio: p.acceleracio + v.acceleracio + base,
            pes: p.pes + v.pes + base,
            maneig: p.maneig + v.maneig + base,
            monedas: p.monedas + v.monedas + base,
            minitubo: p.minitubo + v.minitubo + base
        };

        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: "Error del servidor" });
    }
});

// Middlewares finales
app.use(notFound);
app.use(handleErrors);

// Arrancar servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));