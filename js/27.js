const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/todos";
const url3 = "https://jsonplaceholder.typicode.com/users";

const consultarAPI = async () => {
  try {
    //iniciar medicion de codigo
    const inicio = performance.now();
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

    const fin = performance.now();
    console.log(`El resultado de la primera: ${fin - inicio}ms`);
  } catch (error) {
    console.log(error.message);
  }
};
consultarAPI();

const consultarAPI2 = async () => {
  try {
    const inicio = performance.now();
    //Este llama y se conecta a la base de datos
    //Nos da consultas paralelas
    const [response, response2, response3] = await Promise.all([
      fetch(url),
      fetch(url2),
      fetch(url3),
    ]);

    //Nos deuelve todo en json
    const [data, data2, data3] = await Promise.all([
      response.json(),
      response2.json(),
      response3.json(),
    ]);
    console.log(data);
    console.log(data2);
    console.log(data3);
    //Estas se muestran con la perosna de plicias
    const fin = performance.now();
    console.log(`El resultado de la segunda es: ${fin - inicio}ms`);
  } catch (error) {
    console.log(error);
  }
};
consultarAPI2();
