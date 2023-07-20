import { Bold, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { saveAs } from 'file-saver';


export default function GestionarPlatos() {  
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const saveFile = () => {
    if (!file) {
      return;
    }

    // Save the file to disk
    const blob = new Blob([file], { type: file.type });
    const filename = file.name;
    const savePath = `/${filename}`;

    saveAs(blob, savePath);
  };

  return (
    <div>
      <Card>
        <form>
          <Title className="mb-4">Datos del Plato</Title>
          <Bold>Nombre</Bold>
          <TextInput className="mb-3" placeholder="Arroz a la jardinera" />
          <Bold>Descripcion</Bold>
          <TextInput
            className="mb-3"
            placeholder="Este plato es rico en proteinas..."
          />
          <Bold>Ingredientes</Bold>
          <TextInput className="mb-3" placeholder="Arroz, Huevo, Zanahoria" />
          <Bold>Valor nutricional</Bold>
          <TextInput
            className="mb-3"
            placeholder="Proteinas, Minerales, Grasas"
          />
          <Bold>Preparacion</Bold>
          <TextInput className="mb-3" placeholder="" />

          <div className="form-group">
            <Bold>Elija la imagen para el plato</Bold>
            <input onChange={handleChange} className="form-control" type="file" id="formFile" />
          </div>
          <Button onClick={saveFile} className="bg-dark mt-4">Guardar</Button>
        </form>
      </Card>
    </div>
  );
}
