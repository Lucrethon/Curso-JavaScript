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

// ------------------ Parámetro por defecto ---------------

const sumar = (a=0, b=0)=> { //los parametros por defecto son los que definimos por defecto cuando no se pasa ningun valor para ese parametro 
    console.log(a+b);
};

sumar(16 + 5
);

// ----------------- Parametros Rest ---------------

//generalmente no se pueden utilizar mas parametros de los indicados en una funcion 
//con el parametro rest podriamos hacerlo 
//el parametro rest se esribe : "...nombreParametro"
//este devuelve un array 

const sumarRest = (frase, ...num) => {
    //como num es un array, tenemos que hacer la operacion de otra forma 
    let resultado = 0; //cuando se declara una variable sin inicializarla, el valor por defecto es undefined 
    for (let i = 0; i < num.length; i++) {
        resultado += num[i];
    }; 
    console.log(`${resultado} + ${frase}`)
}; 
//rest siempre es el ultimo parametro de todos porque se asume que va a tener una serie indefinida de objetos

sumarRest("juan", 12,15,13,4);

//---------------Destructuracion -----------------------
//permite "desempacar" valores de arreglos o propiedades de objetos en variables distintas de una manera mucho más limpia y legible.

// en objetos 

let usuario = {
    nombre : "Lucas",
    apellido : "Dalto", 
    edad : 27,
}; 

//forma tradicional de acceder a un elemento 
let nombreObjeto = usuario.nombre

//con destructuracion 
const {nombre, edad} = usuario;
console.log(nombre); //"Lucas"
console.log(edad); //"27"

//en arrays 

const colores = ["rojo", "verde", "amarillo", "azul"]; 

// Extraemos los primeros dos elementos
const [primero, segundo] = colores;

console.log(primero); // "rojo"
console.log(segundo); // "verde"

//truco: Usa comas para ignorar valores.

const [uno, , dos] = colores; 
console.log(uno) //"rojo"
console.log(dos) //"amarillo"

//-----------------------Operadores -------------------

//---------operador ternario ------------

//el operacion ternario es igual que el if ("?"), else (":")

let numero = 9

//forma tradicional 

if (numero >= 18) {
    console.log("es mayor de edad")
}
else {
    console.log("es menor de edad")
}; 

//Con operador ternario 

(numero >= 18) ? console.log("es mayor de edad") //se usa ? para el caso de exito
               : console.log("es menor de edad") //se usa : para el caso de false 

//operador ternario anidado y bloque de codigo

let nota = 93;

resultado = nota >= 90 ? (console.log("A"), console.log("supera las expectativas")) //en vez de hacer un bloque de codigo con {}, se hace con ()
          : nota >= 80 ? console.log("B") 
          : "C";

// -------- operador spread ---------

//es el operador del parametro spread 
//lo que hace es deconstruir un array 

//si se tiene: 

let valor1 = "valor1"
let valor2 = "valor2"
let valor3 = "valor3"

// y se hace: 

console.log(valor1, valor2, valor3); //salida -> "valor 1 valor 2 valor 3"

//para tener la misma salida con los valores estando en un array, se hace lo siguiente: 

let arr = [valor1, valor2, valor3]; 

console.log(...arr); //salida -> "valor 1 valor 2 valor 3"
//se hace una destructuracion de todos los elementos del array



//tambien el operador spread se utiliza para añadir arrays a otros arrays 

arr = ["manzana", "pera", "cambur"]; 
let arr2 = ["durazno", "parchita"]; 

//como puedo colocar el array 2 en el array 1?
//si se unen los arrays de este modo:

arr.push(arr2)
console.log(arr) //Salida -> ["manzana", "pera", "cambur", Array]

arr.splice(3, 1); //eliminamos el array de arr para tenerlo como estaba antes 

//se puede hacer tambien lo siguiente 

for (let fruta of arr2) {
    arr.push(fruta)
}; 
console.log(arr); //Salida -> ["manzana", "pera", "cambur", "durazno", "parchita"]

arr.splice(3, 2); //eliminamos las frutas agregadas para tener el array original 

//no obstante, la forma mas practica de hacerlo es: 

arr.push(...arr2);
console.log(arr) //Salida -> ["manzana", "pera", "cambur", "durazno", "parchita"]

arr.splice(3, 2); //eliminamos las frutas agregadas para tener el array original 

//tambien se pueden concatenar arrays
//para concatenar dos arrays sin tener que modificar uno de ellos sino teniendo un valor nuevo, se have lo siguiente: 

let arr3 = [...arr, ...arr2];
console.log(arr3); //Salida -> ["manzana", "pera", "cambur", "durazno", "parchita"]
//arr3 es un elemento completamente diferente 


//tambien podemos destruccturar un array para pasarlo como parametros a una funcion 

const funcion = (num1, num2) => {
    console.log(num1 + num2)
}; 

let nums = [6, 2]; //para los elementos por separado de este array como parametros, se usa el operador spread: 

funcion(...nums); //el operador spread descompone el array y pasa los elementos por separado. Es lo mismo que hacer: 
funcion(nums[0], nums[1])


