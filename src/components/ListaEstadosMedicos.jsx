import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  AccordionList,
} from "@tremor/react";

export default function ListaEstadosMedicos() {
  const EstadosMedicos = useSelector((store) => store.estados_medicos);
  console.log(EstadosMedicos);
  console.log(EstadosMedicos);
  return (
    <div>
      <h1 className="my-5 text-center">Tu Estado Medico</h1>
      <AccordionList className="max-w-md mx-auto">
        {EstadosMedicos.map((item) => (
          <Accordion key={item.id}>
            <AccordionHeader>Estado Medico</AccordionHeader>
            <AccordionBody className="d-flex flex-wrap">
            {item.id}, Peso: {item.peso}kg, Altura:
            {item.altura}m, Masa Corporal:
            {item.masa_corporal}, Enfermedades:{" "}
            {item.enfermedades}, Alergias: {item.alergias}
            </AccordionBody>
          </Accordion>
        ))}
      </AccordionList>
    </div>
  );
}
