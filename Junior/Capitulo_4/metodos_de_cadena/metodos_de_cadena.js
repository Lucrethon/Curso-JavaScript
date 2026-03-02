let cadena = "cadena de texto texto texto texto";
let cadena2 = " otra cadena de texto";
let cadena3 = "cadena"
let cadena4 = "abc"


//---- Metodos de cadena ----
//Estos metodos analizan una cadena y devuelven un nuevo valor o una nueva cadena, sin modificar la cadena original.

//concat()
//junta dos o mas cadenas de texto y retorna una nueva

let resultado = cadena.concat(" hola")
document.writeln(`${resultado} <br>`)

resultado = cadena.concat(cadena2)
document.writeln(`${resultado} <br>`)

//concat devuelve un objeto .String

//startsWith() - si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.

resultado = cadena.startsWith(cadena3) //=> true
document.writeln(`${resultado} <br>`)

resultado = cadena.startsWith("cadenaa") //=> false. la palabra "cadena" tiene doble a
document.writeln(`${resultado} <br>`) 


// endsWith() - si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.

resultado = cadena.endsWith(cadena3) //=> false. cadena termina con texto y cadena3 con cadena
document.writeln(`${resultado} <br>`)


// includes() - si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false.

resultado = cadena.includes(cadena2) //=> false, porque la cadena 1 no contiene lo que tiene la cadena2
document.writeln(`${resultado} <br>`)

resultado = cadena.includes(cadena3) //=> true, porque la cadena 1 contiene lo que tiene la cadena3
document.writeln(`${resultado} <br>`)


// indexOf() - devuelve el índice (posicion en lista) del primer carácter de la cadena, si no existe, devuelve -1

resultado = cadena.indexOf("texto") //=> 10. La primera letra de la cadena "texto" se encuentra en la posicion 10 de la cadena 1
document.writeln(`${resultado} <br>`)



// lastIndexOf() - devuelve el último índice (posicion en lista) del primer carácter de la cadena, si no existe, devuelve -1


resultado = cadena.lastIndexOf("texto") //=> 28. La primera letra de la cadena "texto" se encuentra en la posicion 28 de la cadena 1. Recorre la cadena de atras hacia adelante.
document.writeln(`${resultado} <br>`)



// --- Metodos para rellenar la cadena y devolver una nueva cadena ---

// padStart() [propuesta de Estándar] - Rellenar cadena al principio con los caracteres deseados.

resultado = cadena4.padStart(10, "0") //=> 0000000abc. Rellena la cadena con ceros al principio hasta que la longitud total sea de 10 caracteres.
document.writeln(`${resultado} <br>`)

// padEnd() [propuesta de ECMA] - Rellenar cadena al final con los caracteres deseados.

resultado = cadena4.padEnd(8, "defgh") //=> abcdefgh. Rellena la cadena con "defgh" al final hasta que la longitud total sea de 8 caracteres.
document.writeln(`${resultado} <br>`)

// repeat() - Devuelve la misma cadena pero repetida la cantidad de veces que le indiquemos.

resultado = cadena3.repeat(3) //=> cadenacadenacadena. Repite la cadena 3 veces.
document.writeln(`${resultado} <br>`)



//------ Metodos que transforman la cadena y devuelven una nueva cadena ------

let cadena5 = "hola como estas"
let cadena6 = "HOLA COMO ESTAS?"
let numero = 100
let array = ["lucas", "juan", "pedro"]
let cadena7 = "   hola como estas?   "


// split() - Divide la cadena como le pidamos y nos devuelve un array.

resultado = cadena5.split(" ") //=> ["hola", "como", "estas"]. Divide la cadena cada vez que encuentra un espacio y devuelve un array con las partes resultantes.
document.writeln(`${resultado} <br>`)
document.writeln(`${resultado[0]} <br>`) //=> hola. Accedemos al primer elemento del array resultado, que es "hola".

resultado = cadena5.split("como") //=> ["hola "," estas"]. Divide la cadena cada vez que encuentra la palabra "como" y devuelve un array con las partes resultantes.
document.writeln(`${resultado} <br>`)


// substring() - Nos retorna un pedazo de la cadena que seleccionamos.

resultado = cadena5.substring(0, 6) //=> hola c. Retorna la parte de la cadena desde el índice 0 hasta el índice 6 (sin incluir el carácter en el índice 6).
document.writeln(`${resultado} <br>`)

resultado = cadena5.substring(0, 50) //=> hola como estas. Si el índice final es mayor que la longitud de la cadena, substring() devuelve la cadena completa desde el índice inicial hasta el final de la cadena.
document.writeln(`${resultado} <br>`)


// toLowerCase() - Convierte una cadena a minúscula.

resultado = cadena6.toLowerCase() //=> hola como estas?. Convierte toda la cadena a minúscula
document.writeln(`${resultado} <br>`)

// toUpperCase() - Convierte una cadena a mayúscula.

resultado = cadena5.toUpperCase() //=> HOLA COMO ESTAS. Convierte toda la cadena a mayúscula
document.writeln(`${resultado} <br>`)


// toString() - Este método convierta un objeto a una cadena de texto. En el caso de las cadenas, devuelve la propia cadena.

resultado = numero.toString() //=> "100". Convierte el número 100 a una cadena de texto.
document.writeln(`${2 + resultado} <br>`) //=> 2100. El operador + con un número y una cadena de texto convierte el número a cadena y concatena ambos, resultando en "2100".

//No funciona con otros operadores como multiplicación, resta o división, ya que esos operadores intentan convertir la cadena a número para operar
document.writeln(`${2 * resultado} <br>`) //=> 200. El operador * intenta convertir la cadena "100" a un número, lo que resulta en 100, y luego multiplica por 2, dando como resultado 200.

resultado = array.toString() //=> "lucas,juan,pedro". Convierte el array a una cadena de texto, donde los elementos del array están separados por comas.
document.writeln(`${resultado} <br>`)
document.writeln(`${resultado[0]} <br>`) //=> l. Accedemos al primer carácter de la cadena resultado, que es "l".

// trim() - elimina los espacios en blanco al principio y al final.

resultado = cadena7.trim() //=> "hola como estas?". Elimina los espacios en blanco al principio y al final de la cadena.
document.writeln(`${resultado} <br>`)

//length - es una propiedad de los arrays o cadenas de texto que devuelve la cantidad de elementos o caracteres que tiene.

resultado = cadena5.length //=> 15. Devuelve la cantidad de caracteres que tiene la cadena, incluyendo espacios.
document.writeln(`${resultado} <br>`)


// trimEnd() - elimina los espacios en blanco al final de una cadena.

resultado = cadena7.trimEnd() //=> "   hola como estas?". Elimina los espacios en blanco al final de la cadena, pero mantiene los espacios al principio.


// trimStart() - elimina los espacios en blanco al comienzo de una cadena.

resultado = cadena7.trimStart() //=> "hola como estas?   ". Elimina los espacios en blanco al comienzo de la cadena, pero mantiene los espacios al final.

// valueOf() - retorna el valor primitivo de un objeto string.