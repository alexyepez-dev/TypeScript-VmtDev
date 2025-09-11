// Creacion de objetos y uso de interfaces:

import { Role } from "@/enums/role.enum";
import { createPerson } from "@/utils/create-person.util";

const alex = createPerson("Alex", "Yepez", "04-07-2005", "Desarrollador Fullstack", Role.Admin);
console.log(alex.getFullName());