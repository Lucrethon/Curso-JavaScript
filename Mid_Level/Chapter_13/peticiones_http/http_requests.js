// Peticiones HTTP

// Definición: son las peticiones de informacion que hace un cliente a un setvidor


// Cliente & Servidor: los usuarios somos clientes que solicitamos informacion a los distintos servidores de diferentes paginas web (Youtube, Facebook, etc )


// No guardan información



// Datos Estructurados (JSON)


// Definición, Usos y Sintaxis

objeto = {
    variable1 : "Lucas", 
    variable2 : 24,
}

json = {
    "variable1" : "Lucas", 
    "variable2" : 24,
}
//la diferencia entre un objeto (o array asociativo) y un json es que las variables del json van con comillas, pero las variables se llaman de la misma manera 

console.log(objeto);
console.log(json);

console.log(objeto.variable1);
console.log(json.variable1);


// Serialización y Deserialización

//cuando un json esta serializado, significa que el json es una cadena de texto
// Método stringify() - Convierte un dato de JavaScript en una cadena de texto JSON (serializar)

jsonSerializado = JSON.stringify(json);
console.log(jsonSerializado);
console.log(typeof jsonSerializado);


//Cuando un json esta Deserialización, significa que no es un string
// Método parse() - Convierte un string con estructura JSON a Formato JSON (deserializar)

jsonDeserializado = JSON.parse(jsonSerializado);
console.log(jsonDeserializado);
console.log(typeof jsonDeserializado);

//cuando enviamos y recibimos datos JSON, esos datos estan serializados 

// JSON PolyFill - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse



// ) AJAX

// Introducción e instalación del servidor

// Objeto XMLHttpRequest

const request = new XMLHttpRequest();
console.log(request);


// Enviar peticiones GET
//el metodo .open es el que abre una peticion GET o POST. Recibe dos parametros: el tipo de peticion (GET o POST) y la url del servidor



//el metodo .send envia la peticion 


//console.log(request.responseText); // -> No va a mostrar nada 

//para que nos devuelta la informacion con la propiedad "responseText" del objeto XMLHttpRequest, el codigo de respuesta (propiedad readyState) debe ser 3 o 4 y el status (propiedad status) esta en 200

//onreadystatechange es un evento que detecta el cambio de readyState y nos permite hacer algo cada vez que  cambia (0,1,2,3,4)
//el onreadystatechange (readystatechange) esta por defento en null, pero es un evento que podemos trabajar 

//Estado 1: la peticion se creo correctamente 
//Estado 2: la solicitu se envio correctamente (fue recibida correctamente)
//Estad0 3: la peticion se esta procesando 
//Estado 4: ya la peticion nos dio una respuesta y el resultado se puede utilizar 

//cuando el estado es 3 o 4, la peticion ya esta devolviendo la informacion correctamente 


//ESTO SE HACIA ANTES
request.addEventListener("readystatechange", () => {
    console.log(request.readyState)
    if(request.readyState == 4 && request.status == 200){
        console.log(request.responseText) //response es una propiedad del objeto XMLHttpRequest
    }

})

//La forma correcta de hacerlo ahora es utilizando el evento "load"

request.addEventListener("load", () => {
    let respuesta; 

    if (request.status == 200) respuesta = request.response;
    else respuesta = "no se ha encontrado el archivo"
    console.log(respuesta)
    console.log(typeof respuesta) //aqui el objeto es un string porque esta serializado
    
    let descerialzado = JSON.parse(respuesta); //aqui se descerializa el objeto

    console.log(descerialzado);
    console.log(typeof descerialzado);
    
});

//cuando la url no es correcta, hay un problema con los codigos de respuesta. Los mas comunes son: 
//404: no se encontro el archivo o url 
//los codigos de respuesta se ven con la propiedad status 
//entonces para mostrar un resultado se tienen que hacer dos validaciones: que el readyState sea 4 y que el status sea 200, que significa que todo esta bien 

request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();





// Trabajar el resultado de las peticiones

// Objeto ActiveXObject: el objeto XMLHttpRequest (y ajax en general) no funciona en internet explorer, por eso se utiliza ActiveXObject. Pero para eso se tiene que verificar en que navegador esta el usuario 

let peticion;

if (window.XMLHttpRequest) { //en caso se que el objeto XMLHttpRequest exista (los nuevos navegadores lo sorportan)
    peticion = new XMLHttpRequest();
} else {
    peticion = new ActiveXObject("Microsoft.XMLHTTP");

};

// Nueva forma de trabajar el resultado

// --------- Enviar peticiones POST -----------
//en las peticiones post, los datos no se envian por una url. Se envian a traves del metodo post
//con get hay una restriccion en la cantidad de datos que se pueden enviar (la cantidad de caracteres maximos de una url es el maximo de datos que se puede enviar con una peticion GET). Con post no
//es preferible post para el envio de datos sensibles (contraseñas, numeros de tarjeta, etc), get no 
//post admite cualquier tipo de dato, get solo admite caracteres ASC-II que son los caracteres normales 
//get no es recomendable para disparar acciones, post si
//es mas facil hackear petciones get que peticiones post

const request_post = new XMLHttpRequest();

request_post.open("POST", "https://jsonplaceholder.typicode.com/posts");

const json1 = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}

const jsonSerializado1 = JSON.stringify(json1);

//para hacer peticiones post, se tiene que ejecutar el metodo setRequestHeader. Se llama antes de send y despues de open
//primer parametro: encabezado
//segundo parametro: tipo de contenido o valor

request_post.setRequestHeader("Content-type", "application/json;charset=UTF-8");


request_post.addEventListener("load", () => {
    let respuesta; 

    if (request_post.status == 200 || request_post.status == 201) respuesta = request_post.response;
    else respuesta = "no se ha encontrado el archivo"
    console.log(respuesta)
    console.log(typeof respuesta)
    console.log(JSON.parse(respuesta))

});

request_post.send(jsonSerializado1);

//todo esto se puede hacer de forma mas fetch. Fetch remplazo a Ajax 

