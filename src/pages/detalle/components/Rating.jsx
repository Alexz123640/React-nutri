import { useParams } from "react-router-dom";
import { selectPlatos } from "../../../redux/states/platosSlice";
import { useSelector } from "react-redux";
import { Card } from "@tremor/react";
import { useState } from "react";
import ReactStars from "react-rating-star-with-type";

export default function Rating() {
  const { id } = useParams();
  const Platos = useSelector(selectPlatos);
  const [star, setStar] = useState(5);

  const onChange = (nextValue) => {
    setStar(nextValue);
  };

  var plato = Platos.find((p) => p.id === id);
  console.log(plato);

  return (
    <>
      <Card>
        <ReactStars
          onChange={onChange}
          value={4.2}
          edit={true}
          activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC"]}
        />
      </Card>
    </>
  );
}
