import { Bold, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createPlato } from "../redux/states/platosSlice";

export default function GestionarPlatos() {
  const dispatch = useDispatch();
  const randomNumber = Math.floor(Math.random() * 950) + 50;
  

  const [nuevoPlato, setNuevoPlato] = useState({
    id: randomNumber,
    nombre: "",
    autor: "Alwx162",
    descripcion: "",
    ingredientes: {},
    valorNutricional: {},
    preparacion: "",
    imagen: "",
  });
  const handleChangeNuevoPlato = (event) => {
    const { name, value } = event.target;
    setNuevoPlato((prevPlato) => ({
      ...prevPlato,
      [name]: value,
    }));
  };
  console.log(nuevoPlato);
  const handleChangeIngredientes = (event) => {
    const { name, value } = event.target;
    setNuevoPlato((prevPlato) => ({
      ...prevPlato,
      ingredientes: {
        ...prevPlato.ingredientes,
        [name]: value,
      },
    }));
  };

  // Función para manejar el cambio de los inputs de valorNutricional
  const handleChangeValorNutricional = (event) => {
    const { name, value } = event.target;
    setNuevoPlato((prevPlato) => ({
      ...prevPlato,
      valorNutricional: {
        ...prevPlato.valorNutricional,
        [name]: value,
      },
    }));
  };

  const handleCrearPlato = () => {
    dispatch(createPlato(nuevoPlato));
  };

  return (
    <div>
      <Card>
        <form>
          <Title className="mb-4">Datos del Plato</Title>
          <Bold>Nombre</Bold>
          <TextInput
            className="mb-3"
            placeholder="Arroz a la jardinera"
            name="nombre"
            value={nuevoPlato.nombre}
            onChange={handleChangeNuevoPlato}
          />
          <Bold>Descripcion</Bold>
          <TextInput
            className="mb-3"
            placeholder="Este plato es rico en proteinas..."
            name="descripcion"
            value={nuevoPlato.descripcion}
            onChange={handleChangeNuevoPlato}
          />

          <Bold>Preparacion</Bold>
          <TextInput
            className="mb-3"
            placeholder=""
            name="preparacion"
            value={nuevoPlato.preparacion}
            onChange={handleChangeNuevoPlato}
          />
          <div className="d-flex flex-column">
            <Bold>Ingredientes:</Bold>
            <div className="d-flex">
              <TextInput
                type="text"
                name="ingredienteName"
                placeholder="Ingrediente"
                value={nuevoPlato.ingredienteName }
                onChange={handleChangeIngredientes}
              />
              <TextInput
                type="text"
                name="ingredienteValue"
                placeholder="Cantidad"
                value={nuevoPlato.ingredienteValue }
                onChange={handleChangeIngredientes}
              />
            </div>
            <div className="d-flex">
              <TextInput
                type="text"
                name="ingredienteName"
                placeholder="Ingrediente"
                value={nuevoPlato.ingredienteName }
                onChange={handleChangeIngredientes}
              />
              <TextInput
                type="text"
                name="ingredienteValue"
                placeholder="Cantidad"
                value={nuevoPlato.ingredienteValue }
                onChange={handleChangeIngredientes}
              />
            </div>
            <div className="d-flex">
              <TextInput
                type="text"
                name="ingredienteName"
                placeholder="Ingrediente"
                value={nuevoPlato.ingredienteName }
                onChange={handleChangeIngredientes}
              />
              <TextInput
                type="text"
                name="ingredienteValue"
                placeholder="Cantidad"
                value={nuevoPlato.ingredienteValue }
                onChange={handleChangeIngredientes}
              />
            </div>
          </div>

          <div className="d-flex flex-column">
            <Bold>Valor Nutricional:</Bold>
            <div className="d-flex">
              <TextInput
                type="text"
                name="valorName"
                placeholder="Valor"
                value={nuevoPlato.valorName }
                onChange={handleChangeValorNutricional}
              />
              
              <TextInput
                className=""
                type="text"
                name="valorValue"
                placeholder="Cantidad"
                value={nuevoPlato.valorValue }
                onChange={handleChangeValorNutricional}
              />
            </div>
            <div className="d-flex">
              <TextInput
                type="text"
                name="valorName"
                placeholder="Valor"
                value={nuevoPlato.valorName }
                onChange={handleChangeValorNutricional}
              />
              
              <TextInput
                className=""
                type="text"
                name="valorValue"
                placeholder="Cantidad"
                value={nuevoPlato.valorValue }
                onChange={handleChangeValorNutricional}
              />
            </div>
            <div className="d-flex">
              <TextInput
                type="text"
                name="valorName"
                placeholder="Valor"
                value={nuevoPlato.valorName }
                onChange={handleChangeValorNutricional}
              />
              
              <TextInput
                className=""
                type="text"
                name="valorValue"
                placeholder="Cantidad"
                value={nuevoPlato.valorValue }
                onChange={handleChangeValorNutricional}
              />
            </div>
          </div>

          <div className="form-group">
            <Bold>Elija la imagen para el plato</Bold>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <Button onClick={handleCrearPlato} className="bg-dark mt-4">
            Guardar
          </Button>
        </form>
      </Card>
    </div>
  );
}
