//Arrow function
//Se parece a la function expression
//no utilizan el function
//Si la llamas antes de declarar te sale error como el function expression
//Puedes tener una funcion en una linea
// const sumar =(numero=0, numero1=0 )=>console.log(numero + numero1)

const sumar =function (numero=0, numero1=0 ){
    console.log(numero + numero1)
}