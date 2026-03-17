import { useEffect, useState } from "react";
import React from "react";
import Button from "./components/Button";
import PersonatgesList from "./components/PersonatgesList";
import VehiclesList from "./components/VehiclesList";

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

      {/* ================= PERSONAJES ================= */}
      <section>
        <h2>Personajes</h2>

        <PersonatgesList
          personatges={personatges}
          selectedPersonatge={selectedPersonatge}
          setSelectedPersonatge={setSelectedPersonatge}
          handleDeletePersonatge={(id) => setConfirmPersonatgeId(id)}
          setPersonatges={setPersonatges}
        />

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

              <Button
                text="Cerrar"
                onClick={() => setShowPersonatgeModal(false)}
              />
            </div>
          </div>
        )}
      </section>

      {/* ================= VEHÍCULOS ================= */}
      <section>
        <h2>Vehículos</h2>

        <VehiclesList
          vehicles={vehicles}
          selectedVehicle={selectedVehicle}
          setSelectedVehicle={setSelectedVehicle}
          handleDeleteVehicle={(id) => setConfirmVehicleId(id)}
          setVehicles={setVehicles}
        />

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

              <Button
                text="Cerrar"
                onClick={() => setShowVehicleModal(false)}
              />
            </div>
          </div>
        )}
      </section>

      {/* ================= CONFIRM DELETE PERSONAJE ================= */}
      {confirmPersonatgeId && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>⚠️ Confirmar eliminación</h3>
            <p>¿Seguro que quieres eliminar este personaje?</p>

            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
              <Button
                text="Sí, eliminar"
                onClick={() => {
                  handleDeletePersonatge(confirmPersonatgeId);
                  setConfirmPersonatgeId(null);
                }}
              />

              <Button
                text="Cancelar"
                onClick={() => setConfirmPersonatgeId(null)}
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= CONFIRM DELETE VEHICLE ================= */}
      {confirmVehicleId && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>⚠️ Confirmar eliminación</h3>
            <p>¿Seguro que quieres eliminar este vehículo?</p>

            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
              <Button
                text="Sí, eliminar"
                onClick={() => {
                  handleDeleteVehicle(confirmVehicleId);
                  setConfirmVehicleId(null);
                }}
              />

              <Button
                text="Cancelar"
                onClick={() => setConfirmVehicleId(null)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;