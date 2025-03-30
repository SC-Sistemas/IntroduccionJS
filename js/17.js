//Array metodos
const tecnologias = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];
const numeros = [10, 20, 30];

//Filter
//Sirve para sacar un elemento del arreglo, o mantener un elemento en el arreglo y sacar los demas
//Itera en cada uno de estos elementos del array
//Filta las tecnologias y saca todos
//const nuevoArray = tecnologias.filter((tech) => console.log(tech));

//Filtra las tecnologias y sacar solamente la de HTML
// const nuevoArray = tecnologias.filter((tech) => tech !== "HTML");

// //Funcion expression
// // const tecnologias2 = tecnologias.filter(function (tech) {
// //   //Accede a cada elemento del arreglo
// //   //console.log(tech)
// //   //selecciona un solo elemento, y lo retorna guardado en tecnologias2
// //   if (tech !== "HTML") {
// //     return tech;
// //   }
// // });

// console.log(nuevoArray);
//Saca el numero 10 de resultados
//Filter usa los string y los int
// const resultado2 = numeros.filter((numero) => numero !== 10);
// console.log(resultado2);

//Includes
//Sirve para poder revisar ei el array incluye cierto dato, si lo incluye regresa
//Con true
//Un metodo es una accion de una variable o arreglo u objeto
// const resultado = tecnologias.includes("CSS");
// console.log(resultado);

//Some - Devuelve si al menos uno cumple la condicion
// //Este solamente te devuelve true
// const resultado = numeros.some((numero) => numero > 15);

//Find - Devuelve el primer elemento que cumple una funcion
// const resultado = numeros.find((numero) => numero > 15);

// //Every - Retorna true or false si todos cumplen la condicion
// const resultado = numeros.every((numero) => numero > 15);

//Reduce - Retorna un acumulado del total
//Este sirve
const resultado = numeros.reduce((total, numero) => {
  console.log(total);
  console.log(numero);
}, 0);

console.log(resultado);
