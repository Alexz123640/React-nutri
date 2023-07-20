import { Col, Container, Form, Row } from "react-bootstrap";
import BarraNavegacion from "../components/BarraNavegacion";
import { Toaster, toast } from "sonner";
import ListaEstadosMedicos from "../components/ListaEstadosMedicos";
import { useDispatch, useSelector } from "react-redux";
import { createEstadoMedico } from "../redux/states/medicoSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { rebornPlato, selectPlatos } from "../redux/states/platosSlice";

const EstadoMedico = () => {
  const Platos = useSelector(selectPlatos);
  const EstadosMedicoss = useSelector((store) => store.estados_medicos);

  const dispatch = useDispatch();
  const [enfer, setEnfer] = useState([]);
  const [alerg, setAlerg] = useState([]);

  const inputEnferChange = (e) => {
    setEnfer(e.target.value.split(","));
    const enfermedades = e.target.value
      .split(",")
      .map((enfermedad) => enfermedad.trim())
      .filter((enfermedad) => enfermedad !== ""); // Para filtrar posibles entradas vacías
    setEnfer(enfermedades);
  };

  const inputAlergChange = (e) => {
    const alergias = e.target.value
      .split(",")
      .map((alergia) => alergia.trim())
      .filter((alergia) => alergia !== ""); // Para filtrar posibles entradas vacías
    setAlerg(alergias);
  };

  const handleEnviar = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const id = "10";
    const id_user = "2";
    const masa_corporal = formData.get("masa_corporal");
    const fecha_nacimiento = formData.get("fecha_nacimiento");
    const peso = formData.get("peso");
    const altura = formData.get("altura");
    const enfermedades = enfer;
    const alergias = alerg;

    if (!fecha_nacimiento || !peso || !altura) {
      toast.error("Faltan datos");
      return;
    }
    dispatch(
      createEstadoMedico({
        id: id,
        id_user: id_user,
        masa_corporal: masa_corporal,
        fecha_nacimiento: fecha_nacimiento,
        peso: peso,
        altura: altura,
        enfermedades: enfermedades,
        alergias: alergias,
      })
    );
    toast.success("Estado medico registrado 😁");
    form.reset();
  };

  const alergiasEstadoMedico = EstadosMedicoss[0].alergias;

  const platossinalergia = Platos.filter((plato) => {
    const ingredientes = Object.keys(plato.ingredientes);
    for (const ingrediente of ingredientes) {
      if (alergiasEstadoMedico.includes(ingrediente)) {
        return false;
      }
    }
    return true;
  });
  console.log(Platos)
  console.log("nuevo platos", platossinalergia);
  console.log("estados m",EstadosMedicoss);

  const handleAvanzar=()=>{
    dispatch(rebornPlato(platossinalergia))
    console.log(Platos)
  }

  return (
    <>
      <BarraNavegacion />
      <Container className="mt-4">
        <Form onSubmit={handleEnviar}>
          <Row className="d-flex justify-content-between">
            <Col lg={3} className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                Fecha de Nacimiento
              </label>
              <input
                name="fecha_nacimiento"
                type="date"
                className="form-control"
                id="exampleInputEmail1"
              />
            </Col>
            <Col lg={3} className="form-group  ">
              <label className="form-label mt-4">Masa Corporal</label>
              <input
                name="masa_corporal"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Ingrese su masa corporal"
              />
            </Col>
            <Col lg={4} className="form-group  ">
              <label className="form-label mt-4">Genero</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="genero"
                  id="optionsRadios1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="optionsRadios1">
                  Masculino
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="genero"
                  id="optionsRadios2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="optionsRadios2">
                  Femenino
                </label>
              </div>
            </Col>

            <Col lg={3} className="form-group  ">
              <label className="form-label mt-4">Peso</label>
              <input
                name="peso"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Ingrese su peso"
              />
            </Col>
            <Col lg={3} className="form-group  ">
              <label className="form-label mt-4">Altura</label>
              <input
                name="altura"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Ingrese altura"
              />
            </Col>
            <Col lg={4} className="form-group  ">
              <label className="form-label mt-4">Enfermedades</label>
              <input
                name="enfermedades"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Ingrese sus enfermedades"
                onChange={inputEnferChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                Separe las Enfermedades con una coma(,)
              </small>
            </Col>
            <Col lg={3} className="form-group  ">
              <label className="form-label mt-4">Alergias</label>
              <input
                name="alergias"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Ingrese sus alergias"
                onChange={inputAlergChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                Separe las Alergias con una coma(,)
              </small>
            </Col>
            <Col lg={3}></Col>
          </Row>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-outline-primary mt-5">
              Guardar
            </button>
            <Link
              to="/catalogo"
              type="submit"
              className="btn btn-outline-primary mt-5"
              onClick={handleAvanzar}
            >
              Avanzar
            </Link>
          </div>
        </Form>
        <ListaEstadosMedicos />
      </Container>
      <Toaster position="top-right" />
    </>
  );
};

export default EstadoMedico;
