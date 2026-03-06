// //console.log sirve para mostrar mensajes en la consola del navegador, es muy útil para depurar nuestro código y ver el resultado de ciertas operaciones o variables.


// Console
// ---------- funciones de registro

// assert() - Aparece un mensaje de error en la consola si la afirmación es falsa. Si la afirmación es verdadera, no aparecerá nada. (NO ESTANDAR)

console.assert(2 === 3, "Esto es un error") //=> Esto es un error. Muestra el mensaje de error "Esto es un error" en la consola porque la afirmación 2 === 3 es falsa.

console.assert(2 === 2, "Esto es un error") //=> No muestra nada en la consola porque la afirmación 2 === 2 es verdadera.

// clear() - limpia la consola

console.clear()

// error() - Muestra un mensaje de error en la Consola Web.

console.error("Bro rompiste todo el codigo") //=> Esto es un mensaje de error. Muestra el mensaje de error "Bro rompiste todo el codigo" en la consola.


// info() - Emite un mensaje informativo a la Consola Web. En Firefox y Chrome, se muestra un pequeño ícono "i" junto a estos elementos en el registro de la Consola Web.

console.info("Esto es un mensaje informativo") //=> Esto es un mensaje informativo. Muestra el mensaje informativo "Esto es un mensaje informativo" en la consola. Se parece a console.log(). pero el mensaje de console.log() es depurativo y el mensaje de console.info() es informativo, aunque ambos se muestran de manera similar en la consola.

// log() - Muestra un mensaje en la consola web (o del intérprete JavaScript).

console.log("Esto es un mensaje de log") //=> Esto es un mensaje de log. Muestra el mensaje "Esto es un mensaje de log" en la consola. Es el método más común para mostrar mensajes en la consola, y se utiliza principalmente para depurar código y mostrar información relevante durante el desarrollo.


// table() - Esta función toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parámetro adicional: columns y nos muestra una tabla en consola

console.table(["juan", "maria", "pedro"]) //=> (3) ["juan", "maria", "pedro"]. Muestra una tabla en la consola con los elementos del array como filas y sus índices como columnas.

console.table({nombre: "juan", edad: 30, ciudad: "madrid"}) //=> {nombre: "juan", edad: 30, ciudad: "madrid"}. Muestra una tabla en la consola con las propiedades del objeto como filas y sus valores como columnas.

// warn() - Imprime un mensaje de advertencia en la Consola Web.

console.warn("Esto es un mensaje de advertencia") //=> Esto es un mensaje de advertencia. Muestra el mensaje de advertencia "Esto es un mensaje de advertencia" en la consola. Se muestra con un ícono de advertencia y un fondo amarillo para resaltar que es una advertencia.

// dir() - Despliega una lista interactiva de las propiedades del objeto JavaScript especificado. [NO ESTANDAR]

console.dir(["juan", "maria", "pedro"]) //=> (3) ["juan", "maria", "pedro"]. Muestra una lista interactiva de las propiedades del array en la consola, permitiendo expandir y contraer cada propiedad para ver su valor.


// ---------- funciones de conteo

// count() - Registra el número de veces que se llama a count(). Esta función toma como argumento opcional una etiqueta.

console.count("veces") //=> veces: 1. Registra el número de veces que se llama a count() con la etiqueta "veces". En este caso, muestra "veces: 1" en la consola.

console.count("veces") //=> veces: 2. Registra el número de veces que se llama a count() con la etiqueta "veces". En este caso, muestra "veces: 2" en la consola.

console.count("veces") //=> veces: 3. Registra el número de veces que se llama a count() con la etiqueta "veces". En este caso, muestra "veces: 3" en la consola.   

//sirve para saber cuantas veces se ha ejecutado una función o un bloque de código, o para contar el número de veces que se ha producido un evento, como un clic en un botón. Es útil para depurar código y analizar el comportamiento de una aplicación.

// countReset() - Resetea el contador console.count()

console.countReset("veces") //=> veces: 0. Resetea el contador console.count() con la etiqueta "veces".
console.count("veces") 

// ---------- funciones de agrupación.

// group() - Crea un nuevo grupo en línea en el registro de la consola

// grupEnd() - Remueve un grupo en línea en el registro de la consola

// groupCollapsed() - Crea un grupo en línea pero contraído, el usuario abrirlo


// ---------- funciones de temporización
// time() - inicia un temporizador.

//timeLog() - Registra el valor actual de un temporizador sin detenerlo. Permite ver el tiempo transcurrido desde que se inició el temporizador con time(), pero el temporizador sigue funcionando y se puede seguir registrando su valor con timeLog() o detenerlo con timeEnd().

// timeEnd() - Detiene un temporizador.

// timeLog() - Registra el valor actual de un temporizador.