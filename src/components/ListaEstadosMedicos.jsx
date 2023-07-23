import { useSelector } from "react-redux";
import {

  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
} from "@tremor/react";

export default function ListaEstadosMedicos() {
  const EstadosMedicos = useSelector((store) => store.estados_medicos);

  const fechaNacimiento = Number(
    EstadosMedicos[0].fecha_nacimiento.substring(0, 4)
  );

  const fechaActual = new Date();
  console.log(fechaActual);
  console.log(fechaNacimiento);

  const edad = fechaActual.getFullYear() - fechaNacimiento;
  console.log(fechaNacimiento);
  console.log(edad); // 0

  return (
    <div>
      <Card className="mt-5">
        <Title className="text-center">Mi esado medico</Title>
        <Table className="mt-5">
          <TableHead>
            <TableRow>              
              <TableHeaderCell>Masa Corporal</TableHeaderCell>
              <TableHeaderCell>Edad</TableHeaderCell>
              <TableHeaderCell>Peso</TableHeaderCell>
              <TableHeaderCell>Altura</TableHeaderCell>
              <TableHeaderCell>Enfermedad</TableHeaderCell>
              <TableHeaderCell>Alergias</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {EstadosMedicos.map((item) => (
              <TableRow key={item.id}>              
                <TableCell>
                  <Text>{item.masa_corporal}</Text>
                </TableCell>
                <TableCell>
                  <Text>{edad}</Text>
                </TableCell>
                <TableCell>{item.peso}</TableCell>
                <TableCell>{item.altura}</TableCell>
                <TableCell>{item.enfermedades}</TableCell>
                <TableCell>
                  <Text>{item.alergias}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
