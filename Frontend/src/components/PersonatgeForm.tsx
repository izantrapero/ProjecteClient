
import React from "react";
import type { Personatge } from "../types/types";
import Button from "../components/Button";

interface Props {
  personatge: Omit<Personatge, "_id">;
  onChange: (field: keyof Omit<Personatge, "_id">, value: any) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}




export const PersonatgeForm: React.FC<Props> = ({ personatge, onChange, onSubmit }) => {

  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!personatge.nom.trim()) {
      newErrors.nom = "El nombre es obligatorio";
    }

    if (personatge.velocitat < 0) {
      newErrors.velocitat = "La velocidad no puede ser negativa";
    }

    if (personatge.acceleracio < 0) {
      newErrors.acceleracio = "La aceleración no puede ser negativa";
    }

    if (personatge.pes < 0) {
      newErrors.pes = "El peso no puede ser negativo";
    }

    if (personatge.monedas < 0) {
      newErrors.monedas = "Las monedas no pueden ser negativas";
    }

    if (personatge.miniturbo < 0) {
      newErrors.miniturbo = "El minuturbo no pueden ser negativas";
    }

    if (personatge.maneig < 0) {
      newErrors.maneig = "El maneig no pueden ser negativas";
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
        value={personatge.nom}
        onChange={(e) => onChange("nom", e.target.value)}
      /> <br />

      {errors.nom && <p className="error">{errors.nom}</p>}

      Tipus:
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

      {errors.tipus && <p className="error">{errors.tipus}</p>}

      Velocidad:
      <input
        type="number"
        step="0.1"
        placeholder="Velocidad"
        value={personatge.velocitat ?? ""}
        onChange={(e) => onChange("velocitat", Number(e.target.value))}
      /> <br />

      {errors.velocitat && <p className="error">{errors.velocidad}</p>}

      Aceleracion:
      <input
        type="number"
        step="0.1"
        placeholder="Aceleración"
        value={personatge.acceleracio ?? "" }
        onChange={(e) => onChange("acceleracio", Number(e.target.value))}
      /> <br />

      {errors.acceleracio && <p className="error">{errors.aceleracion}</p>}

      Peso:
      <input
        type="number"
        step="0.1"
        placeholder="Peso"
        value={personatge.pes ?? ""}
        onChange={(e) => onChange("pes", Number(e.target.value))}
      /> <br />

      {errors.pes && <p className="error">{errors.peso}</p>}

      Manejo:
      <input
        type="number"
        step="0.1"
        placeholder="Manejo"
        value={personatge.maneig ?? ""}
        onChange={(e) => onChange("maneig", Number(e.target.value))}
      /> <br />

      {errors.maneig && <p className="error">{errors.maneig}</p>}

      Monedas:
      <input
        type="number"
        step="0.1"
        placeholder="Monedas"
        value={personatge.monedas ?? ""}
        onChange={(e) => onChange("monedas", Number(e.target.value))}
      /> <br />

      {errors.monedas && <p className="error">{errors.monedas}</p>}

      Miniturbo:
      <input
        type="number"
        step="0.1"
        placeholder="Miniturbo"
        value={personatge.miniturbo ?? ""}
        onChange={(e) => onChange("miniturbo", Number(e.target.value))}
      /> <br />

      {errors.miniturbo && <p className="error">{errors.miniturbo}</p>}

      <Button text="Crear Personaje" type="submit" />
    </form>

  );
};