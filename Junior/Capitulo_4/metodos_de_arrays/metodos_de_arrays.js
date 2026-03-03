
let array1 = ["lucas", "juan", "pedro", "juan", "maria"]
let array2 = [3,6,7,2,19,10,9]

// __________ Metodos Transformadores __________

// Transforman y modifican el array. No crean un nuevo


// pop() - elimina el último elemento de un array y lo devuelve.

document.writeln(`${array1} <br>`) //=> ["lucas", "juan", "pedro", "juan", "maria"].

let resultado = array1.pop() //=> "maria". Elimina el último elemento del array, que es "maria", y lo devuelve.
document.writeln(`Elemento removido: <b style="color: red;">${resultado}</b> <br>`)
document.writeln(`${array1} <br>`) //=> ["lucas", "juan", "pedro", "juan"]. El array ahora tiene un elemento menos, ya que se eliminó "maria".


// shift() - elimina el primer elemento de un array y lo devuelve.

resultado = array1.shift() //=> "lucas". Elimina el primer elemento del array, que es "lucas", y lo devuelve.
document.writeln(`Elemento removido: <b style="color: red;">${resultado}</b> <br>`)
document.writeln(`${array1} <br>`) //=> ["juan", "pedro", "juan"]. El array ahora tiene un elemento menos, ya que se eliminó "lucas".

// push() - agrega un elemento al array al final de la lista.

resultado = array1.push("maria") //=> 4. Agrega "maria" al final del array y devuelve la nueva longitud del array, que es 4.
document.writeln(`Nueva longitud del array: <b style="color: red;">${resultado}</b> <br>`)
document.writeln(`${array1} <br>`) //=> ["juan", "pedro", "juan", "maria"]. El array ahora tiene un nuevo elemento al final, que es "maria".

// reverse() - invierte el orden de los elementos de un array.

resultado = array1.reverse() //=> ["maria", "juan", "pedro", "juan"]. Invierte el orden de los elementos del array.
document.writeln(`Array invertido: <b style="color: red;">${resultado}</b> <br>`)

// unshift() - agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

//sintaxis: array.unshift(elemento1, elemento2, ...)

resultado = array1.unshift("jose") //=> 5. Agrega "jose" al inicio del array y devuelve la nueva longitud del array, que es 5.
document.writeln(`${array1} <br>`)
document.writeln(`Nueva longitud del array: <b style="color: red;">${resultado}</b> <br>`)


// sort() - ordena los elementos de unarreglo (array) localmente y devuelve el arreglo ordenado.

document.writeln(`${array2} <br>`)
resultado = array2.sort() //=> [10, 19, 2, 3, 6, 7, 9]. Ordena los elementos del array como si fueran cadenas de texto, lo que puede dar resultados inesperados con números.
document.writeln(`Array: <b style="color: red;">${resultado}</b> <br>`)

resultado = array2.sort((a, b) => a - b) //=> Ordena los elementos del array en orden ascendente numérico.
document.writeln(`Array ordenado: <b style="color: red;">${resultado}</b> <br>`)

resultado = array1.sort() //=> ["jose", "juan", "juan", "maria", "pedro"]. Ordena los elementos del array en orden alfabético.
document.writeln(`Array ordenado: <b style="color: red;">${resultado}</b> <br>`)

// splice() - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

//sintaxis: array.splice(indiceInicio, cantidadDeElementosAEliminar, elemento1, elemento2, ...) => Devuelve un array con los elementos eliminados.

resultado = array1.splice(1, 2) //=> ["juan", "juan"]. Elimina 2 elementos a partir del índice 1, que son los dos "juan", y devuelve un array con los elementos eliminados.
document.writeln(`Elementos eliminados: <b style="color: red;">${resultado}</b> <br>`)
document.writeln(`${array1} <br>`) //=> ["jose", "maria", "pedro"]. El array ahora tiene 2 elementos menos, ya que se eliminaron los dos "juan".

resultado = array1.splice(1, 0, "lucas", "juan") //=> []. No elimina ningún elemento, ya que la cantidad de elementos a eliminar es 0, pero agrega "lucas" y "juan" a partir del índice 1. Devuelve un array vacío porque no se eliminaron elementos.
document.writeln(`Elementos eliminados: <b style="color: red;">${resultado}</b> <br>`)
document.writeln(`${array1} <br>`) //=> ["jose", "lucas", "juan", "maria", "pedro"]. El array ahora tiene 2 elementos más, que son "lucas" y "juan", agregados a partir del índice 1.

