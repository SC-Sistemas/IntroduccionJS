//Solamente son importaciones
//Lo que viene diciendo el ECMAScript
//Como exportas funciones y como importas funciones
//Si no tuviera el type module no podria importar las funciones
import multiplicar, { sumar, restar } from "./funciones.js";

//importar el export default
import prueba from "./funciones.js";
const result = multiplicar(20, 10);
console.log(result);

//Archivos  muy grandes
// Cuando quiere reutilizar funciones no te dejan
// Modulos de ECMAscript
const resultado = sumar(20, 10);
const resultado1 = restar(20, 10);
console.log(resultado, " ", resultado1);
