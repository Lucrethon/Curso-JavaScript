// /* --------------- Control de Flujo y Manejo de Errores ---------------

// Sentencias de bloque: crea un nuevo ambito de variables

let nombre = "Juan";

{
    let nombre = "Pedro";
    console.log(nombre);
} //se crea un nuevo bloque de código, por lo que la variable nombre solo existe dentro de este bloque y funciona de forma local alli dentro del bloque, por lo que se imprime "Pedro"

console.log(nombre); // se imprime el valor de la variable nombre que esta fuera del bloque, que es "Juan"


// Sentencias de control de flujo.

//son por ejemplo: if, else, else if, while, do while, for, for in, for of, switch, try catch finally

if (3 > 2) {
    console.log("3 es mayor que 2");
} //lo que esta en corchetes se ejecuta si la condición es verdadera, en este caso se imprime "3 es mayor que 2"


// -------------- Sentencia Switch--------------- 
// Sintaxis y cláusula case

let expr = "Manzana";

switch (expr) {
    case "Cambur": console.log("Esta fruta es amarilla"); break;
    case "Pera": console.log("Esta fruta es verde"); break;
    case "Manzana": console.log("Los primeros humanos pecaron por comerla"); break;
    default: console.log("No es una ninguna"); 

} //if tiene mejor rendimiendo que switch, pero switch es mas facil de leer y escribir cuando se tienen muchas condiciones

//si se quiere hacer una cosa, se puede usar sin {}, pero si se quieren hacer varias cosas, se deben usar {}, y se deben usar break para evitar que se ejecuten las siguientes condiciones
// break */



//------------ Sentencias de manejo de excepciones---------------.
//Que pasa si queremos evitar los errores que puedan surgir en nuestro código? para eso tenemos las sentencias de manejo de excepciones, que son try, catch y finally

// Excepciones y Tipos de Excepciones
// Definición y usos

// Excepciones ECMAScript: son las que estan relacionadas a la tecnologia detras de JavaScript, como por ejemplo: SyntaxError, ReferenceError, TypeError, RangeError, EvalError, URIError, AggregateError,

// DOMException y DOMError: son las que estan relacionadas al Document Object Model (DOM), como por ejemplo: NotFoundError, SecurityError, NetworkError, AbortError, TimeoutError, InvalidStateError, SyntaxError, TypeError, 

// X) Try... Catch
// Sintaxis

try {
dccdascfc
}

catch (error) { 
    //typeof: se utiliza para determinar el tipo de dato de una variable o una expresión. El resultado siempre es un string que indica el tipo de dato, por ejemplo: "number", "string", "boolean", "object", "undefined", "function", "symbol", "bigint"

    console.log(typeof error); //imprime que tipo de dato es "error", que es "object"
    
    console.log(error); //imprime el error que se ha producido, en este caso es un ReferenceError: dccdascfc is not defined
}

// Objeto error

// Catch Incondicional: sencillamente el catch no tiene condiciones, como el ejemplo de arriba 

// Catch Condicional: son los catch que se ejecutan solo si se cumple una condición, por ejemplo:

//instanceof se usa para verificar si un objeto es una instancia de una clase o de una función constructora específica. Devuelve true si el objeto es una instancia de la clase o función constructora, o de una clase que hereda de ella, y devuelve false en caso contrario.

try {
    dccdascfc
}

catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Se ha producido un error de referencia");
    } else {
        console.log("Se ha producido un error desconocido");
    }
};

//Finally: el finally se ejecuta siempre, independientemente de si se ha producido un error o no, y se utiliza para ejecutar código que debe ejecutarse siempre, como por ejemplo: cerrar una conexión a una base de datos, liberar recursos, etc.

try {
    console.log("Esto se ejecuta sin errores");
}

catch (error) {
    console.log("Se ha producido un error");
}

finally {
    console.log("Esto se ejecuta siempre");
};

// Sentencia Throw: se utiliza para lanzar una excepción de forma manual, es decir, para crear un error personalizado y lanzarlo cuando se cumpla una condición específica.

try {
    throw {
        error: "Nombre del error",
        info: "Información adicional sobre el error"
    };
}

catch (error) {
    console.log(error.error); //imprime el nombre del error que se ha producido, en este caso es "Nombre del error"
    console.log(error.info); //imprime la información adicional sobre el error que se ha producido, en este caso es "Información adicional sobre el error"
}


//----

function validarEdad(edad) {
    if (edad < 18) {
        throw new Error("La edad debe ser mayor o igual a 18"); //La palabra reservada throw detiene la ejecución normal de la función y "lanza" un objeto de error.

        //Cuando escribes new Error("..."), estás invocando un constructor predefinido de JavaScript. No necesitas definir la propiedad .message tú mismo porque JavaScript ya lo hizo por ti en el lenguaje.

        // Al hacer esto:
        // throw new Error("La edad debe ser mayor o igual a 18");

        // JavaScript crea un objeto con esta estructura interna (simplificada):

        // {
        //     name: "Error",
        //     message: "La edad debe ser mayor o igual a 18",
        //     stack: "..." // (el rastro de en qué línea ocurrió el error)
        // }


    } else {
        console.log("Edad válida");
    }
};




try {
    validarEdad(15);
} catch (error) {
    console.log(error.message); //imprime el mensaje del error que se ha producido, en este caso es "La edad debe ser mayor o igual a 18"
}

//Cuando el error es "atrapado" por el bloque catch (error), la variable que pongas entre paréntesis (que por convención llamamos error, pero podrías llamarla e o miError) se convierte en una referencia a ese objeto que creaste arriba.

// Por eso, al hacer console.log(error.message), estás accediendo a la propiedad que se llenó cuando hiciste el new Error(...).


//no hay que abusar del try catch, ya que puede hacer que el código sea más difícil de leer y mantener, y puede ocultar errores que deberían ser corregidos en lugar de manejados. Es importante usarlo de manera adecuada y solo cuando sea necesario para manejar situaciones excepcionales.







