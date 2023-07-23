import { Col, Container, Form, Row } from "react-bootstrap";
import BarraNavegacion from "../components/BarraNavegacion";
import { Toaster, toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { createEstadoMedico } from "../redux/states/medicoSlice";
import { useState } from "react";
import { rebornPlato, selectPlatos } from "../redux/states/platosSlice";
import { enfermedades } from "../models/enfermedades";
import ListaEstadosMedicos from "../components/ListaEstadosMedicos";
import { useNavigate } from "react-router-dom";

const EstadoMedico = () => {
  const navigate = useNavigate();
  const Platos = useSelector(selectPlatos);
  const EstadosMedicoss = useSelector((store) => store.estados_medicos);

  const dispatch = useDispatch();
  const [enfer, setEnfer] = useState([]);
  const [alerg, setAlerg] = useState();

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
    const masa_corporal = (
      formData.get("peso") *
      formData.get("altura") ** 2
    ).toFixed(2);
    const fecha_nacimiento = formData.get("fecha_nacimiento");
    const peso = formData.get("peso");
    const altura = formData.get("altura");
    const enfermedades = formData.get("enfermedad");
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
      if (alergiasEstadoMedico.includes(ingrediente.trim())) {
        return false;
      }
    }
    return true;
  });
  console.log(Platos);
  console.log("nuevo platos", platossinalergia);
  console.log("estados m", EstadosMedicoss);

  const handleAvanzar = () => {
    dispatch(rebornPlato(platossinalergia));
    navigate("/catalogo");
  };

  return (
    <>
      <BarraNavegacion />
      <Container className="mt-4">
        <Form onSubmit={handleEnviar}>
          <Row className="d-flex justify-content-between">
            <Col lg={4} className="form-group">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label mt-4 text-black"
              >
                Fecha de Nacimiento
              </label>
              <input
                name="fecha_nacimiento"
                type="date"
                className="form-control"
                id="exampleInputEmail1"
              />
            </Col>
            <Col lg={4} className="form-group">
              <label className="form-label mt-4 text-black">Enfermedades</label>
              <select
                name="enfermedad"
                className="form-select"
                id="exampleSelect1"
              >
                {enfermedades.map((item) => (
                  <option key={item.enfermedad}>{item.enfermedad}</option>
                ))}
              </select>
            </Col>
            <Col lg={4} className="form-group  ">
              <label className="form-label mt-4 text-black">Genero</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="genero"
                  id="optionsRadios1"
                  value="option1"
                />
                <label
                  className="form-check-label text-black"
                  htmlFor="optionsRadios1"
                >
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
                <label
                  className="form-check-label text-black"
                  htmlFor="optionsRadios2"
                >
                  Femenino
                </label>
              </div>
            </Col>

            <Col lg={4} className="form-group  ">
              <label className="form-label mt-4 text-black">Peso</label>
              <input
                name="peso"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Ingrese su peso"
              />
            </Col>
            <Col lg={4} className="form-group  ">
              <label className="form-label mt-4 text-black">Altura</label>
              <input
                name="altura"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Ingrese altura"
              />
            </Col>

            <Col lg={4} className="form-group  ">
              <label className="form-label mt-4 text-black">Alergias</label>
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
            <Col lg={4}></Col>
          </Row>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-outline-danger mt-5">
              Guardar
            </button>
            <button
              type="submit"
              className="btn btn-outline-danger mt-5"
              onClick={handleAvanzar}
            >
              Avanzar
            </button>
          </div>
        </Form>
        <ListaEstadosMedicos />
      </Container>
      <Toaster position="top-right" />
      
    </>
  );
};

export default EstadoMedico;
