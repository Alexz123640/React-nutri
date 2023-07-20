import { Card } from "react-bootstrap";
import { PlatosContext } from "../context/Platos.Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function CardProducto() {
  const { recetas } = useContext(PlatosContext);

  return (
    <>
      {recetas.map((receta) => (
        <div key={receta.id}>
          <Card            
            style={{ width: "20rem" }}
            className="mb-4 mx-2"
          >
            <Card.Img
              variant="top"
              src={`/img/${receta.imagen}`}
              style={{maxWidth:"100%",maxHeight:"270px",minHeight:"269px"}}
              
            />
            <Card.Body>
              <Card.Title>{receta.nombre}</Card.Title>
              <Card.Text>
                Autor: <label>{receta.autor}</label>
              </Card.Text>
              <Link to={`/detalle/${receta.id}`} type="button" variant="" className="btn bg-black mt-2 btn-sm text-white">Ver Detalle</Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}
