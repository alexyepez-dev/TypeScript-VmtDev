import { Role } from "@/enums/role.enum";
import { Person } from "@/interfaces/person.interface";
import { getFullName } from "./get-fullname.util";

// Aplicar funcion factory.
// Es una funcion creada para operaciones especificas
// Sigue patron de adaptabilidad:

export const createPerson = (
  name: string,
  lastName: string,
  birthdate: Date | string,
  description: string,
  rol: Role
): Person => {
  return {
    name,
    lastName,
    birthdate,
    description,
    rol,
    getFullName: function () {
      return getFullName(name, lastName);
    },
  };
};