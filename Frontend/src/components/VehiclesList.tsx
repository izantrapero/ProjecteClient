import type { Vehicle } from "../types/types";

interface Props {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
  setSelectedVehicle: (v: Vehicle | null) => void;
  handleDeleteVehicle: (id: string) => void;
}

const VehiclesList = ({
  vehicles,
  selectedVehicle,
  setSelectedVehicle,
  handleDeleteVehicle,
}: Props) => {
  return (
    <ul>
      {vehicles.map((v) => (
        <li key={v._id}>
          {v.nom} - {v.tipus} - Velocidad: {v.velocitat}

          <button
            onClick={() =>
              setSelectedVehicle(
                selectedVehicle?._id === v._id ? null : v
              )
            }
          >
            {selectedVehicle?._id === v._id ? "Ocultar" : "Detalles"}
          </button>

          <button onClick={() => handleDeleteVehicle(v._id)}>
            Eliminar
          </button>

          {selectedVehicle?._id === v._id && (
            <div style={{ marginTop: "5px", border: "1px solid #ccc", padding: "5px" }}>
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
  );
};

export default VehiclesList;