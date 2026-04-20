"use strict";


// --------------- Prototipos-------------------
// Definición

// ------------ Prototype Chain y Protype Object -------------

//si yo creo un prototipo, ese prototipo tendra un prototipo padre (prototype chain)

let objeto = {
    "propiedad": "datos"
};

console.log(objeto); 
//todo tipo de dato tiene el prototype: object
//eso se puede ver con la propiedad .__proto__

let texto = "string";
console.log(texto.__proto__);

let num = 34;
console.log(num.__proto__);

let array = [];
console.log(array.__proto__)

//todo tipo de dato tiene el prototype: object, pero los datos que no son objetos, tienen otro tipo de prototipo: Number, String, Array

//es decir, todos los datos heredan dos prototipos (a excepción del objeto Object): el tipo de dato y el prototipo Object. Esa es la Prototype Chain

//todos los prototipos heredan del Prototype: Object 

let funcion = function() {
}; 

console.log(funcion.prototype); 
console.log(texto.prototype); //=> undefined 

//cuando haces una función, estás creando un prototipo. Cuando colocas un tipo de dato no sucede, sencillamente lo heredan 
//Para acceder a los prototipos que nosotros creamos, tenemos que acceder mediante .prototype 
//Para acceder a los protipos ya existentes de forma nativa, accedemos mediante .__proto__

console.log(funcion.prototype.__proto__); //aqui accedemos al prototipo que heredamos del prototipo que creamos (Object)



// Características
// Un prototipo definido en su código fuente es mutable: si nosotros creamos un prototipo, este es mutable. Lo podemos modificar

// Es en sí mismo es un objeto, así como otros: los prototipos son objetos 

// Tiene una existencia física en la memoria.

// Puede ser modificado y llamado.

// Puede ser visto como un modelo ejemplar de una familia objeto.

// Un objeto hereda propiedades (valores y métodos) de su prototipo.

array = [4, "hola", null, true]
array.reverse() //cuando usamos el metodo reverse, este no es un método DEL array, es un método que está alojado en el prototipo que hereda el tipo de dato, en este caso, el prototipo Array
console.log(array)

class Objeto {
    constructor(){}

    hablar() {
        console.log("Hola")
    }
}; 

const hijo = new Objeto();
console.log(hijo); 
console.log(hijo.prototype);//esto va a decir undefined porque aqui no estamos creando nada, estamos instanciando un objeto de un prototipo ya heredado 
console.log(hijo.__proto__); //como instanciamos el objeto, esto nos va a mostrar el prototipo heredado (que tambien hereda el prototipo Object)
//dentro del prototype de "hijo", se encuentra el metodo hablar()
console.log(hijo.__proto__.__proto__); //aqui accedemos al prototipo Object 

//Propiedad __proto__ se le llama dunder proto

//Sobrescribir __proto__ vs sobrescribir un método

// hijo.hablar = ()=> {
//     console.log("metodo hablar modificado afuera")
// }; //al hacer esto, NO estamos modificando el método almacenado dentro del prototipo, simplemente le estamos agregando una funcion al objeto

// hijo.hablar() //esto va a ejecutar el metodo hablar definido afuera 

//esto pasa porque el orden de ejecucion es: 
// 1) primero se ejecutan los metodos normales (o funciones) 
// 2) despues se ejecutan los metodos que estan dentro del prototipo   

hijo.__proto__.hablar = ()=> {
    console.log("metodo hablar modificado")
}; //aqui SI estamos modificando el metodo que esta dentro del prototipo

console.log(hijo) //ahora aqui muestra la funcion cambiada en el prototipo
hijo.hablar();

//como hacer para que un objeto diferente de la clase que creamos herede el metodo que nosotros creamos?

let arr = [];
arr.__proto__ = hijo; //aqui el array esta heredando el prototipo de hijo que es Objeto
console.log(arr);
arr.hablar();

// --------- "use strict" (modo estricto)--------------

// convierte errores de JavaScript en excepciones

// Mejorando la optimización de los errores y consigue mejores tiempos

// Evita sintaxis usadas en posteriores a ES6

// No permite que el programador realice una "mala sintaxis

//para usar ese modo en el bloque global se utiliza al inicio del archivo: 
//"use strict";


nombre = "lucas";
console.log(nombre) //esto nos va a tirar un error porque nombre no esta declarada

const obj = {};



