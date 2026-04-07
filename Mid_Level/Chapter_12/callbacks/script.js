// ---------- Callbacks --------------

// Concepto (Function in function)
//Es una función dentro de otra función que se ejecuta después de que la función externa ha terminado su ejecución.

// Ejemplos

function prueba(callback) {
    callback("pedro");
} //funcion que recibe otra función como argumento

function decirNombre(nombre) {
    console.log("Hola " + nombre);
} //funcion que se va a pasar como argumento a la función prueba

prueba(decirNombre);

//tamben puede funcionar asi: 

prueba (nombre => console.log("Hola " + nombre));

// Problemas de los Callbacks

class Persona {
    constructor(nombre, instagram) {
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

console.log(new Persona("Lucas Dalto", "@lucasdalto"));

const datosPersonas = [
    ["Lucas Dalto", "@lucasdalto"],
    ["Samanta Dias", "@samantadias"],
    ["Valentina Perez", "@valentinaperez"],
    ["Carlos Ramirez", "@carlosramirez"],
    ["Cofla XD", "@coflaXD"],
    ["Camila"]
]

let personas = [];

for (let i = 0; i < datosPersonas.length; i++) {
    let persona = new Persona(datosPersonas[i][0], datosPersonas[i][1]);
    personas.push(persona)
};

console.log(personas);



// --------------- callback hell --------------


const obtenerPersona = (id, callback) => { //el id actuaria como el indice del array personas
    if (personas[id] == undefined) {
        callback("Persona no encontrada", null, id); //el primer parametro del callback es una sentencia que actua como un error (no se encuentra la persona), el segundo parametro es null porque no se encuentra la persona
    } else {
        callback(null, personas[id], id) //se le pasa null al principio del callback porque no hay error, despues se le pasa la persona encontrada como segundo parametro
    }

}

obtenerInstagram = (id, callback) => {
        if (personas[id].instagram == undefined) {
        callback("Instagram no encontrado", null); 
    } else {
        callback(null, personas[id].instagram) 
    }
}


const obtenerNombre = (err, persona, id) => { //este callback recibe un error
    if (err) { //en caso de que exista algo en el primer parametro (un error), se muestra el mensaje de error
        console.log(err);
    } else {
        console.log(persona.nombre); //si no hay error, se muestra el nombre de la persona


        console.log(obtenerInstagram(id, (err, instagram) => { //otro callback dentro del callback obtenerNombre, para obtener el instagram de la persona encontrada
            if (err) {
                console.log(err);
            } else {
                console.log(instagram);
            }
        }))
    }
}



obtenerPersona(5, obtenerNombre); //se llama a la funcion obtenerPersona con el id 0 y el callback obtenerNombre


// ------------ Promesas -------------
//las promesas vienen a resolver el callback hell. 

// Concepto
//las promesas son objetos que representan dos callbacks: 
//terminación de una operación asíncrona
//fracaso de una operación asíncrona 
// (resolved y rejected)

//------------------------ Ejemplo de promesas --------------

{let nombre = "Lucas";

const promesa = new Promise((resolve, rejected) => {
    if (nombre != "Lucas") rejected("El nombre no es Lucas");
    else resolve("El nombre es Lucas");

})

//estoy creando un objeto promeesa que le estoy pasando como argumento constructor una funcion 
//es un objeto que representa dos callbacks: resolved y rejected

console.log(promesa);
//esto nos muetra un objeto promesa con las propiedades encapsuladas. Para acceder a ellas debemos hacer lo siguiente: 
promesa.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
})
};

//con el metodo then() accedemos a lo que tiene resolve. Es un metodo que resibe un callback 

//si se ejecuta el resolve, se ejecuta el callback que le pasamos al then() y se muestra el resultado. Si se ejecuta el rejected, no se ejecuta el callback del then() y se muestra un error en la consola.

//para manejar el rejected, se utiliza el metodo catch() que recibe un callback que se ejecuta si se ejecuta el rejected.



//----------------------- Callback hell resuelto con promesas -----------------

{

const validarPersona = (id) => {
    return new Promise((resolve, rejected) => {
        if (personas[id] == undefined || personas[id] < 0 || personas[id] >= personas.length) {
            rejected(`Persona no encontrada`)
        } else {
            resolve(personas[id])
        }
})
};

const validarInstagram = (id) => {
    return new Promise((resolve, rejected) => {
        if (personas[id].instagram == undefined) {
            rejected("No se ha encontrado el instagram")
        } else {
            resolve(personas[id].instagram)
        }
    })
}

let testId = 5;

validarPersona(testId).then((persona) => {
    console.log(persona.nombre);

    return validarInstagram(testId);
}).then((instagram) => {
    console.log(instagram);

}).catch((error) => {
    console.log(error); //este cathch va a atrapar cualquier error que se produzca en cualquiera de las promesas anteriores, por lo que no es necesario tener un catch para cada promesa, con uno solo es suficiente para manejar todos los errores.
})


};




//----------------------- Async/Await -----------------
//Es una forma de manejar las promesas de una manera más sencilla y legible. 
// El await va siempre dentro de una función async, y hace que el código espere a que la promesa se resuelva antes de continuar con la ejecución de la siguiente linea de código. 


const obtenerInfo = (texto) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {resolve(texto)}, Math.random() * 2000) //simulamos una operacion asincrona con setTimeout, que se resuelve despues de un tiempo aleatorio entre 0 y 2 segundos.
    }) 
}; 

const mostrarTexto = () => {
    data1 = obtenerInfo("1. Hola, soy el primer texto");
    data2 = obtenerInfo("2. Hola, soy el segundo texto");
    data3 = obtenerInfo("3. Hola, soy el tercer texto");

    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarTexto(); //esto nos muestra tres promesas sin resolver, porque no estamos esperando a que se resuelvan antes de mostrar el resultado.

//para resolver esto, podemos utilizar el await para esperar a que se resuelvan las promesas antes de mostrar el resultado.

const mostrarTextoAsync = async () => {
    data1 = await obtenerInfo("1. Hola, soy el primer texto"); //con el await, estamos esperando a que se resuelva la promesa antes de continuar con la ejecución de la siguiente linea de código. Por lo tanto, data1 va a tener el valor resuelto de la promesa, que es el texto "1. Hola, soy el primer texto". Si no utilizamos el await, data1 va a tener el valor de la promesa sin resolver, que es un objeto promesa.
    data2 = await obtenerInfo("2. Hola, soy el segundo texto");
    data3 = await obtenerInfo("3. Hola, soy el tercer texto");

    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarTextoAsync(); //esto nos muestra los tres textos en orden, porque estamos esperando a que se resuelvan las promesas antes de mostrar el resultado.


// ¿Que puede representar?

// terminación de una operación asíncron

// fracaso de una operación asíncrona