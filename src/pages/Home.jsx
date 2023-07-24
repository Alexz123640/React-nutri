import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import BarraNavegacion from "../components/BarraNavegacion";
import "../styles/components.css";
import ListaUsuarios from "../components/ListaUsuarios";


export default function Home() {
 

  return (
    <main>
      <BarraNavegacion  link2="Estado Medico" />
      <Container className="mt-5">
        <Row>
          <Col lg={6} className="">
            <h1 className="h1-home">
              ENCUENTRA PLATOS Y RECETAS PERSONALIZADAS
            </h1>
            <p className="p-home">Todo balanceados a tus especificaciones</p>
            <Link to="/catalogo" className="btn btn-outline-danger mt-4">
              Catalogo
            </Link>
          </Col>
          <Col lg={6} className="">
            <img src="../../public/img/ensalada.png" />
          </Col>
        </Row>
        
      </Container>
      
      
    </main>
  );
}
