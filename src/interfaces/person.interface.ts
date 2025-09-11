import { Role } from "@/enums/role.enum";

export interface Person  {
    name: string;
    lastName: string;
    birthdate: Date | string;
    description: string;
    rol: Role;
    getFullName: () => string;
}