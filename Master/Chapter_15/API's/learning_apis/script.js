"use strict";

//una API es como un "paquete" de funciones que reciben datos y devuelven una funcionalidad, un resultado, etc y nosotros no sabemos como funciona a nivel interno

//todas las funciones nativas de JS pueden considerarse APIs, porque a nivel interno no sabemos como funcionan, pero nos devuelven un resultado

//las mas comunes son las API rest: estas no son internas del lenguaje, sino que se envían a otro sitio web a cambio de información. Envio mediante una solicitud http una petición y la API me devuelve un conjunto de datos

//las APIs internas de JS son: 

//------------Objeto Date-----------------

//el obeto Date es un constructor

let fecha = Date; 
console.log(fecha) //Salida -> "ƒ Date() { [native code] }" Date es una funcion. Se llama con poréntesis 

fecha = Date();
console.log(fecha) //Salida -> "Thu May 14 2026 18:48:34 GMT-0400 (Venezuela Time)"

//al ser el objeto Date un constructor, podemos acceder a los metodos que tiene mediante __proto__
fecha = Date().__proto__;
console.log(fecha)

//al ser un constructor, podemos crear un objeto 
fecha = new Date(); //esto es ya un objeto , por lo que ahora si puede trabajar con metodos y propiedades
console.log(fecha);

//get date()

console.log(fecha.getDate()) // -> "14" dice el dia del mes en el que estamos (14 de mayo)

//getDay()

console.log(fecha.getDay()) // -> "4" nos devuelve el dia de la semana en que estamos (jueves)

// Domingo -> 0
// Lunes -> 1
// Martes -> 2
// Miercoles -> 3
// Jueves -> 4
// Viernes -> 5
// Sabado -> 5

//getMonth()

console.log(fecha.getMonth()) //-> "4" Mayo
//estas funciones trabajan con indices, por lo que empiezan desde el 0 

// Enero -> 0
// Febrero -> 1
// Marzo -> 2
// Abril -> 3
// Mayo -> 4
// Junio -> 5
// Julio -> 6
// Agosto -> 7
// Septiembre -> 8
// Octubre -> 9
// Noviembre -> 10 
// Diciembre -> 12

//getYear()

console.log(fecha.getYear()); //-> "126" Nos devuelve el año actual menos 1900. Para saber el año actual se le suma 1900

console.log(fecha.getYear() + 1900) //2026

//getHours()

console.log(fecha.getHours()) //-> la hora en la que se llama la funcion 

//getMinutes()

console.log(fecha.getMinutes()) //-> El minuto en el que se llama la funcion 

//getSeconds()

console.log(fecha.getSeconds()) //-> El segundo en el que se llama la funcion 

//------------ Pasando parámetros al constructor Date() -----------------

// Creando fechas con Milisegundos

// Si le pasamos un número, Date lo interpreta como milisegundos transcurridos desde el 1 de enero de 1970 (Tiempo Epoch / UNIX).
let fechaMilisegundos = new Date(1672545600000); 
console.log(fechaMilisegundos); //-> Muestra el cálculo exacto (ej. "Sun Jan 01 2023 00:00:00 GMT-0400...")


// Creando fechas con Cadena de Texto (String)

// Si le pasamos un string, JS interpretará la fecha basándose en su formato (formato ISO 8601 es el más seguro y recomendado).
let fechaString = new Date("2024-12-25T15:30:00");
console.log(fechaString); //-> Muestra la fecha pasada en el string: "Wed Dec 25 2024 15:30:00 GMT-0400..."


// Creando fechas con múltiples parámetros numéricos (Año, Mes, Día, etc.)

// Podemos pasar los componentes de la fecha como números: new Date(año, mes, día, horas, minutos, segundos, milisegundos).
// OJO: Recuerda que los meses comienzan desde 0 (0 = Enero, 11 = Diciembre).
let fechaNumeros = new Date(2025, 0, 15); // 15 de Enero de 2025
console.log(fechaNumeros); //-> Muestra la fecha con los parámetros indicados: "Wed Jan 15 2025 00:00:00 GMT-0400..."

//-------------- Creando un reloj  --------------

