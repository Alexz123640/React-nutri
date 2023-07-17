import { Button, Card } from "react-bootstrap";
import { PlatosContext } from "../context/Platos.Context";
import { useContext } from "react";

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
              width="120px"
              height="150px"
            />
            <Card.Body>
              <Card.Title>{receta.nombre}</Card.Title>
              <Card.Text>
                Autor: <label>{receta.autor}</label>
              </Card.Text>
              <Button variant="dark bg-black" className="mt-2">Ver Detalle</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}
