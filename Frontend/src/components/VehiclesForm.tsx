import React from "react";
import type { Vehicle } from "../types/types";
import Button from "./Button";

interface Props {
  vehicle: Omit<Vehicle, "_id">;
  onChange: (field: keyof Omit<Vehicle, "_id">, value: any) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const VehicleForm: React.FC<Props> = ({ vehicle, onChange, onSubmit }) => {

  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!vehicle.nom.trim()) {
      newErrors.nom = "El nombre es obligatorio";
    }

    if (vehicle.velocitat < 0) {
      newErrors.velocitat = "La velocidad no puede ser negativa";
    }

    if (vehicle.acceleracio < 0) {
      newErrors.acceleracio = "La aceleración no puede ser negativa";
    }

    if (vehicle.pes < 0) {
      newErrors.pes = "El peso no puede ser negativo";
    }

    if (vehicle.monedas < 0) {
      newErrors.monedas = "Las monedas no pueden ser negativas";
    }

    if (vehicle.miniturbo < 0) {
      newErrors.miniturbo = "El miniturbo no puede ser negativo";
    }

    if (vehicle.maneig < 0) {
      newErrors.maneig = "El manejo no puede ser negativo";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (!validate()) return;

        onSubmit(e);
      }}
    >

      Nombre:
      <input
        type="text"
        placeholder="Nombre"
        value={vehicle.nom}
        onChange={(e) => onChange("nom", e.target.value)}
      />
      <br />

      {errors.nom && <p className="error">{errors.nom}</p>}

      Tipo:
      <select
        value={vehicle.tipus}
        onChange={(e) => onChange("tipus", e.target.value)}
      >
        <option value="Moto">Moto</option>
        <option value="Kart">Kart</option>
        <option value="ATV">ATV</option>
      </select>

      Velocidad:
      <input
        type="number"
        step="0.1"
        placeholder="Velocidad"
        value={vehicle.velocitat ?? ""}
        onChange={(e) => onChange("velocitat", Number(e.target.value))}
      />
      <br />

      {errors.velocitat && <p className="error">{errors.velocitat}</p>}

      Aceleración:
      <input
        type="number"
        step="0.1"
        placeholder="Aceleración"
        value={vehicle.acceleracio ?? ""}
        onChange={(e) => onChange("acceleracio", Number(e.target.value))}
      />
      <br />

      {errors.acceleracio && <p className="error">{errors.acceleracio}</p>}

      Peso:
      <input
        type="number"
        step="0.1"
        placeholder="Peso"
        value={vehicle.pes ?? ""}
        onChange={(e) => onChange("pes", Number(e.target.value))}
      />
      <br />

      {errors.pes && <p className="error">{errors.pes}</p>}

      Monedas:
      <input
        type="number"
        step="0.1"
        placeholder="Monedas"
        value={vehicle.monedas ?? ""}
        onChange={(e) => onChange("monedas", Number(e.target.value))}
      />
      <br />

      {errors.monedas && <p className="error">{errors.monedas}</p>}

      Miniturbo:
      <input
        type="number"
        step="0.1"
        placeholder="Miniturbo"
        value={vehicle.miniturbo ??  ""}
        onChange={(e) => onChange("miniturbo", Number(e.target.value))}
      />
      <br />

      {errors.miniturbo && <p className="error">{errors.miniturbo}</p>}

      Manejo:
      <input
        type="number"
        step="0.1"
        placeholder="Manejo"
        value={vehicle.maneig ??  ""}
        onChange={(e) => onChange("maneig", Number(e.target.value))}
      />
      <br />

      {errors.maneig && <p className="error">{errors.maneig}</p>}

      <Button text="Crear vehiculo" type="submit" />

    </form>
  );
};