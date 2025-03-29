//Funciones que retornan valores
//Esta se utilizan para que ese resutaldo que despliega sea entregado a otra funcion
//Ya que se puede necesitar en otro proceso
//Para todos tiene que usar 
const sumar =function (numero1=0, numero2=0 ){
    return numero1 + numero2
}
const resultado = sumar(10,20)
console.log(resultado)
sumar(10,20)
sumar(10,1)