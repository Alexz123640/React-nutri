import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import BarraNavegacion from "../components/BarraNavegacion";
import "../styles/components.css";


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
            <img src="https://img.freepik.com/foto-gratis/ensalada-pollo-verduras-aceitunas_1220-4069.jpg?w=1380&t=st=1690227172~exp=1690227772~hmac=4646bbde81961cc216161fe8e5f7070ebdb8b910c3f9c9d8b98d13b583e659ac" />
          </Col>
        </Row>
        
      </Container>
      
      
    </main>
  );
}
