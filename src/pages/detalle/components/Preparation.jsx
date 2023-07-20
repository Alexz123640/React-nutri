import { useParams } from "react-router-dom";
import { selectPlatos } from "../../../redux/states/platosSlice";
import { useSelector } from "react-redux";

export default function Preparation() {
  const { id } = useParams();
  const Platos = useSelector(selectPlatos);

  var plato = Platos.find((p) => p.id === id);
  console.log(plato);
  const ingredientes = plato.ingredientes;
  console.log(ingredientes);
  return (
    <>
      <h1>{plato.nombre}</h1>
      <h3 className="mt-4">Ingredientes</h3>

      <ul className="mt-4">
        {Object.entries(plato.ingredientes).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <h3 className="mt-4">Preparacion</h3>

      <p>{plato.preparacion}</p>
    </>
  );
}
