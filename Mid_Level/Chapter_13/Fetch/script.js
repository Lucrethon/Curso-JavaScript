
// ---------- Fetch --------------

// _ Introducción

//es una forma de trabajar con el objeto XMLHttpRequest. Es su remplazo 
//Siempre nos devuelve una promesa encapsulada 
//la respuesta que nos da la peticion esta encapsulada en una promesa 

// _ Basado en promesas

// _ Objeto fetch

//--------------------- Peticion POST sin fetch ------------------------ 

// const request_post = new XMLHttpRequest();

// request_post.open("POST", "https://jsonplaceholder.typicode.com/posts");

// const json1 = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// }

// const jsonSerializado1 = JSON.stringify(json1);

// //para hacer peticiones post, se tiene que ejecutar el metodo setRequestHeader. Se llama antes de send y despues de open
// //primer parametro: encabezado
// //segundo parametro: tipo de contenido o valor

// request_post.setRequestHeader("Content-ts> {
//     let respuesta; 

//     if (request_post.status == 200 || request_post.status == 201) respuesta = request_post.response;
//     else respuesta = "no se ha encontrado el archivo"
//     console.log(respuesta)
//     console.log(typeof respuesta)
//     console.log(JSON.parse(respuesta))

// });

// request_post.send(jsonSerializado1);

//----------------------------------------------------

let request = fetch("https://jsonplaceholder.typicode.com/posts"); //fetch tiene el metodo get por defecto. Si no lo cambiamos, se asume que es get

console.log(request); //va a mostrar una promera pendiente 

request.then(res=> console.log(res)) //no vamos a tener acceso a la data porque esta encapsulada 


// _ text()

//request.then(res => console.log(res.text()))
//nos va a devolver la promesa desencapsulada en el formato que nosotros queremos, con el valor que nosotros queremos
//pero como sigue siendo una promesa, tenemos que usar otro then: 

request
    .then(res => res.text())
    .then(res => console.log(res))

//se puede simplificar de la siguiente manera: 

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.text())
    .then(res => console.log(res))



// _ json()
//si queremos un json en vez de un texto, sencillamente cambiamos el metodo text por el metodo json

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(res => console.log(res))


//------------ Peticion POST con Fetch ------------------- 

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
    }),
    headers: {
        "Content-type": "application/json;charset=UTF-8"
    }
})
    .then(res => res.json())
    .then(res => console.log(res))

//-------------------------------------

// _ blob()

const imagen = document.querySelector(".imagen");

fetch("Hollow_Pygame.png")
    .then(res => res.blob()) //nos da el objeto blob
    .then(img => imagen.src = URL.createObjectURL(img)) //se lee el objeto blob (la imagen)

//URL : el objeto URL es un objeto y API nativa de JS
//createObjectURL : este metodo de URL nos crea una URL para que el objeto que se le pase se pueda visualizar 
//lo que devuelve este metodo es un tipo de dato blob que lo que hace es crear un tipo de ruta imaginaria en donde se almacena la imagen que le pasamos, pero solamente se almacena durante esta peticion http
//dentro de la etiqueta img de html, se necesita una URL para visualizar una imagen 





// _ formData()

// _ arrayBuffer()