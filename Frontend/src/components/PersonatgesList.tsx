// src/components/PersonatgesList.tsx
import React, { useEffect, useState } from "react";
import { Personatge } from "../types/types";
import { getAllPersonatges, deletePersonatge } from "../services/personatgesService";

const PersonatgesList: React.FC = () => {
  const [personatges, setPersonatges] = useState<Personatge[]>([]);

  const fetchPersonatges = async () => {
    const data = await getAllPersonatges();
    setPersonatges(data);
  };

  const handleDelete = async (id: string) => {
    await deletePersonatge(id);
    fetchPersonatges(); // refrescar la lista
  };

  useEffect(() => {
    fetchPersonatges();
  }, []);

  return (
    <div>
      <h2>Personajes</h2>
      <ul>
        {personatges.map((p) => (
          <li key={p._id}>
            {p.nom} - {p.tipus} - Velocidad: {p.velocitat}
            <button onClick={() => handleDelete(p._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonatgesList;