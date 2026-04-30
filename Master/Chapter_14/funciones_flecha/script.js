"use strict";

// Funciones Flecha
// ¿Porque aparecieron? (Funciones compactas y el uso de This)

const saludar = () => {
    console.log("hola");
};

//con las funciones flecha podemos hacer cosas que con las funciones normales no podemos: 

const saludar1 = ()=> {let nombre = "pedro"}; //podemos hacer que la funcion funcione en una sola linea cuando la expresion es corta. Tambien nos retorna el mismo valor que definimos en la misma linea 

let result = saludar1();
console.log(result); //-> pedro

//

// Si solo hay una expresión, la retornan

// Parentesis opcionales ante un solo parametro (sin parametros se requiere parentesis)

const getNmme = name=> {let given_name = name};
result = getNmme("dalto");
console.log(result);

//cuando es un solo parametro el que se pasa, podemos omitir los parentesis


// No son adecuadas para ser usadas como métodos y no pueden ser usadas como constructores

function constructorPersona (nombre, persona) {
    this.nombre = nombre;
    this.persona = persona;

}; //esto es correcto porque se esta haciendo con una funcion (correcto, aunque no comun)
//pero esto mismo no se puede hacer con una función flecha

const persona = new constructorPersona("lucas", "dalto"); 
console.log(persona.nombre)


// Retornan literales si su cuerpo está entre ( )

// This Contextual (No tienen propio this, sino que toman el de la función que lo envuelve)

//this afuera de cualquier constructor es windows 
//this hace referencia al objeto que esta llamando a la funcion que esta llamando a ese objeto

console.log(this);
console.log(window === this); //=> true

// Las reglas de modo estricto aplicadas a This, son ignoradas

//si yo trabajo con this y this no esta dentro de ningun objeto, this va a parar a window 
//en el use strict esto genera un error: por que window tiene que ser la referencia de todo this que no tenga objeto contenedor? eso es un error

function hola() {
    console.log(`Hola ${this.nombre1}`)
}; 

const objeto = {
    nombre1 : "Arnaldo",
    hola //aqui se esta haciendo referencia al metodo definido anteriormente "hola" 
    //es un shorthand de hola : console.log(`Hola ${this.nombre1}`)
    //si la propiedad es igual al valor, en vez de hacer hola : hola, se puede poner simplemente hola
}; 

objeto.hola() //-> "Hola Arnaldo"


// Función flecha invocada a través de los métodos call, apply y bind

// No tienen objeto Arguments

// No tienen propiedad del prototipo prototype

// No se puede usar Yield (por ende no se pueden usar como funciones generadoras)

// No puede contener saltos de linea entre sus parametros y su flecha

// Orden de parseo

//------------Funciones recursivas ------------


const validarEdad = (msg) => {

        try {
        if (msg) console.log(msg); //si hay un mensaje, lo muestra. esto ocurre cuando la función se llama a sí misma tras un error
        else {edad = prompt("Introduce tu edad")};
        edad = parseInt(edad); 

        if (isNaN(edad)) throw "Introduce un numero para la edad" //si edad no es un numero, aqui lanzamos un error manualmente con la palabra throw (el mensaje)
        if (edad > 18) console.log("Eres mayor de edad");
        else console.log("Eres menor de edad");
    } catch (e) { //si ocurre un error, la funcion se llama a si misma y reinicia el proceso 
        validarEdad(e) //se le pasa el mensaje de throw
    }
        
}; //en la programacion actual, no se hace esto de esta forma. Se una un while

//Si en lugar de una edad estuviéramos validando una estructura de carpetas infinita o buscando un comentario dentro de un hilo de comentarios con miles de respuestas anidadas, ahí la recursividad sería la reina.

//validarEdad()


// -------------- Clausuras --------------------

// se pueden para crear funciones personalizadas basadas en un molde general. Esto evita repetir código y hace que tu lógica sea más dinámica.

