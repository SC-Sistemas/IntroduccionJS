//Objeto - Unir dos o mas objetos
const productos ={
    //Propiedad  -  Valor
    nombre: "tablet",
    precio: 300,
    disponibilidad: false
}
const cliente = {
    nombre:"Juan",
    premium:true
}
// const carrito ={
    // cantidad: 1,
    // ...productos spread operator
// }

//Unir producto y cliente en un mismo objeto
const nuevoObjeto={
    ...productos,
    ...cliente
}
console.log(nuevoObjeto);

const NuevoObjeto2 = Object.assign(productos, cliente)
console.log(NuevoObjeto2)