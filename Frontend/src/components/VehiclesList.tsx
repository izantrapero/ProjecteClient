import React from "react";
import type { Vehicle } from "../types/types";
import Button from "./Button";
import { VehicleForm } from "./VehiclesForm";
import { updateVehicle } from "../services/vehiclesService";

interface Props {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
  setSelectedVehicle: (v: Vehicle | null) => void;
  handleDeleteVehicle: (id: string) => void;
  setVehicles: React.Dispatch<React.SetStateAction<Vehicle[]>>; // 🔥 importante
}

const VehiclesList = ({
  vehicles,
  selectedVehicle,
  setSelectedVehicle,
  handleDeleteVehicle,
  setVehicles,
}: Props) => {
  const [editingVehicle, setEditingVehicle] = React.useState<Vehicle | null>(null);
  const [showEditModal, setShowEditModal] = React.useState(false);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!editingVehicle) return;

    const updated = await updateVehicle(
      editingVehicle._id,
      editingVehicle
    );

    // actualizar UI
    setVehicles((prev) =>
      prev.map((v) => (v._id === updated._id ? updated : v))
    );

    setEditingVehicle(null);
    setShowEditModal(false);
  };

  return (
    <>
      <ul>
        {vehicles.map((v) => (
          <li key={v._id}>
            {v.nom} - {v.tipus} - Velocidad: {v.velocitat}

            <Button
              text={selectedVehicle?._id === v._id ? "Ocultar" : "Detalles"}
              onClick={() =>
                setSelectedVehicle(
                  selectedVehicle?._id === v._id ? null : v
                )
              }
            />

            <Button
              text="Editar"
              onClick={() => {
                setEditingVehicle(v);
                setShowEditModal(true);
              }}
            />

            <Button
              text="Eliminar"
              onClick={() => handleDeleteVehicle(v._id)}
            />

            {selectedVehicle?._id === v._id && (
              <div
                style={{
                  marginTop: "5px",
                  border: "1px solid #ccc",
                  padding: "5px",
                }}
              >
                <p>Nombre: {v.nom}</p>
                <p>Tipo: {v.tipus}</p>
                <p>Velocidad: {v.velocitat}</p>
                <p>Aceleración: {v.acceleracio}</p>
                <p>Peso: {v.pes}</p>
                <p>Manejo: {v.maneig}</p>
                <p>Monedas: {v.monedas}</p>
                <p>Miniturbo: {v.miniturbo}</p>
              </div>
            )}
          </li>
        ))}
      </ul>

      
      {showEditModal && editingVehicle && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Editar Vehículo</h3>

            <VehicleForm
              vehicle={editingVehicle}
              onChange={(field, value) =>
                setEditingVehicle((prev) =>
                  prev ? { ...prev, [field]: value } : prev
                )
              }
              onSubmit={handleUpdate}
            />

            <Button
              text="Cerrar"
              onClick={() => {
                setShowEditModal(false);
                setEditingVehicle(null);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VehiclesList;