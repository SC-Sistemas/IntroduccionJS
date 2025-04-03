//Optional chaining ' ? '
//Permite acceder las propiedades de un objeto si existe o no
const alumno = {
  nombre: "Juan",
  clase: "Programacion 1",
  aprobador: true,
  examenes: {
    examen1: 90,
  },
};

//el signo de interrogacion revisa si existe el metoodo o el apartado
//examenes, si no existe lo marca como indefinido
//si si esta da el resultado
console.log(alumno.examenes?.examen1);
console.log("Despues de ALUMNO");

//Nullish coalescing operator (???)
//Retorna el valor de lado derecha cuando el valor del lado izquierdo es nulo o undefined
const pagina = null ?? 1;

//Optional chaining '?'
//Permite acceder las propiedades de un objeto si existe o no
const precios = null ?? 2;
console.log(precios);
const producto = {
  nombre: "Basico estandarizado",
  activo: true,
  coberturasPrecio: {
    basica: 1200,
    regular: 2000,
    pro: 3000,
  },
};
console.log();

if (producto.coberturasPrecio?.pro) {
  const pro = producto.coberturasPrecio.pro;
  console.log("Si hay pro: ", pro);
} else {
  console.log("No existe la pro");
}
