//Iterando Arrays con ciclo for
const tecnologias = ['HTML','CSS','JavaScript','React.js','Node.js'];
//Codigo debe ser de forma dinamica que se adapate a todas las situaciones
// for(let i = 0;i<tecnologias.length;i++){
//     console.log(tecnologias[i])
// }

//forEach, sirve para iterar, el nuevo de iteracioens que da depende de los 
// atributos que contiene el arregl
//Lo que tu pones en el parentesis de funciones, carga todos los datos del arerglo
//Sabe las veces que se tiene que ejecutar
tecnologias.forEach(function(tech){
    console.log(tech)
})

//map
//Crea un nuevo arreglo en base a la condicion y fucion que le agreguees
const arrayMap = tecnologias.map(function(tech){
    return "Hola"
})
console.log(arrayMap);

//for ... of
for(let tech of tecnologias){
    console.log (tech)
}

