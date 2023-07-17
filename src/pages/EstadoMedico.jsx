import { Col, Container, Form, Row } from "react-bootstrap";
import BarraNavegacion from "../components/BarraNavegacion";
import { Toaster, toast } from "sonner";
import ListaEstadosMedicos from "../components/ListaEstadosMedicos";
import { useDispatch } from "react-redux";
import { createEstadoMedico } from "../redux/states/medicoSlice";
import { Link } from "react-router-dom";

const EstadoMedico = () => {
  const dispatch = useDispatch();
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
    const enfermedades = formData.get("enfermedades");
    const alergias = formData.get("alergias");

    if (!fecha_nacimiento || !peso || !altura) {
      toast.error('Faltan datos')
      return;
    }
    dispatch(
      createEstadoMedico({
        id:id,
        id_user:id_user,
        masa_corporal:masa_corporal,
        fecha_nacimiento:fecha_nacimiento,
        peso:peso,
        altura:altura,
        enfermedades:enfermedades,
        alergias:alergias,
      })
    );

    toast.success("Estado medico registrado 😁");
    form.reset();
    /** 
    Swal.fire({
      icon: "success",
      title: "Registro Exitoso",
      showConfirmButton: false,
      timer: 1500,
    });*/
  };
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
              />
            </Col>
            <Col lg={3} className="form-group  ">
              <label className="form-label mt-4">Alergias</label>
              <input
                name="alergias"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Ingrese sus alergias"
              />
            </Col>
            <Col lg={3}></Col>
          </Row>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-outline-primary mt-5">
            Guardar
          </button>
          <Link to="/catalogo" type="submit" className="btn btn-outline-primary mt-5">Avanzar</Link>
        
          </div>
          </Form>
        <ListaEstadosMedicos />
      </Container>
      <Toaster position="top-right" />
    </>
  );
};

export default EstadoMedico;
