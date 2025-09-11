import { Person } from "@/interfaces/person.interface";
import { Role } from '@/enums/role.enum';

const obj: Person[] = [
  {
    name: "Alex",
    lastName: "Yepez",
    birthdate: "04/07/205",
    description: "Desarollador Full Stack",
    rol: Role.Admin,
  },
  {
    name: "Cristian",
    lastName: "Yepez",
    birthdate: "09/12/2011",
    description: "Desarollador en Ciberseguridad",
    rol: Role.Invitado,
  },
];

console.log(obj);