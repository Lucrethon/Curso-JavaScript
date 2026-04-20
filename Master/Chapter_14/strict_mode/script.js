"use strict";

// --------- "use strict" (modo estricto)--------------

// convierte errores de JavaScript en excepciones

// Mejora la optimización de los errores y consigue mejores tiempos

// Evita sintaxis usadas en posteriores a ES6

// No permite que el programador realice una "mala sintaxis"

//para usar ese modo en el bloque global se utiliza al inicio del archivo: 
//"use strict";


//Variables declaradas
// nombre = "lucas";
// console.log(nombre) //esto nos va a tirar un error porque nombre no esta declarada


//Modificar propiedades (defineProperty() y writeable)

const obj = {};


Object.defineProperty(obj, "nombre", {value: "Lucas", writable: false}); //esto es una forma de crear una propiedades a un objeto. 
//el parametro "writeable" significa que esa propiedad no se puede reescribir. Si se coloca: 

//obj.nombre = "roberto"; //=> Esto tira un error. Solo es una propiedad de lectura 
//con el modo estricto pasa eso. Si se le quita el modo estricto, si deja cambiarla 

console.log(obj.nombre); // => Lucas


//Agregar propiedades 

const obj1 = {
    nombre : "juan"
}; 

Object.preventExtensions(obj1); //con esto estamos prohibiendo que se definan nuevas propiedades 

//obj1.apellido = "ramirez" //=> Esto tira el error: Cannot add property apellido, object is not extensible. 
//esto deja de ejecutar el programa. Convierte una excepcion en un error

//No se puede agregar propiedades a un String

let str = "lucas dalto";
//str.canal = "soy dalto"; //esto no se puede hacer. Sin el use strict, cuando se llama a esta propiedad tira undefined. Con strict directamente tira un error: Cannot create property 'canal' on string 'lucas dalto'


//No existen las multiples variables en una funcion 
//Es decir, no podemos colocar variables en una funcion que se llamen exactamente igual. No nos deja crea la funcion 

//El uso de Delete para borrar variables 

let variable = "nombremio"; 

//delete variable; //cuando se coloca el delete, en el modo estricto cuando se llama a la variable eliminada genera un error
//sin el modo estricto, se sigue llamando a la variable normalmente 
//console.log(variable) 

//delete se utiliza para eliminar propiedades de objetos 


delete obj1.nombre; // esto es correcto 
console.log(obj1.nombre);

//las palabras reservadas no pueden ser usadas como variables

//el uso de this
//this tambien se puede utilizar para crear un "constructor" dentro de una funcion (aunque no se usa casi generalmente)
//el this es como el let, su alcance es solo donde esta creado

function saludo() {
    this.name = "lucas"; 
    this.saludar = function() {
        console.log(`Hola ${this.name}`)
    }
};

let obj2 = new saludo(); //se puede crear el objeto "saludo", aunque no se usa esto 
obj2.saludar()


//Numeros octales con una "o" adelante y no existe el with

console.log(0o25);

//arguments y eval no pueden ser variables (palabras reservadas)


