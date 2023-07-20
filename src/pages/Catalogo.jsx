import { Container } from "react-bootstrap";
import CardProducto from "../components/CardProducto";
import BarraNavegacion from "../components/BarraNavegacion";
import "../styles/components.css";
import Filtrar from "../components/Filtrar";
import { PlatosProvider } from "../context/Platos.Context";
import Buscador from "../components/Buscador";

export default function Catalogo() {

  return (
    <PlatosProvider>
      <BarraNavegacion link1="logout" />      
      
      <Buscador />
      <Container className="mt-3 d-flex fex-direction-row justify-content-between flex-wrap align-items-center">
        <Filtrar />
        <CardProducto />
      </Container>
    </PlatosProvider>
  );
}
