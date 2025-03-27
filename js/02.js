//Objetos
//Coleccion de propiedaes
const productos ={
    //Propiedad  -  Valor
    nombre: "tablet",
    precio: 300,
    disponibilidad: true
}
console.log(productos.nombre);

//Destructuring
//Una nueva forma de obtener extraer las propiedades de productos
const {nombre, precio, disponibilidad} = productos;
console.log(nombre)
console.log(precio)
console.log(disponibilidad)

//Objet Literal Enhacemente
//Sirve para colocar algo dentro de un objeto
//Es cuando tiene una variable o constante la fuera del objeto y la quieres agregar
 const autenticado = true
 const usuario = "juan"
 const nuevoObjeto ={
    autenticado:autenticado,
    usuario:usuario
 }
