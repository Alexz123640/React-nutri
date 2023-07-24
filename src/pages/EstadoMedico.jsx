import { Col, Container, Form, Row } from "react-bootstrap";
import BarraNavegacion from "../components/BarraNavegacion";
import { Toaster, toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { createEstadoMedico } from "../redux/states/medicoSlice";
import { useState } from "react";
import { rebornPlato, selectPlatos } from "../redux/states/platosSlice";
import ListaEstadosMedicos from "../components/ListaEstadosMedicos";
import { useNavigate } from "react-router-dom";

export const Enfermedades = [
  {
    enfermedad: "Ninguna",
    ingredientesEvitar: ["minguno"],
    ingredientesRecomendados: ["ninguno"]
  },
  {
    enfermedad: "Hipertension",
    ingredientesEvitar: ["Sal", "enpinacas", "zanahoria", "platano", "naranja"],
    ingredientesRecomendados: ["Ajo", "Cebolla", "Aguacate", "Pescado", "Frutas","verdura"]
  },
  {
    enfermedad: "Diabetes",
    ingredientesEvitar: ["espinacas", "fresas", "pimientos", "Harina","manzana"],
    ingredientesRecomendados: ["Vegetal de hojas verde", "Aguacate", "Nuez", "Pescado", "Carne"]
  },
  {
    enfermedad: "Bronquitis",
    ingredientesEvitar: ["queso","leche", "aji","rocoto","cafe"],
    ingredientesRecomendados: ["limon","naranja", "Pescado", "Pollo", "Jengibre"]
  },
  {
    enfermedad: "Gripe",
    ingredientesEvitar: ["azucar", "refresco", "limon", "leche","naranja","salchichas"],
    ingredientesRecomendados: ["limon","naranja", "Jengibre", "Caldo de pollo", "Ajo"]
  },
  {
    enfermedad: "Dolor de garganta",
    ingredientesEvitar: ["aji", "tomate", "zanahoria", "limon", "naranja"],
    ingredientesRecomendados: ["Sopa", "papas", "Te", "Miel"]
  },
  {
    enfermedad: "Cardiovasculares",
    ingredientesEvitar: ["carne", "lacteo", "fritura", "Sal", "Azucar"],
    ingredientesRecomendados: ["Pescado", "Aguacate", "Nuez", "Aceite de oliva", "Fruta","verdura"]
  },
  {
    enfermedad: "Enfermedad celiaca",
    ingredientesEvitar: ["Trigo", "Cebada", "Centeno", "Pan", "Pasta", "Galleta", "gluten"],
    ingredientesRecomendados: ["Arroz", "papas", "Quinoa", "Verdura", "Fruta", "Carne"]
  },
  {
    enfermedad: "Intolerancia a la lactosa",
    ingredientesEvitar: ["Leche", "Queso", "Yogur", "Helado", "Mantequilla"],
    ingredientesRecomendados: ["Leche sin lactosa", "Leche vegetal", "Yogur sin lactosa", "Mantequilla sin lactosa", "Queso sin lactosa"]
  },
  {
    enfermedad: "Enfermedad renal cronica",
    ingredientesEvitar: ["Sal", "Platano", "Naranja", "Espinacas", "Aguacate", "Alimento rico en potasio"],
    ingredientesRecomendados: ["Manzana", "Pera", "Ciruela", "Arandano", "Aguacate", "Vegetal","palta"]
  },
  {
    enfermedad: "Enfermedad de Crohn",
    ingredientesEvitar: ["Nuez", "coliflor", "Lacteo", "picante", "brocoli","lenteja","aji","carne"],
    ingredientesRecomendados: ["Pescado", "Huevos", "Arroz", "Pasta blanca", "Calabaza", "papas"]
  },
  {
    enfermedad: "Colitis ulcerosa",
    ingredientesEvitar: ["leche", "queso", "lenteja", "cebolla", "limon"],
    ingredientesRecomendados: ["Pescado", "Carne", "Verdura", "Fruta", "Calabaza"]
  },
  {
    enfermedad: "Anemia",
    ingredientesEvitar: ["Carne", "ajo", "espinacas", "huevos", "uvas","leche"],
    ingredientesRecomendados: ["Carne", "Pollo", "Pavo", "Pescado", "Espinaca", "Lenteja", "Huevos"]
  },
  {
    enfermedad: "Enfermedad de Hashimoto",
    ingredientesEvitar: ["Soja", "queso", "Brocoli", "nuez", "Coliflor", "Frijol"],
    ingredientesRecomendados: ["Pescado", "Huevos", "Arroz", "papas", "Fruta","verdura", "Aceite de oliva"]
  },
  {
    enfermedad: "Osteoporosis",
    ingredientesEvitar: ["Cafe", "sal", "espinacas","naranja"],
    ingredientesRecomendados: ["Leche", "Yogur", "Queso", "Salmon", "Brocoli", "Nuez", "Almendra"]
  },
  {
    enfermedad: "Gota",
    ingredientesEvitar: ["Marisco", "Viscera", "Carne", "Esparrago", "Coliflor", "Legumbre"],
    ingredientesRecomendados: ["Cereza", "Fresa", "Arandano", "Vegetal de hoja verde", "Pescado", "Huevos"]
  },
  {
    enfermedad: "Enfermedad hepatica",
    ingredientesEvitar: ["salchichas", "Grasa", "galletas", "Azucar","queso"],
    ingredientesRecomendados: ["Fruta y verdura fresca", "Pescado", "Huevos", "Aceite de oliva", "Cereal integral"]
  },
  {
    enfermedad: "Enfermedad pulmonar",
    ingredientesEvitar: ["coliflor", "fritura", "Embutido", "brocoli","atun"],
    ingredientesRecomendados: ["Pescado", "Fruta y verdura fresca", "Fruto seco", "Aceite de oliva", "Agua"]
  },
  {
    enfermedad: "Enfermedad de Alzheimer",
    ingredientesEvitar: ["mantequilla", "galletas", "pan", "carne"],
    ingredientesRecomendados: ["Pescado", "Nuez", "Fruta y verdura fresca", "Aceite de oliva", "Cereal integral"]
  },
  {
    enfermedad: "Sindrome del intestino irritable (SII)",
    ingredientesEvitar: ["Cebolla", "Ajo", "Brocoli", "Repollo", "Legumbre", "Fritura"],
    ingredientesRecomendados: ["Pescado", "Pollo", "Arroz", "Zanahoria", "Calabaza", "papas"]
  }
];

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
