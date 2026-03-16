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



import type { Personatge, Vehicle } from "./types/types";
import React from "react";
import Button from "./components/Button";

function App() {
  const [personatges, setPersonatges] = useState<Personatge[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const [selectedPersonatge, setSelectedPersonatge] = useState<Personatge | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const [showPersonatgeModal, setShowPersonatgeModal] = useState(false);
  const [showVehicleModal, setShowVehicleModal] = useState(false);

  const [confirmPersonatgeId, setConfirmPersonatgeId] = useState<string | null>(null);
  const [confirmVehicleId, setConfirmVehicleId] = useState<string | null>(null);



  const [newPersonatge, setNewPersonatge] = useState<Omit<Personatge, "_id">>({
    nom: "",
    tipus: "Pluma",
    velocitat: 0,
    acceleracio: 0,
    pes: 0,
    monedas: 0,
    miniturbo: 0,
    maneig: 0,
  });

  const [newVehicle, setNewVehicle] = useState<Omit<Vehicle, "_id">>({
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

  const handlePersonatgeChange = (
    field: keyof Omit<Personatge, "_id">,
    value: string | number
  ) => {
    setNewPersonatge((prev) => ({ ...prev, [field]: value }));
  };

  const handleVehicleChange = (
    field: keyof Omit<Vehicle, "_id">,
    value: string | number
  ) => {
    setNewVehicle((prev) => ({ ...prev, [field]: value }));
  };

  const handlePersonatgeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const created = await createPersonatge(newPersonatge);
    setPersonatges([...personatges, created]);
    setNewPersonatge({
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

  const handleVehicleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const created = await createVehicle(newVehicle);
    setVehicles([...vehicles, created]);
    setNewVehicle({
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

  const handleDeletePersonatge = async (id: string) => {
    await deletePersonatge(id);
    fetchPersonatges();
  };

  const handleDeleteVehicle = async (id: string) => {
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
              <Button
                text="Detalles"
                onClick={() =>
                  setSelectedPersonatge(
                    selectedPersonatge?._id === p._id ? null : p,
                  )
                }
              />
              <Button
                text="Eliminar"
                onClick={() => setConfirmPersonatgeId(p._id)}
              />
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

        <Button
          text="Crear Personaje"
          onClick={() => setShowPersonatgeModal(true)}
        />
        {showPersonatgeModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Crear Personaje</h3>

              <PersonatgeForm
                personatge={newPersonatge}
                onChange={handlePersonatgeChange}
                onSubmit={(e) => {
                  handlePersonatgeSubmit(e);
                  setShowPersonatgeModal(false);
                }}
              />

              <button onClick={() => setShowPersonatgeModal(false)}>
                Cerrar
              </button>
            </div>
          </div>
        )}
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
              <button onClick={() => setConfirmVehicleId(v._id)}>
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

        <Button
          text="Crear vehiculo"
          onClick={() => setShowVehicleModal(true)}
        />
        {showVehicleModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Crear Vehículo</h3>

              <VehicleForm
                vehicle={newVehicle}
                onChange={handleVehicleChange}
                onSubmit={(e) => {
                  handleVehicleSubmit(e);
                  setShowVehicleModal(false);
                }}
              />

              <button onClick={() => setShowVehicleModal(false)}>
                Cerrar
              </button>
            </div>
          </div>
        )}
      </section>

      {confirmPersonatgeId && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>⚠️ Confirmar eliminación</h3>
            <p>¿Seguro que quieres eliminar este personaje?</p>

            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
              <button
                onClick={() => {
                  handleDeletePersonatge(confirmPersonatgeId);
                  setConfirmPersonatgeId(null);
                }}
              >
                Sí, eliminar
              </button>

              <button onClick={() => setConfirmPersonatgeId(null)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmVehicleId && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>⚠️ Confirmar eliminación</h3>
            <p>¿Seguro que quieres eliminar este vehículo?</p>

            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
              <button
                onClick={() => {
                  handleDeleteVehicle(confirmVehicleId);
                  setConfirmVehicleId(null);
                }}
              >
                Sí, eliminar
              </button>

              <Button
                text="Cerrar"
                onClick={() => setShowPersonatgeModal(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
