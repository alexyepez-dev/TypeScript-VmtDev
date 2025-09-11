import { ApiResponse } from "@/interfaces/api.interface";
import { Computer } from "@/interfaces/computer.interface";

export const listOfComputers: Computer[] = [
  {
    name: "Mac G4",
    brand: "Apple",
  },
  {
    name: "Mac G3",
    brand: "Apple",
  },
  {
    name: "Mac G2",
    brand: "Apple",
  },
];

const response: ApiResponse<Computer[]> = {
  success: true,
  message: "List of successfully obtained computers",
  data: listOfComputers,
};

// Validar si la data es null o existente
const result = response.data ? response : "Error getting list of computers";

console.log(result);