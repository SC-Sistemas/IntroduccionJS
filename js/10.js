const tecnologias = ['HTML','CSS','JavaScript','React.js','Node.js','Nest.js'];
//Agrega datos al arreglo
//tecnologias.push('Vite.js');
console.table(tecnologias);

//Esta es la forma mas correcta de agregar sin mutar el arreglo
// const nuevoArreglo=[...tecnologias,'Nest.js']
// console.table(tecnologias);
// console.table(nuevoArreglo);
//Eliminar el primer registro
//tecnologias.shift();

//Crear un arreglo que tenga todo sin mutarlo
// const tecnologias2 = tecnologias.filter(function(tech){
//     //Accede a cada elemento del arreglo
//     //console.log(tech)
//     //selecciona un solo elemento, y lo retorna guardado en tecnologias2
//     if(tech=='HTML'){
//         return tech
//     }
// })

//Prmero busca una variable con .map que tenga el mismo nombre y en la funcion 
//tech busca en cada uno y resplaza en el arreglo y devuelve en un nuevo 
// arreglo
const tecnologias2 = tecnologias.map(function(tech){
    if(tech === 'Node.js'){
        return 'Nest.js'
    }
    else{
        return tech
    }
})
console.log(tecnologias2)