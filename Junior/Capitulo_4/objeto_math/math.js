//Objeto Math - Básico
// __________ METODOS __________

// sqrt() - Devuelve la raíz cuadrada positiva de un número.

let numero = 16

resultado = Math.sqrt(numero) //=> 4. Devuelve la raíz cuadrada positiva de 16, que es 4.
document.writeln(`La raíz cuadrada de ${numero} es: <b style="color: red;">${resultado}</b> <br>`)

// cbrt() - Devuelve la raíz cúbica de un número.

numero = 27

resultado = Math.cbrt(numero) //=> 3. Devuelve la raíz cúbica de 27, que es 3.
document.writeln(`La raíz cúbica de ${numero} es: <b style="color: red;">${resultado}</b> <br>`)

// max() - Recibe uno o más números y devuelve el mayor de ellos.

resultado = Math.max(3, 7, 2, 9, 5) //=> 9. Devuelve el número más grande entre los números proporcionados, que es 9.
document.writeln(`Números proporcionados: 3, 7, 2, 9, 5 <br>`)
document.writeln(`El número más grande es: <b style="color: red;">${resultado}</b> <br>`)

// min() - Recibe uno o más números y devuelve el menor de ellos.

resultado = Math.min(3, 7, 2, 9, 5) //=> 2. Devuelve el número más pequeño entre los números proporcionados, que es 2.
document.writeln(`Números proporcionados: 3, 7, 2, 9, 5 <br>`)
document.writeln(`El número más pequeño es: <b style="color: red;">${resultado}</b> <br>`)

// random() - Devuelve un número pseudo-aleatorio entre 0 y 1.

resultado = Math.random() //=> Un número entre 0 y 1.
document.writeln(`Número pseudo-aleatorio: <b style="color: red;">${resultado}</b> <br>`)

// round() - Devuelve el valor de un número redondeado al número entero más cercano. (Redondea hacia el entero más cercano).

resultado = Math.round(4.7) //=> 5. Redondea el número 4.7 al entero más cercano, que es 5.
document.writeln(`Número original: 4.7 <br>`)
document.writeln(`Número redondeado: <b style="color: red;">${resultado}</b> <br>`)

numero = Math.random() * 100 //=> Un número entre 0 y 100.
resultado = Math.round(numero) //=> Un número entero entre 0 y 100.
document.writeln(`Número original: ${numero} <br>`)
document.writeln(`Número redondeado: <b style="color: red;">${resultado}</b> <br>`)

// fround() - Devuelve la representación flotante de precisión simple más cercana de un número.



// floor() - Devuelve el mayor entero menor que o igual a un número. (Redondea hacia abajo al entero más cercano).

resultado = Math.floor(4.7) //=> 4. Devuelve el mayor entero menor que o igual a 4.7, que es 4.
document.writeln(`Número original: 4.7 <br>`)
document.writeln(`Número redondeado hacia abajo: <b style="color: red;">${resultado}</b> <br>`)

//Para hacer que no aparezca el 0 o el 100: 

numero = Math.random() * 99 
resultado = Math.floor(numero+1) //=> Un número entero entre 1 y 100. Al sumar 1 a numero, el rango de números posibles se desplaza a entre 1 y 100, y luego floor() redondea hacia abajo al entero más cercano.
document.writeln(`Número original: ${numero} <br>`)
document.writeln(`Número redondeado: <b style="color: red;">${resultado}</b> <br>`)



// trunc() - Devuelve la parte entera del número x, la eliminación de los dígitos fraccionarios.

numero = 9.9 
resultado = Math.trunc(numero) //=> 9. Devuelve la parte entera de 9.9, que es 9, eliminando los dígitos fraccionarios.
document.writeln(`Número original: ${numero} <br>`)
document.writeln(`Parte entera: <b style="color: red;">${resultado}</b> <br>`)

// __________ PROPIEDADES __________

// PI - Ratio de la circunferencia de un círculo respecto a su diámetro, aproximadamente 3.14159.

numero = Math.PI //=> 3.141592653589793. Devuelve el valor de PI, que es la relación entre la circunferencia de un círculo y su diámetro.
document.writeln(`Valor de PI: <b style="color: red;">${numero}</b> <br>`)

// SQRT1_2 - Raíz cuadrada de 1/2; Equivalentemente, 1 sobre la raíz cuadrada de 2, aproximadamente 0.707.

// SQRT2 - Raíz cuadrada de 2, aproximadamente 1.414.

// E - Constante de Euler, la base de los logaritmos naturales, aproximadamente 2.718.

// LN2 - Logaritmo natural de 2, aproximadamente 0.693.

// LN10 - Logaritmo natural de 10, aproximadamente 2.302.

// LOG2E - Logaritmo de E con base 2, aproximadamente 1.442.

// LOG10E - Logaritmo de E con base 10, aproximadamente 0.434.