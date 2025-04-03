//Fetch API con Promises
//Proporciona una interfaz para recuperar datos atravez de la red

//Promise
//Un objeto que va estar disponible estar a futuro

const url = "https://jsonplaceholder.typicode.com/comment";

fetch(url)
  //Aqui solomanete tienes la conexion a la base de datos
  // SI tengo una respuesta damelo en json
  .then((response) => {
    // //Nos muestra la conexion
    // console.log(response);
    // return response.json();
    if (response.ok) {
      return response.json();
    }
    //Muestra el error
    throw new Error("Hubo un error");
  })
  //Envia los datos, consulta los datos
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error.message);
  });
