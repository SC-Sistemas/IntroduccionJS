//Ternarios
const auth = true;

const saldo = 1000;
const pagar = 1220;
const tarjeta = true;

//Los operadores ternarios te ayudan a tener todo en una linea de codigo
// if (auth) {
//   console.log("Usuario autenticado");
// } else {
//   console.log("No autenticado, ir a Login");
// }
//Lo que tenemos como siguiente es lo mismo que lo anterior
//Una diferencia que nuestra condicion termina hasta el ? y nuestros
//resultados son el primero si se cumple y el que va despues de los dos puntos
//El que no se cumple
//auth ? console.log("Usuario autenticado"); :console.log("No autenticado, ir a Login");

saldo > pagar ? console.log("Si puedes pagar") : console.log("No puedes pagar");

//Ternario anidado
//En este caso este esta vinculado esta agrreado
saldo > pagar || tarjeta
  ? console.log("Si puedes pagar")
  : console.log("No, no puedes pagar");