resultado = array1.splice(2, 1, "dalto") //=> ["juan"]. Elimina 1 elemento a partir del índice 2, que es "juan", y lo reemplaza por "dalto". Devuelve un array con el elemento eliminado, que es ["juan"].
document.writeln(`Elementos eliminados: <b style="color: red;">${resultado}</b> <br>`)
document.writeln(`${array1} <br>`) //=> ["jose", "lucas", "dalto", "maria", "pedro"]. El array ahora tiene 1 elemento menos, ya que se eliminó "juan", y tiene 1 elemento nuevo, que es "dalto", en su lugar.

//forma para referirse al final de un array: -1. Si se coloca -1 en el índice de splice, se refiere al último elemento del array. Si se coloca -2, se refiere al penúltimo elemento, y así sucesivamente. Los elimina o los reemplaza 

// __________ Accesores __________

//Estos metodos no modifican el array original, sino que devuelven un nuevo valor o un nuevo array basado en el array original.


// join() - une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve. Podemos utiñizar el separador que queramos entre los elementos, o no colocar ningún separador para unirlos sin espacios ni comas.

resultado = array1.join() //=> "jose,lucas,dalto,maria,pedro". Une todos los elementos del array en una cadena de texto, separados por comas.
document.writeln(`Array unido: <b style="color: red;">${resultado}</b> <br>`)
document.writeln(`${resultado[0]} <br>`) //=> j. Accedemos al primer carácter de la cadena resultado, que es "j".   

resultado = array2.join() //=> "10,19,2,3,6,7,9". Une todos los elementos del array en una cadena de texto, separados por comas.
document.writeln(`Array unido: <b style="color: red;">${resultado}</b> <br>`)

resultado = array1.join(" ") //=> "jose lucas dalto maria pedro". Une todos los elementos del array en una cadena de texto, separados por espacios.
document.writeln(`Array unido: <b style="color: red;">${resultado}</b> <br>`)

resultado = array1.join(" - ") //=> "jose-lucas-dalto-maria-pedro". Une todos los elementos del array en una cadena de texto, separados por guiones.


document.writeln(`Array unido: <b style="color: red;">${resultado}</b> <br>`)

resultado = array1.join("<br> Nombre: ");
document.writeln(`Nombre: ${resultado}<br>`)



// slice() - devuelve una parte del array dentro de un nuevo array empezando por inicio hasta un fin (fin no incluido).

//sintaxis: array.slice(inicio, fin) el fin no esta incluido 

resultado = array1.slice(1, 4) //=> ["lucas", "dalto", "maria"]. Devuelve un nuevo array con los elementos desde el índice 1 hasta el índice 4 (sin incluir el elemento en el índice 4).
document.writeln(`Array cortado: <b style="color: red;">${resultado}</b> <br>`)

//para seleccionar todos, solo hay que dejar el segundo parámetro vacío 


// Métodos ya vistos en cadenas: toString(), indexOf(), lastIndexOf(), includes(), length, etc.

//ejemplo: 

resultado = array1.toString() //=> "jose,lucas,dalto,maria,pedro". Convierte el array en una cadena de texto, con los elementos separados por comas.
document.writeln(`Array convertido a cadena: <b style="color: red;">${resultado}</b> <br>`)


resultado = array1.includes("lucas") //=> true. Devuelve true si el array incluye el elemento "lucas", y false si no lo incluye.
document.writeln(`¿El array incluye "lucas"? <b style="color: red;">${resultado}</b> <br>`)

resultado = array1.indexOf("dalto") //=> 2. Devuelve el índice de la primera aparición del elemento "dalto" en el array, que es 2. Si el elemento no se encuentra en el array, devuelve -1.
document.writeln(`Índice de "dalto": <b style="color: red;">${resultado}</b> <br>`)



// __________ De Repetición __________

let array3 = ["pera", "patilla", "cambur", "naranja", "uva", "manzana"]

// filter() - crea un nuevo array con todos los elementos que cumplan una condición.
//es como un bucle. itera sobre cada elemento del array y aplica una función que devuelve true o false. Si la función devuelve true, el elemento se incluye en el nuevo array; si devuelve false, el elemento se excluye.

array3.filter(fruta => document.writeln(fruta + "<br>")) // => esto es una función flecha

array3.filter (
    (fruta) => {
        document.writeln(fruta + "<br>")
    }
)

document.writeln("<br>")

resultado = array3.filter(fruta => fruta.length > 4) //excluye los elementos que tengan una longitud menor a 4 caracteres y crea un nuevo array con los elementos que cumplen la condición. En este caso, el nuevo array será ["patilla", "cambur", "naranja", "manzana"], ya que son las frutas que tienen una longitud mayor a 4 caracteres

for (let fruta of resultado) {
    document.writeln(fruta + "<br>")
}

// forEach() - ejecuta la función indicada una vez por cada elemento del array.

array3.forEach(fruta => document.writeln(fruta + "<br>")) //=> esto es una función flecha

//map() - crea un nuevo array con los resultados de la llamada a la función indicada aplicada a cada elemento del array.