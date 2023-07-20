import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { PlatosContext } from "../context/Platos.Context";
import { platos } from "../platos";
import { useSelector } from "react-redux";

export default function Filtrar() {
  const Platos = useSelector((store) => store.platos);
  const { setRecetas } = useContext(PlatosContext);
  const [listaIngredientes, setListaIngredientes] = useState([]);
  const [ingrediente, setIngrediente] = useState();

  //AGREGAR INGREDIENTE A LA LISTA CON "BUTTON"
  const handlerAgregarButton = (event) => {
    let dato = event.target.textContent.toLowerCase();

    if (listaIngredientes.includes(dato)) {
      return;
    }
    setListaIngredientes([...listaIngredientes, dato]);
    setRecetas(platos);
  };
  const handleChange = (event) => {
    setIngrediente(event.target.value);
  };
  const handlerQuitar = (elemento) => {
    const nuevoArray = listaIngredientes.filter((item) => item !== elemento);
    setListaIngredientes(nuevoArray);
  };
  //AGREGAR DEL INPUT
  const handleAgregarInput = (dato) => {
    if (!dato || dato.trim() === "") {
      return;
    }
    if (listaIngredientes.includes(dato.toLowerCase())) {
      return;
    }
    setListaIngredientes([...listaIngredientes, dato]);
    setRecetas(platos);
    setIngrediente("");
  };

  //CLICK PARA FILTRAR PLATOS
  const handleFiltrarClick = () => {
    /*
    const platosFiltrados = Platos.filter((plato) =>
      plato.ingredientes.some((ingrediente) =>
        listaIngredientes.includes(ingrediente.toLowerCase())
      )
    );*/
    const platosFiltrados = Platos.filter((receta) => {
      const ingredientesReceta = Object.keys(receta.ingredientes);
      return listaIngredientes.some((ingrediente) =>
        ingredientesReceta.includes(ingrediente.toLowerCase())
      );
    });
    console.log(platosFiltrados.length);
    if (listaIngredientes.length === 0) {
      setRecetas(platos);
    } else {
      setRecetas(platosFiltrados);
    }
  };

  return (
    <Container className="bg-light p-3 mb-3">
      <Row>
        <Col className="list-ingredient border-1">
          <h3 className="text-center">Mis Ingredientes</h3>
          <div className="d-flex flex-wrap">
            {listaIngredientes.map((nombre, index) => (
              <Button
                className="bg-dark m-1 btn-sm"
                key={index}
                onClick={() => handlerQuitar(nombre)}
              >
                {nombre}
              </Button>
            ))}
          </div>
        </Col>
        <Col className="suggestion ">
          <h3 className="text-center">Sugerencias</h3>
          <div className="content-suggestion">
            <Button
              type="button"
              className="btn btn-outline-primary btn-sm m-1"
              onClick={handlerAgregarButton}
            >
              Arroz
            </Button>
          </div>
        </Col>
        <Row className="mt-3">
          <Col md={3}>
            <Form.Control
              value={ingrediente}
              size="sm"
              type="text"
              onChange={handleChange}
              placeholder="Ingresar ingrediente"
            />
          </Col>
          <div className="d-flex justify-content-around mt-3">
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => handleAgregarInput(ingrediente)}
            >
              Agregar Ingrediente
            </button>

            <button
              className="btn btn-outline-primary btn-sm"
              onClick={handleFiltrarClick}
            >
              Filtrar
            </button>
          </div>
        </Row>
      </Row>
    </Container>
  );
}
