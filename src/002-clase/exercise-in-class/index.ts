// * Utils | Funciones:

// TODO: Crea una función que reciba dos strings y retorne su concatenación.
function concatenationFunction(greeting: string, name: string) {
  return greeting + " " + name;
}

// TODO: Escribe una función flecha que multiplique dos números.
const multiplication = (firstValue: number, secondValue: number) =>
  firstValue * secondValue;

// TODO: Declara una función que reciba un array de strings y devuelva la cantidad de elementos.
function numberOfElements(elements: string[]) {
  return elements.length;
}

// TODO: Crea una función que reciba un nombre obligatorio y un apellido opcional.
function fullName(name: string, lastNameOptional?: string) {
    return `${name} ${lastNameOptional}`;
}

// TODO: Declara una función con un parámetro modo con valor por defecto 'simple’.
function functionWithDefaultValue(mode: string = "simple") {
  return `Funcion con valor por defecto: ${mode}`;
}

// TODO: Usa rest para crear una función que reciba N nombres y los imprima en consola.
function printNamesToConsole(...names: string[]) {
  console.log("Nombres recibidos:");
  names.map((names) => console.log(names));
  //names.forEach((n) => console.log(n));
}

console.log("Funcion de concatenacion para mostrar nombre completo:");