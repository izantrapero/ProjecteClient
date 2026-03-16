// src/components/VehicleForm.tsx
import React from "react";
import type { Vehicle } from "../types/types";

interface Props {
  vehicle: Omit<Vehicle, "_id">;
  onChange: (field: keyof Omit<Vehicle, "_id">, value: any) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const VehicleForm: React.FC<Props> = ({ vehicle, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={vehicle.nom}
        onChange={(e) => onChange("nom", e.target.value)}
      />
      <select
        value={vehicle.tipus}
        onChange={(e) => onChange("tipus", e.target.value)}
      >
        <option value="Moto">Moto</option>
        <option value="Kart">Kart</option>
        <option value="ATV">ATV</option>
      </select>
      <input
        type="number"
        placeholder="Velocidad"
        value={vehicle.velocitat}
        onChange={(e) => onChange("velocitat", Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Aceleración"
        value={vehicle.acceleracio}
        onChange={(e) => onChange("acceleracio", Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Peso"
        value={vehicle.pes}
        onChange={(e) => onChange("pes", Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Monedas"
        value={vehicle.monedas}
        onChange={(e) => onChange("monedas", Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Miniturbo"
        value={vehicle.miniturbo}
        onChange={(e) => onChange("miniturbo", Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Manejo"
        value={vehicle.maneig}
        onChange={(e) => onChange("maneig", Number(e.target.value))}
      />
      <button type="submit">Crear Vehículo</button>
    </form>
  );
};