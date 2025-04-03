// Evaluacion de corto circuito
//Cuando expresion se trata de truthye
const auth = true;
//un truthy es java es cuando una variable o constante se hace variable
// El sistema lo toma como true por que tiene un contenido
// Cuando es falsy se considera como falsy si es false o 0
//Simplemente cuando no contiene nada
const user = {};
//Si el usuario esta autenticada, envia el mensaje
user && console.log("Usuario autenticado");
//en este caso como no tiene nada definido se considera como un corto circuito
