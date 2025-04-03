//Fetch API, with async and await

const url = "https://jsonplaceholder.typicode.com/comments";

// fetch(url)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     //Muestra el error
//     throw new Error("Hubo un error");
//   })
//   //Envia los datos, consulta los datos
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

const consultarAPI = async () => {
  try {
    //Trata de hacer la conexion, tiene la resupestas
    const response = await fetch(url);
    //Creando el error, si hay un error
    if (!response.ok) {
      //Detiene y muestra un error
      throw new Error("Hubo un error");
    }
    //La pedimos en json
    const data = await response.json();
    //Muestra
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

consultarAPI();
