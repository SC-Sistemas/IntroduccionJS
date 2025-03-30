//Optional chaining ' ? '
//Permite acceder las propiedades de un objeto si existe o no
const alumno = {
  nombre: "Juan",
  clase: "Programacion 1",
  aprobador: true,
  examenes: {
    examen: 90,
  }
};

//el signo de interrogacion revisa si existe el metoodo o el apartado
//examenes, si no existe lo marca como indefinido
//si si esta da el resultado
console.log(alumno.examenes?.examen1);
console.log("Despues de ALUMNO");

//Nullish coalescing operator (???)
//Retorna el valor de lado derecha cuando 