function crearSaludador(saludo) {
    return function(nombre) {
    console.log(`${saludo}, ${nombre}!`);
    };
}

const saludoEspañol = crearSaludador("Hola");
const saludoIngles = crearSaludador("Hello");

saludoEspañol("Carlos"); // "Hola, Carlos!"
saludoIngles("Alice");   // "Hello, Alice!"

//Si escribes una función dentro de otra, la de adentro tiene permiso para mirar "hacia afuera" y ver las variables de su padre.


//Ejercicio 1: Crea una función llamada crearContador que no solo incremente. Debe devolver un objeto con tres métodos:

// incrementar(): Suma 1 al valor interno.

// decrementar(): Resta 1 al valor interno.

// obtenerValor(): Muestra el valor actual.

const crearContador = function(valorInicial) {

    let contador = valorInicial;

    return {
    incrementar:  function() {
        contador++
    },

    decrementar: function() {
        contador--
    }, 

    obtenerValor: function() {
        return contador
    },
    };
}; 

const miContador = crearContador(0)
console.log(miContador.obtenerValor());
miContador.incrementar();
console.log(miContador.obtenerValor());
miContador.incrementar();
console.log(miContador.obtenerValor());

// //Ejercicio 2: El Generador de Prefijos
// Escribe una función llamada prefijador que reciba una cadena (un prefijo, por ejemplo: "Mega"). Esta función debe devolver otra función que reciba una palabra y la concatene con el prefijo original.

const prefijador = function(prefijo) {

    return function(palabra) {

        return prefijo + palabra;
    };

};

const superPrefijador = prefijador("Mega");
let resultado = superPrefijador("Vaso"); 
console.log(resultado); 

const prefijadorArrow = prefijo => palabra => prefijo + palabra; //es la misma funcion de antes pero en arrow function
//cuando hay un solo parametro, la funcuion flecha retorna el mismo parametro 
//El primer => retorna la segunda función.
//El segundo => retorna la suma de las cadenas.

const prefijoArrow = prefijadorArrow("Mega");
resultado = prefijoArrow("Man");
console.log(resultado);

// Ejercicio 3: Validador de Longitud (Privacidad)
// Crea una función llamada crearValidador que reciba un número min. Debe retornar una función que reciba un string y devuelva true si la longitud del string es mayor o igual a min, o false en caso contrario.
// El valor de min debe quedar "atrapado" en el closure.

const validador = function(min) {
    return function(texto) {
        return (texto.length >= min) //esto ya da un valor booleano
    };
};

const validar = validador(6);
console.log(validar("googlear")); 

//Ejercicio 4: El Acumulador de Sumas
// Crea una función llamada acumulador que comience con un valor inicial de 0. Cada vez que llames a la función retornada pasándole un número, esta debe sumarlo al total anterior y devolver el nuevo total.

const acumulador = function() {
    let total = 0; 
    
    return function(num) {
        let sum = total += num
        return sum
    };
};

let suma = acumulador();
console.log(suma(5));
console.log(suma(10));
console.log(suma(10));

// //Ejercicio 5: Simulador de Carrito de Compras (Avanzado)
// Crea una función crearCarrito. Debe mantener una lista de productos (un array) de forma privada. Debe retornar un objeto para:

// agregar(producto): Añade un nombre de producto al array.

// verCarrito(): Devuelve una copia de la lista actual.

// limpiar(): Vacía la lista de productos.

const shoppingCart = function() {
    let cart = []; 

    return {
        add : function(producto) {
            cart.push(producto);
        }, 
        watch : function() {
            return [...cart]; //El operador spread [...] crea una copia exacta. Asi no acceden al carrito original
        }, 
        clean : function() {
            cart.length = 0; //vaciar el carrito
        },
    };

};

const carrito = shoppingCart(); 
carrito.add("melon");
carrito.add("manzana"); 
console.log(carrito.watch());
carrito.clean();
console.log(carrito.watch());
