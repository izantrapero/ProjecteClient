// src/components/PersonatgeForm.tsx
import React from "react";
import type { Personatge } from "../types/types";

interface Props {
  personatge: Omit<Personatge, "_id">;
  onChange: (field: keyof Omit<Personatge, "_id">, value: any) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const PersonatgeForm: React.FC<Props> = ({ personatge, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={personatge.nom}
        onChange={(e) => onChange("nom", e.target.value)}
      />
      <select
        value={personatge.tipus}
        onChange={(e) => onChange("tipus", e.target.value)}
      >
        <option value="Pluma">Pluma</option>
        <option value="Ligero">Ligero</option>
        <option value="Semimedio">Semimedio</option>
        <option value="Medio">Medio</option>
        <option value="Pesado Medio">Pesado Medio</option>
        <option value="Pesado">Pesado</option>
        <option value="Super Pesado">Super Pesado</option>
      </select>
      <input
        type="number"
        placeholder="Velocidad"
        value={personatge.velocitat}
        onChange={(e) => onChange("velocitat", Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Aceleración"
        value={personatge.acceleracio}
        onChange={(e) => onChange("acceleracio", Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Peso"
        value={personatge.pes}
        onChange={(e) => onChange("pes", Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Monedas"
        value={personatge.monedas}
        onChange={(e) => onChange("monedas", Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Miniturbo"
        value={personatge.miniturbo}
        onChange={(e) => onChange("miniturbo", Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Manejo"
        value={personatge.maneig}
        onChange={(e) => onChange("maneig", Number(e.target.value))}
      />
      <button type="submit">Crear Personaje</button>
    </form>
  );
};