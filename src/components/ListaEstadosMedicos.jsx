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
        <Accordion>
          <AccordionHeader>Estado Medico</AccordionHeader>

          <AccordionBody className="d-flex flex-wrap">
            Codigo: {EstadosMedicos.id}, Peso: {EstadosMedicos.peso}kg, Altura:
            {EstadosMedicos.altura}m, Masa Corporal:
            {EstadosMedicos.masa_corporal}, Enfermedades:{" "}
            {EstadosMedicos.enfermedades}, Alergias: {EstadosMedicos.alergias}
          </AccordionBody>
        </Accordion>
      </AccordionList>
    </div>
  );
}
