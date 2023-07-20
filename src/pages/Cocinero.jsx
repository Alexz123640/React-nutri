import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectPlatos } from "../redux/states/platosSlice";

import BarraNavegacion from "../components/BarraNavegacion";
import ListarPlatos from "../components/ListarPlatos";
import GestionarPlatos from "../components/GestionarPlatos";

export default function Cocinero() {
  const platos = useSelector(selectPlatos);
  platos;

  return (
    <>
      <BarraNavegacion link1="catalogo" />
      <Container>
        <Row className="mt-5 ">
          <Col lg={6}>
            <ListarPlatos />
          </Col>
          <Col lg={5}>
          <GestionarPlatos />
          </Col >
        </Row>
      </Container>
    </>
  );
}
