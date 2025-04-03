//Manipular elementos HTML con JS
const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");
//Para cambiar texto
heading.textContent = "Nuevo heading";
heading.id = "nuevo Id";
//eliminar
heading.removeAttribute("id");

//
const inputNombre = document.querySelector("#nombre");
inputNombre.value = "Nuevo valor";

inputNombre.dataset.nombre = "input";
//cambias el nombre
enlaces[0].textContent = "El nuevo enlace";
console.log(enlaces);

enlaces.forEach((enlace) => (enlace.textContent = "Nuevo Enlace"));
