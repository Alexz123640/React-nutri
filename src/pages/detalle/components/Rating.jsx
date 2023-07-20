import { useParams } from "react-router-dom";
import { selectPlatos } from "../../../redux/states/platosSlice";
import { useSelector } from "react-redux";


export default function Rating() {
  const { id } = useParams();
  const Platos = useSelector(selectPlatos);

  var plato = Platos.find((p) => p.id === id);
  console.log(plato);
  
  

  return (
    <div>Rating</div>
  )
}
