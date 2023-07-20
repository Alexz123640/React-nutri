import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import BarraNavegacion from "../components/BarraNavegacion";
import "../styles/components.css";
import ListaUsuarios from "../components/ListaUsuarios";
import { useAuth0 } from '@auth0/auth0-react'

export default function Home() {
  const { user}  = useAuth0();

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
            <Link to="/catalogo" className="btn btn-outline-primary mt-4">
              Catalogo
            </Link>
          </Col>
          <Col lg={6} className="">
            
          </Col>
        </Row>
        <ListaUsuarios />
      </Container>
      
      {JSON.stringify(user)}
    </main>
  );
}
