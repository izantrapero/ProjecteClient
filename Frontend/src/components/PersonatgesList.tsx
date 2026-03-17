import React from "react";
import type { Personatge } from "../types/types";
import Button from "../components/Button";
import { updatePersonatge } from "../services/personatgesService";
import { PersonatgeForm } from "./PersonatgeForm";

interface Props {
  personatges: Personatge[];
  selectedPersonatge: Personatge | null;
  setSelectedPersonatge: (p: Personatge | null) => void;
  handleDeletePersonatge: (id: string) => void;
  setPersonatges: React.Dispatch<React.SetStateAction<Personatge[]>>; 
}

const PersonatgesList = ({
  personatges,
  selectedPersonatge,
  setSelectedPersonatge,
  handleDeletePersonatge,
  setPersonatges,
}: Props) => {
  const [editingPersonatge, setEditingPersonatge] = React.useState<Personatge | null>(null);
  const [showEditModal, setShowEditModal] = React.useState(false);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!editingPersonatge) return;

    const updated = await updatePersonatge(
      editingPersonatge._id,
      editingPersonatge
    );

    // actualizar lista en UI
    setPersonatges((prev) =>
      prev.map((p) => (p._id === updated._id ? updated : p))
    );

    setEditingPersonatge(null);
    setShowEditModal(false);
  };

  return (
    <>
      <ul>
        {personatges.map((p) => (
          <li key={p._id}>
            {p.nom} - {p.tipus} - Velocidad: {p.velocitat}

            <Button
              text={selectedPersonatge?._id === p._id ? "Ocultar" : "Detalles"}
              onClick={() =>
                setSelectedPersonatge(
                  selectedPersonatge?._id === p._id ? null : p
                )
              }
            />

            <Button
              text="Editar"
              onClick={() => {
                setEditingPersonatge(p);
                setShowEditModal(true);
              }}
            />

            <Button
              text="Eliminar"
              onClick={() => handleDeletePersonatge(p._id)}
            />

            {selectedPersonatge?._id === p._id && (
              <div
                style={{
                  marginTop: "5px",
                  border: "1px solid #ccc",
                  padding: "5px",
                }}
              >
                <p>Nombre: {p.nom}</p>
                <p>Tipo: {p.tipus}</p>
                <p>Velocidad: {p.velocitat}</p>
                <p>Aceleración: {p.acceleracio}</p>
                <p>Peso: {p.pes}</p>
                <p>Manejo: {p.maneig}</p>
                <p>Monedas: {p.monedas}</p>
                <p>Miniturbo: {p.miniturbo}</p>
              </div>
            )}
          </li>
        ))}
      </ul>

      {showEditModal && editingPersonatge && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Editar Personaje</h3>

            <PersonatgeForm
              personatge={editingPersonatge}
              onChange={(field, value) =>
                setEditingPersonatge((prev) =>
                  prev ? { ...prev, [field]: value } : prev
                )
              }
              onSubmit={handleUpdate}
            />

            <Button
              text="Cerrar"
              onClick={() => {
                setShowEditModal(false);
                setEditingPersonatge(null);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PersonatgesList;