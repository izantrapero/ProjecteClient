import type { Personatge } from "../types/types";

interface Props {
  personatges: Personatge[];
  selectedPersonatge: Personatge | null;
  setSelectedPersonatge: (p: Personatge | null) => void;
  handleDeletePersonatge: (id: string) => void;
}

const PersonatgesList = ({
  personatges,
  selectedPersonatge,
  setSelectedPersonatge,
  handleDeletePersonatge,
}: Props) => {
  return (
    <ul>
      {personatges.map((p) => (
        <li key={p._id}>
          {p.nom} - {p.tipus} - Velocidad: {p.velocitat}

          <button
            onClick={() =>
              setSelectedPersonatge(
                selectedPersonatge?._id === p._id ? null : p
              )
            }
          >
            {selectedPersonatge?._id === p._id ? "Ocultar" : "Detalles"}
          </button>

          <button onClick={() => handleDeletePersonatge(p._id)}>
            Eliminar
          </button>

          {selectedPersonatge?._id === p._id && (
            <div style={{ marginTop: "5px", border: "1px solid #ccc", padding: "5px" }}>
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
  );
};

export default PersonatgesList;