// ----- Arrays -----

let frutas = ["manzana", "uva", "pera", "naranja", "sandia"];

console.log(frutas[0]); //se muestra el elemento en la posicion 0 del array, que es "manzana"

//sintaxis para acceder a un elemento del array: nombreDelArray[posicionDelElemento]

//los arrays empiezan a contar desde 0, entonces el primer elemento esta en la posicion 0, el segundo en la posicion 1, y asi sucesivamente
//posicion es igual a indice o index

// ------ Arrays Asociativos u Objetos -----

let pc = {
    marca: "Lenovo",
    modelo: "Legion 5",
    procesador: "AMD Ryzen 7 5800H",
    ram: "16GB",
    almacenamiento: "512GB SSD"
}

console.log(pc.marca); //se muestra el valor de la propiedad "marca" del objeto pc, que es "Lenovo"

console.log(pc["modelo"]); //otra forma de acceder a la propiedad "modelo" del objeto pc, que es "Legion

//sintaxis 1 para acceder a una propiedad de un objeto: nombreDelObjeto.nombreDeLaPropiedad
//sintaxis 2 para acceder a una propiedad de un objeto: nombreDelObjeto["nombreDeLaPropiedad"]

let frase = `Mi PC es marca <b>${pc.marca}</b> <br>
        El modelo es <b>${pc.modelo}</b> <br>
        El procesador es <b>${pc.procesador}</b> <br>
        La ram es de <b>${pc.ram}</b> <br>
        El almacenamiento es de <b>${pc.almacenamiento}</b>`;

//<br> es un salto de linea en HTML, entonces cada propiedad del objeto pc se muestra en una linea diferente
//<b> es una etiqueta de HTML que hace que el texto dentro de ella se muestre en negrita

document.writeln(frase)