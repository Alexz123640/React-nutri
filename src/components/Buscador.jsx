import { useContext, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { PlatosContext } from "../context/Platos.Context";
import { useSelector } from "react-redux";

const Buscador = () => {
  const Platos = useSelector((store) => store.platos);
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
    const filteredPlatos = filterPlatos(Platos, value);
    setRecetas(filteredPlatos); //debuelve los platos para mostrar
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
        <div className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </Col>
    </Container>
  );
};

export default Buscador;
