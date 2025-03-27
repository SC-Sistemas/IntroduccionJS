//Objetos - Manipulacion
//Coleccion de propiedades

const productos ={
    //Propiedad  -  Valor
    nombre: "tablet",
    precio: 300,
    disponibilidad: false
}
//No te deja darle mas valores
Object.freeze(freeze);

//Solamente modifica los valores
Object.seal(productos);
//Object Sirve para aplicar cambion o funciones a tu objeto creado

//Reescribir un valor
productos.disponibilidad = true
//Si no existe una igual, la va agregar
productos.imagen = 'imagen.jgp'
//Eliminar propiedad
delete productos.precio

//para que nadie pueda eliminar o modificar mi objeto


console.log(productos)