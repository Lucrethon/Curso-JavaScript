//Ejercicio 1: Cofla quiere saber cuantas personas cursan el semestre y cuantas no. Esta informacion la tiene una API de su universidad. Se tiene que: 

//Crear un sistema que le permita obtener esa informacion 
//Mostrarla ordenadamente en un sitio web



//con axios (importancia del try catch)

const getAprobados = async ()=> {

    let aprobados = document.querySelector(".aprobados")
    try {
        let resultado = await axios("estudiantes.txt");
        aprobados.innerHTML = `Estudiantes Aprobados: ${resultado.data.aprobados}`;

    } catch(err) {
        aprobados.textContent = "La API fallo";
    }

};

const getReprobados = async ()=> {

    let reprobados = document.querySelector(".reprobados")

    try{    
        let resultado = await axios("estudiantes.txt"); //el resultado lo almacenamos aqui sin usar otro then
        reprobados.innerHTML = `Estudiantes Reprobados: ${resultado.data.reprobados}`;
} catch(err) {
        reprobados.textContent = "La API fallo";
    }

};


document.getElementById("button-aprobados").addEventListener("click", getAprobados);
document.getElementById("button-reprobados").addEventListener("click", getReprobados);

//Ejercicio 2:  Obtener la lista de "To-Dos" (GET)
//Crea una función llamada obtenerTareas que haga una petición GET a la URL: 
// [https://jsonplaceholder.typicode.com/todos]

//Debe imprimir en la consola los primeros 5 títulos de las tareas recibidas.

const obtenerTareas = async ()=> {
    
    try {
        let tareas = await axios("https://jsonplaceholder.typicode.com/todos"); 
        console.log(tareas.data.slice(0, 5));
    } catch (err) {
        console.log("La API falló")
    };
};

obtenerTareas();

//Ejercicio 3: El Buscador de Usuarios (GET con parámetros)
// Escribe una función llamada buscarUsuario que reciba un id.

// Debe hacer la petición a:
// (https://jsonplaceholder.typicode.com/users/ID_AQUÍ).

// Si el usuario existe, debe imprimir el nombre y el email.
// Extra: Añade un bloque try/catch para manejar el error si el ID no existe (por ejemplo, el ID 999).

const buscarUser = async (userID)=> {

    try {
        let respuesta = await axios(`https://jsonplaceholder.typicode.com/users/${userID}`); //estoy accediendo a un user ID especifico 
        const user = respuesta.data; 
        console.log(`Usuario ${userID} encontrado.`);
        console.log(`Nombre: ${user["name"]}`);
        console.log(`Username: ${user["username"]}. Correo: ${user["email"]}`);

    } catch(err) {
        console.log(`Usuario ${userID} no encontrado`)
    };
};

buscarUser(2);


//Ejercicio 4: Crear un nuevo post (POST)
// Crea una función llamada publicarPost que reciba un objeto con title y body.

// URL: [https://jsonplaceholder.typicode.com/posts]

// Debes enviar esos datos y, al recibir la respuesta, imprimir el ID que la API le asignó al nuevo post (esto confirma que se "creó" correctamente en el servidor).

const publicarPost = async (title, body) => {

    try {
    const respuesta = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title, 
        body, 
        userId: 1,
    });
    console.log(`Exito! Usuario `, respuesta.data)
    } catch(error) {
        console.log("Error al publicar", error)
    };
}; 

publicarPost("Aprendiendo", "Ya se dominar Axios shjnsdk"); 

//Ejercicio 5: El "Cerrador" de Peticiones (Combinado con Closures)
// Crea una función llamada configurarApi que reciba un token de autenticación.

// Debe retornar una función que haga un GET a
// (https://jsonplaceholder.typicode.com/posts/1).

// La función retornada debe incluir el token en los headers de la petición de Axios.

// Uso esperado:
// const miApi = configurarApi("mi-token-secreto");
// miApi(); // Hace la petición enviando el token automáticamente.

const setUpApi = function (token) { //el token queda guardado en el closure 

    return async function() {

    try {
        const peticion = await axios("https://jsonplaceholder.typicode.com/posts/1", {
            headers : {
                Authorization: `Bearer ${token}` //se le pasa el token el el header a la petición
            }}
        ); console.log("Datos con token", peticion.data)
            
    } catch(err) {
        console.log(err)
    };
    } 
}

// USO REAL:
const miServicioConToken = setUpApi("12345-ABCDE");

// Ahora puedes llamar a miServicioConToken en cualquier parte del código
// y siempre sabrá qué token usar sin que se lo pases de nuevo.
miServicioConToken();