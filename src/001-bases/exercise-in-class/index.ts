// * Utils | Enum:

enum OrderStatus {
  Pendiente = "Pendiente",
  Enviado = "Enviado",
  Entregado = "Entregado",
}

let current: OrderStatus = OrderStatus.Pendiente;
const message1 = `Estado actual de la orden: ${current}`;

current = OrderStatus.Enviado;
const message2 = `Estado actual de la orden: ${current}`;

current = OrderStatus.Entregado;
const message3 = `Estado actual de la orden: ${current}`;

// * Utils | Variables:

let myString: string = "Hola TypeScript";
let myNumber: number = 42;
let myBoolean: boolean = true;
let myNull: null = null;
let myUndefined: undefined = undefined;

const headerMessage = `
=====================================
     Presentacion de variables
=====================================
`;

const printVariables = `
=> String: ${myString}
=> Number: ${myNumber}
=> Boolean: ${myBoolean}
=> Null: ${myNull}
=> Undefined: ${myUndefined}
`;

const outputMessage = headerMessage + printVariables;
console.log(outputMessage);

const headerMessageTuple = `
=============================================
     Presentacion de ejercicio integrado
=============================================
`;

const userLocation: [number, number] = [-2.19616, -79.88621];

const printIntegratedExercise = `
=> Tupla: Ubicacion del usuario (lat, lng) | Guayaquil, Ecuador: ${userLocation}
=> Ejercicio con enum:
- Primera orden: ${message1}
- Segunda orden: ${message2}
- Tercera orden: ${message3}
`;

const outputMessageIntegratedExercise = headerMessageTuple + printIntegratedExercise;
console.log(outputMessageIntegratedExercise);