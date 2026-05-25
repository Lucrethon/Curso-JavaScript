//----------------Ejercicios--------------------

//Ejercicio 1: "Buscador de Miembros" (GET + Desestructuración)

//En la prueba técnica te piden listar y buscar miembros. Vamos a simular esto trayendo una lista de usuarios ficticios y filtrándolos.  

// El Reto: Crea una función asíncrona llamada buscarUsuarios. Qué debe hacer:

// Hacer una petición GET usando fetch a: https://jsonplaceholder.typicode.com/users

// Esperar la respuesta y convertirla a JSON usando await.

// Recorrer el array de usuarios y, usando desestructuración, extraer únicamente el id, el name y el email de cada usuario.

// Imprimir en la terminal un formato limpio. Por ejemplo: "[ID: 1] Leanne Graham - Email: Sincere@april.biz".

// Bonus desafiante: Modifica la función para que reciba un argumento textoBuscar y solo imprima los usuarios cuyo nombre coincida con ese texto (simulando la barra de búsqueda de la app de fitness).


async function buscarUsuarios(nombre) {

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users"); //res = response. Peticion GET
        const data = await res.json(); //La data no es un solo usuario, es un array que contiene 10 usuarios adentro.

        for (let user of data) {
            const {id, name, email} = user; 
            if (name.includes(nombre)) {console.log(`ID: ${id}, Name: ${name}, Email: ${email}`)}
        };


    } catch (err) {
        console.log("Ha ocurrido un error");
    }
    
};

buscarUsuarios("Glenna Reichert");

//
//

//Ejercicio 2: El "Registro de Check-in" (POST + Envío de Datos)

// En la prueba de SweatWorks necesitas registrar check-ins enviando datos al servidor. Aquí simularemos la creación de un recurso.  

// El Reto: Crea una función asíncrona llamada crearPublicacion.

// Qué debe hacer:

// La función debe recibir tres parámetros: titulo, cuerpo y usuarioId.
// Hacer una petición POST usando fetch a: https://jsonplaceholder.typicode.com/posts
// Configurar los headers correctamente para enviar JSON ('Content-Type': 'application/json').
// En el body, enviar un objeto JSON con las tres variables que recibió la función (puedes usar la versión corta de objetos de ES6: { title: titulo, body: cuerpo, userId: usuarioId }).
// Usar await para recibir la respuesta del servidor (la API te devolverá el objeto creado con un ID ficticio como 101).
// Imprimir en la terminal: "Registro exitoso en el servidor. ID generado: 101"

async function crearPublicacion (title, body, userId) {
    
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId,
            })
        });

        const data = await res.json(); //convertir esa respuesta a JSON usando await

        console.log(`Registro exitoso en el servidor. ID generado: ${data.id}`);

    } catch (err) {
        console.log("Error al enviar información");
    }
};

crearPublicacion("titulo", "cuerpo", "userID"); 




