const tecnologias = ['HTML','CSS','JavaScript','React.js','Node.js']

const react = tecnologias[3];
//El detructuring arryas
//extraer el valor con base a la posicion que esten puesto
//Aunque este html en primero y tu lo ponemos en la 
//sentencia de abajo en el lugar 3 te traera la posicion 3 de tu arreglo
//const [html, css, js, reactjs] = tecnologias

//la manera correcta para no usar tantas viables se puede usar de la siguiente forma
//en el cual extrae la posicion numero 3 dela array
const [, , , reactjs]= tecnologias

console.log(reactjs)