import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPlatos } from "../../../redux/states/platosSlice";

export default function Details() {
  const { id } = useParams();
  const Platos = useSelector(selectPlatos);

  var plato = Platos.find((p) => p.id === id);
  console.log(plato);

  return (
    <>
      <h1>{plato.nombre}</h1>
      <h5>{plato.autor}</h5>
      <h2>Valor Nutricional</h2>
      <ul>
      {Object.entries(plato.valorNutricional).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <p>{plato.descripcion}</p>
      
    </>
  );
}
