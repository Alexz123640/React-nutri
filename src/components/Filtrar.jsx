import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { PlatosContext } from "../context/Platos.Context";
import { platos } from "../platos";
import { useSelector } from "react-redux";

export default function Filtrar() {

  const Platos = useSelector(store => store.platos)
  const { recetas, setRecetas } = useContext(PlatosContext);
  const [listaIngredientes, setListaIngredientes] = useState([]);
  const [ingrediente, setIngrediente] = useState();
  const [inputValue, setInputValue] = useState();


  //AGREGAR INGREDIENTE A LA LISTA CON "INPUT"
  const handlerIngrediente = (event) => {
    let dato = event.target.textContent.toLowerCase();

    if (listaIngredientes.includes(dato)) {
      return;
    }
    setListaIngredientes([...listaIngredientes, dato]);
    setRecetas(platos);
  };

  const handlerQuitar = (elemento) => {
    const nuevoArray = listaIngredientes.filter((item) => item !== elemento);
    setListaIngredientes(nuevoArray);
  };
  const handleChange = (event) => {
    setIngrediente(event.target.value);
    
  };
  const handleAgregar = (dato) => {
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
    const platosFiltrados = Platos.filter((plato) =>
      plato.ingredientes.some((ingrediente) =>
        listaIngredientes.includes(ingrediente.toLowerCase())
      )
    );
    console.log(platosFiltrados.length);
    if (listaIngredientes.length === 0) {
      setRecetas(platos);
    } else {
      setRecetas(platosFiltrados);
    }
  };

  return (
    <Container className="bg-light p-3 mb-4">
      <Row>
        <Col className="list-ingredient ">
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
        <Col className="suggestion">
          <h3 className="text-center">Sugerencias</h3>
          <div className="content-suggestion">
            <Button
              type="button"className="btn btn-outline-primary btn-sm m-1"
              onClick={handlerIngrediente}
            >
              Arroz
            </Button>
            <Button
              type="button"className="btn btn-outline-primary btn-sm m-1"
              onClick={handlerIngrediente}
            >
              Tomate
            </Button>
            <Button
              type="button"className="btn btn-outline-primary btn-sm m-1"
              onClick={handlerIngrediente}
            >
              Queso
            </Button>
            <Button
              type="button"className="btn btn-outline-primary btn-sm m-1"
              onClick={handlerIngrediente}
            >
              Lentejas
            </Button>
            <Button
              type="button"className="btn btn-outline-primary btn-sm m-1"
              onClick={handlerIngrediente}
            >
              Lechuga
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
        </Row>

        <div className="d-flex justify-content-around mt-3">
          <button
            className="btn btn-outline-primary "
            
            onClick={() => handleAgregar(ingrediente)}
          >
            Agregar Ingrediente
          </button>

          <button
            className="btn btn-outline-primary "
            onClick={handleFiltrarClick}
          >
            Filtrar
          </button>
        </div>
      </Row>
    </Container>
  );
}
