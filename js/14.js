//Funciones - Fuction Expression
//Esta funcion la detecta como una variable y no como una funcion
//Lo que hace que si tu ejecutas la funcion antes de su declaracion esta no funcionara
//Ya que javascript la toma como variable
 const sumar =function (numero=0, numero1=0 ){
    console.log(numero + numero1)
}
sumar(10,20)
sumar(10,1)