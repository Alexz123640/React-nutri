import { Col, Container, Form, Row } from "react-bootstrap";
import BarraNavegacion from "../components/BarraNavegacion";
import { Toaster, toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { createEstadoMedico } from "../redux/states/medicoSlice";
import { useState } from "react";
import { rebornPlato, selectPlatos } from "../redux/states/platosSlice";
import { Enfermedades } from "../models/enfermedades";
import ListaEstadosMedicos from "../components/ListaEstadosMedicos";
import { useNavigate } from "react-router-dom";

const EstadoMedico = () => {
  const navigate = useNavigate();
  const Platos = useSelector(selectPlatos);
  const EstadosMedicoss = useSelector((store) => store.estados_medicos);

  const dispatch = useDispatch();
  
  const [alerg, setAlerg] = useState([""]);
  
  const [cadenaenfer, setCadenaenfer] = useState(EstadosMedicoss[0].enfermedades);
console.log(EstadosMedicoss[0].enfermedades)

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
    const enfermedadForm = formData.get("enfermedad");
    setCadenaenfer(enfermedadForm);
    const alergias = alerg;

    if (!fecha_nacimiento || !peso || !altura || !enfermedadForm) {
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
        enfermedades: enfermedadForm,
        alergias: alergias,
      })
    );

    toast.success("Estado medico registrado 😁");
    form.reset();
  };

  const alergiasEstadoMedico = EstadosMedicoss[0].alergias;
  console.log(alergiasEstadoMedico)

//CALCULO DE TIPO DE PERSONA----------------------------------------------------
function calcularEstadoPesoAltura(altura, peso) {
  if (altura >= 1.60 && altura <= 1.69) {
    if (peso < 54) {
      return 'delgado';
    } else if (peso >= 54 && peso <= 68) {
      return 'normal';
    } else {
      return 'sobrepeso';
    }
  } else if (altura >= 1.70 && altura <= 1.79) {
    // Repetir el mismo patrón para los otros rangos de altura
    if (peso < 59) {
      return 'delgado';
    } else if (peso >= 59 && peso <= 74) {
      return 'normal';
    } else {
      return 'sobrepeso';
    }
  } else if (altura >= 1.80 && altura <= 1.89) {
    if (peso < 64) {
      return 'delgado';
    } else if (peso >= 64 && peso <= 81) {
      return 'normal';
    } else {
      return 'sobrepeso';
    }
  } else if (altura >= 1.90 && altura <= 1.99) {
    if (peso < 69) {
      return 'delgado';
    } else if (peso >= 69 && peso <= 87) {
      return 'normal';
    } else {
      return 'sobrepeso';
    }
  } else if (altura >= 2.00 && altura <= 2.10) {
    if (peso < 74) {
      return 'delgado';
    } else if (peso >= 74 && peso <= 94) {
      return 'normal';
    } else {
      return 'sobrepeso';
    }
  } else {
    // Si la altura no está dentro de ningún rango válido, retornamos 'desconocido'
    return 'desconocido';
  }
}
let persona =calcularEstadoPesoAltura(EstadosMedicoss[0].altura, EstadosMedicoss[0].peso)

//CALCULO DE PLATOS SEGUN PERSONA------------------------------------------------
const filtrarPlatosSegunPersona = (persona) => {
  console.log(persona)
  if (persona === "delgado") {
    
    return Platos.filter((plato) => parseFloat(plato.valorNutricional.proteinas) > 15);
  } else if (persona === "sobrepeso") {
    
    return Platos.filter((plato) => parseFloat(plato.valorNutricional.calorias) < 220);
  } else {
    
    return Platos;
  }
};

// Ejemplo de uso
const platosPersona = filtrarPlatosSegunPersona(persona);


//CALCULO DE PLATOS SIN ALERGIAS------------------------------------------------
  const platossinalergia = platosPersona.filter((plato) => {
    const ingredientes = Object.keys(plato.ingredientes);

    for (const ingrediente of ingredientes) {
      if (alergiasEstadoMedico.includes(ingrediente.trim())) {
        return false;
      }
    }
    return true;
  });
  
  console.log(platossinalergia);
  //-----------------------------------------------------

  const enfermedad = Enfermedades.find(
    (enfermedad) => enfermedad.enfermedad === cadenaenfer
  );
  
  console.log(enfermedad)

  console.log(cadenaenfer);

  // Filtrar los platos que no contengan ingredientes a evitar
  const PlatosSinIngredientesEvitar = platossinalergia.filter((plato) => {
    const ingredientesEvitar = enfermedad.ingredientesEvitar;
    const platoIngredientes = Object.keys(plato.ingredientes);
    
    // Verificar si el plato contiene ingredientes a evitar
    const contieneIngredientesEvitar = platoIngredientes.some((ingrediente) =>
      ingredientesEvitar.includes(ingrediente)
    );

    
    return !contieneIngredientesEvitar;
  });
  //-----------------------------------------------------

  const handleAvanzar = () => {
    
    dispatch(rebornPlato(PlatosSinIngredientesEvitar));
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
                {Enfermedades.map((item) => (
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
