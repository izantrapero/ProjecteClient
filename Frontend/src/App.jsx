// src/App.jsx
import { useEffect, useState } from "react";
import {
  getAllPersonatges,
  createPersonatge,
  deletePersonatge,
} from "./services/personatgesService";
import {
  getAllVehicles,
  createVehicle,
  deleteVehicle,
} from "./services/vehiclesService";
import { PersonatgeForm } from "./components/PersonatgeForm";
import { VehicleForm } from "./components/VehiclesForm";

function App() {
  const [personatges, setPersonatges] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [selectedPersonatge, setSelectedPersonatge] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const [newPersonatge, setNewPersonatge] = useState({
    _id: "",
    nom: "",
    tipus: "Pluma",
    velocitat: 0,
    acceleracio: 0,
    pes: 0,
    monedas: 0,
    miniturbo: 0,
    maneig: 0,
  });

  const [newVehicle, setNewVehicle] = useState({
    _id: "",
    nom: "",
    tipus: "Kart",
    velocitat: 0,
    acceleracio: 0,
    pes: 0,
    monedas: 0,
    miniturbo: 0,
    maneig: 0,
  });

  useEffect(() => {
    fetchPersonatges();
    fetchVehicles();
  }, []);

  const fetchPersonatges = async () => {
    try {
      const data = await getAllPersonatges();
      setPersonatges(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchVehicles = async () => {
    try {
      const data = await getAllVehicles();
      setVehicles(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePersonatgeChange = (field, value) => {
    setNewPersonatge((prev) => ({ ...prev, [field]: value }));
  };

  const handleVehicleChange = (field, value) => {
    setNewVehicle((prev) => ({ ...prev, [field]: value }));
  };

  const handlePersonatgeSubmit = async (e) => {
    e.preventDefault();
    const created = await createPersonatge(newPersonatge);
    setPersonatges([...personatges, created]);
    setNewPersonatge({
      _id: "",
      nom: "",
      tipus: "Pluma",
      velocitat: 0,
      acceleracio: 0,
      pes: 0,
      monedas: 0,
      miniturbo: 0,
      maneig: 0,
    });
  };

  const handleVehicleSubmit = async (e) => {
    e.preventDefault();
    const created = await createVehicle(newVehicle);
    setVehicles([...vehicles, created]);
    setNewVehicle({
      _id: "",
      nom: "",
      tipus: "Kart",
      velocitat: 0,
      acceleracio: 0,
      pes: 0,
      monedas: 0,
      miniturbo: 0,
      maneig: 0,
    });
  };

  const handleDeletePersonatge = async (id) => {
    await deletePersonatge(id);
    fetchPersonatges();
  };

  const handleDeleteVehicle = async (id) => {
    await deleteVehicle(id);
    fetchVehicles();
  };

  return (
    <div>
      <h1>Mario Kart Builder</h1>

      <section>
        <h2>Personajes</h2>
        <ul>
          {personatges.map((p) => (
            <li key={p._id}>
              {p.nom} - {p.tipus} - Velocidad: {p.velocitat}
              <button
                onClick={() =>
                  setSelectedPersonatge(
                    selectedPersonatge?._id === p._id ? null : p,
                  )
                }
              >
                Detalles
              </button>
              <button onClick={() => handleDeletePersonatge(p._id)}>
                Eliminar
              </button>
              {selectedPersonatge?._id === p._id && (
                <div
                  style={{
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    padding: "5px",
                  }}
                >
                  <p>Nombre: {selectedPersonatge.nom}</p>
                  <p>Tipo: {selectedPersonatge.tipus}</p>
                  <p>Velocidad: {selectedPersonatge.velocitat}</p>
                  <p>Aceleración: {selectedPersonatge.acceleracio}</p>
                  <p>Peso: {selectedPersonatge.pes}</p>
                  <p>Manejo: {selectedPersonatge.maneig}</p>
                  <p>Monedas: {selectedPersonatge.monedas}</p>
                  <p>Miniturbo: {selectedPersonatge.miniturbo}</p>
                </div>
              )}
            </li>
          ))}
        </ul>

        <h3>Crear Personaje</h3>
        <PersonatgeForm
          personatge={newPersonatge}
          onChange={handlePersonatgeChange}
          onSubmit={handlePersonatgeSubmit}
        />
      </section>

      <section>
        <h2>Vehículos</h2>
        <ul>
          {vehicles.map((v) => (
            <li key={v._id}>
              {v.nom} - {v.tipus} - Velocidad: {v.velocitat}
              <button
                onClick={() =>
                  setSelectedVehicle(selectedVehicle?._id === v._id ? null : v)
                }
              >
                Detalles
              </button>
              <button onClick={() => handleDeleteVehicle(v._id)}>
                Eliminar
              </button>
              {selectedVehicle?._id === v._id && (
                <div
                  style={{
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    padding: "5px",
                  }}
                >
                  <p>Nombre: {selectedVehicle.nom}</p>
                  <p>Tipo: {selectedVehicle.tipus}</p>
                  <p>Velocidad: {selectedVehicle.velocitat}</p>
                  <p>Aceleración: {selectedVehicle.acceleracio}</p>
                  <p>Peso: {selectedVehicle.pes}</p>
                  <p>Manejo: {selectedVehicle.maneig}</p>
                  <p>Monedas: {selectedVehicle.monedas}</p>
                  <p>Miniturbo: {selectedVehicle.miniturbo}</p>
                </div>
              )}
            </li>
          ))}
        </ul>

        <h3>Crear Vehículo</h3>
        <VehicleForm
          vehicle={newVehicle}
          onChange={handleVehicleChange}
          onSubmit={handleVehicleSubmit}
        />
      </section>
    </div>
  );
}

export default App;
