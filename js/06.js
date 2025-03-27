//Objeto - Destructuring dos a tres objetos
const productos ={
    //Propiedad  -  Valor
    nombre: "tablet",
    precio: 300,
    disponibilidad: false
}
const cliente = {
    nombre:"Juan",
    premium:true,
    direccion:{
        calle: "Calle Mexico"
    }
}
//Extraemos el nombre de productos y clientes con su atributo nombre
//Como los dos tendrian el mismo nombre de variable estos se confundirian
//Lo mejor es asignar el nombre en la segunda variable a una variable distinta
//Como se muestra acontinuacion
const {nombre} = productos;
const {nombre:nombreCliente} = cliente;
console.log(nombre);
console.log(nombreCliente);

//Cuando tengas un que sacar el objeto dentro de otro objeto, sera necesario usar ejemplo{},
//Siendo lo que se pone adentro el objeto dentro del objeto
const {direccion:{calle}} = cliente;

console.log(calle)