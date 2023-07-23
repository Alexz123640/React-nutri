import { Col, Container, Row } from "react-bootstrap";
import "./detalle.css";
import BarraNavegacion from "../../components/BarraNavegacion";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPlatos } from "../../redux/states/platosSlice";
import Details from "./components/Details";
import { useState } from "react";
import Preparation from "./components/Preparation";
import Rating from "./components/Rating";

export default function Detalle() {
  const [activeComponent, setActiveComponent] = useState("details");

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  const { id } = useParams();
  const Platos = useSelector(selectPlatos);

  var plato = Platos.find((p) => p.id === id);
  console.log(plato);

  return (
    <main className="">
      <BarraNavegacion link1="catalogo" />
      <Container className="container mt-5">
        <Row>
          <Col xl={6}>
            <figure
              id="img-plato"
              className="d-flex align-items-center justify-content-center"
            >
              <img src={`../img/${plato.imagen}`} alt="plato " />
            </figure>
          </Col>
          <Col
            xl={6}
            id="detalle-plato"
            className="p-4 d-flex align-items-center flex-column"
          >
            {activeComponent === "details" && <Details />}
            {activeComponent === "preparation" && <Preparation />}
            {activeComponent === "rating" && <Rating />}
            <section id="opciones-plato" className=" mt-5">
              <button
                onClick={() => handleClick("details")}
                className="text-danger"
              >
                Detalle
              </button>
              <button
                onClick={() => handleClick("preparation")}
                className="text-danger"
              >
                Preparacion
              </button>
              <button
                onClick={() => handleClick("rating")}
                className="text-danger"
              >
                Valoracion
              </button>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
