import {
  elements,
  firstValue,
  greeting,
  lastName,
  name,
  secondValue,
} from "@/utils/var-for-functions.util";

// * Utils | Interfaces:

interface ConcatenationParams {
  greeting: string;
  name: string;
}

interface FullNameParams {
  name: string;
  lastName?: string;
}

interface ModeParams {
  mode?: string;
}

// * Utils | Funciones:

// TODO: Crea una función que reciba dos strings y retorne su concatenación.
function concatenationFunction({
  greeting,
  name,
}: ConcatenationParams): string {
  return greeting + " " + name;
}

// TODO: Escribe una función flecha que multiplique dos números.
const multiplication = (firstValue: number, secondValue: number): number =>
  firstValue * secondValue;

// TODO: Declara una función que reciba un array de strings y devuelva la cantidad de elementos.
function numberOfElements(elements: string[]): number {
  return elements.length;
}

// TODO: Crea una función que reciba un nombre obligatorio y un apellido opcional.
function fullName({ name, lastName }: FullNameParams): string {
  const expression = lastName === undefined ? " " : lastName;
  return `${name} ${expression}`;
}

// TODO: Declara una función con un parámetro modo con valor por defecto 'simple’.
function functionWithDefaultValue({ mode = "simple" }: ModeParams): string {
  return `Funcion con valor por defecto: ${mode}`;
}

// TODO: Usa rest para crear una función que reciba N nombres y los imprima en consola.
function printNamesToConsole(...names: string[]): string {
  names.forEach((n) => console.log(n));

  return names.join(", ");
  //names.forEach((n) => console.log(n));
}

const headerMessage = `
=====================================
     Presentacion de funciones
=====================================
`;

const printFunctions = `
=> concatenationFunction() => ${concatenationFunction({ greeting, name })}
=> multiplication() => ${multiplication(firstValue, secondValue)}
=> numberOfElements() => ${numberOfElements(elements)}
=> fullName() => ${fullName({ name, lastName })}
=> functionWithDefaultValue() => ${functionWithDefaultValue({})}
=> printNamesToConsole() => ${printNamesToConsole("Alex", "Luisa", "Cristian")}
`;

const outputMessage = headerMessage + printFunctions;
console.log(outputMessage);