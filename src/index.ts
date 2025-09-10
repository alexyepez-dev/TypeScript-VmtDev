import { Person } from "@/interfaces/person.interface";
import { Role } from '@/enums/role.enum';

const obj: Person[] = [
  {
    name: "Alex Yepez",
    description: "Desarollador Full Stack",
    rol: Role.Admin,
  },
  {
    name: "Cristian Yepez",
    description: "Desarollador en Ciberseguridad",
    rol: Role.Invitado,
  },
];

const message = "Hola";

console.log(obj);