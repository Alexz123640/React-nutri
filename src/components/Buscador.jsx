import { useContext, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { PlatosContext } from "../context/Platos.Context";
import { platos } from "../platos";

const Buscador = () => {
  const { setRecetas } = useContext(PlatosContext);
  const [searchValue, setSearchValue] = useState("");

  const filterPlatos = (platos, searchValue) => {
    return platos.filter((plato) =>
      plato.nombre.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    const filteredPlatos = filterPlatos(platos, value);
    setRecetas(filteredPlatos);
  };

  return (
    <Container className="d-flex justify-content-center mt-3">
      <Col lg={4} className="d-flex justify-content-between search-box">
        <input
          id="search-input"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Buscar"
        />
        <div className="search"></div>
      </Col>
    </Container>
  );
};

export default Buscador;
