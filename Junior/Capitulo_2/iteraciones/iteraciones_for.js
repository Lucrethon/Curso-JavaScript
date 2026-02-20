// ---- FOR ----

//el for es un bucle que se ejecuta un número determinado de veces, a diferencia del while que se ejecuta mientras se cumpla una condición

//las variables que se declaran dentro de un bucle tienen ese valor solamente dentro de ese bucle
//si son declaradas fuera de el, no influye en la que ya fue declarada dentro de el



//para hacer un bucle for se tiene que: 
//1. Declarar e inicializar una variable 
//2. Colocar una condición 
//3. La iteracion (aumento o decremento)

for (let i = 0; i <= 6; i++) {
    document.writeln(i + "<br>")

}

document.writeln("<br>")

for (let i = 6; i > 0; i--) {
    document.writeln(i + "<br>")

}

document.writeln("<br>")

//cuando i esta declarara e inicializada por fuera

let i = 3

for (i; i < 10; i++) {
    document.writeln(i + "<br>")
}

document.writeln("<br>")

//for con break

for (i = 0; i < 20; i++) {
    document.writeln(i + "<br>")
    if (i == 12) {
        break
    }
}

document.writeln("<br>")

//si se quiere que no se muestre el 12: 

for (i = 0; i < 20; i++) {

    if (i == 12) {
        break
    }
    document.writeln(i + "<br>")
    
}

document.writeln("<br>")

//si se quiere saltar el 12 pero seguir con el bucle:

for (i = 0; i < 20; i++) {

    if (i == 12) {
        continue
    }
    document.writeln(i + "<br>")
    
}

document.writeln("<br>")

//--- FOR IN ---

//el for in se utiliza para iterar sobre las propiedades de un objeto o los elementos de un array

//esta iteracion nos devuelve la posicion o el indice en la que esta ubicado el elemento dentro de la lista, no el objeto perse 

let frutas = ["manzana", "uva", "pera", "naranja", "sandia"]

for (fruta in frutas) {
    document.writeln(fruta + "<br>")
};

document.writeln("<br>")

//si queremos mostrar el elemento en lugar de la posicion, tenemos que acceder a el utilizando su indice

for (fruta in frutas) {
    document.writeln(frutas[fruta] + "<br>")
};

document.writeln("<br>")

//sintaxis para acceder a un elemento de un array: nombreDelArray[posicionDelElemento]

document.writeln(frutas[0] + "<br>") //manzana
document.writeln("<br>")
//en este caso, la variable fruta es la que nos da la posicion del elemento dentro del array frutas, entonces para acceder al elemento tenemos que usar esa variable como indice del array frutas, es decir: frutas[fruta]

// --- FOR OF ---

//el for of itera sobre las propiedades de un objeto iterable y muestra el valor de cada propiedad, a diferencia del for in que muestra la posicion o indice de cada elemento

for (let fruta of frutas) {
    document.writeln(fruta + "<br>")
};

document.writeln("<br>")

// ---- LABELS ----

//las labels se utilizan para nombrar un bloque de código, lo que permite controlar el flujo de ejecución de ese bloque desde otro lugar del código, como por ejemplo dentro de un bucle

//esto es especialmente útil cuando se tienen bucles anidados y se quiere salir de un bucle específico o continuar con la siguiente iteración de un bucle específico

document.writeln("<br>")

let array1 = ["naranja", "pera", "manzana"]
let array2 = ["patilla", "piña", "uva", array1, "cambur"]

forArray2:
for (let fruta in array2) {
    if (fruta == 3) {

        for (let fruta of array1) 
            {document.writeln(fruta + "<br>");}
            break forArray2;
            //aqui no nos va a mostrar "cambur" porque el break se ejecuta sobre el bucle llamado forArray2, que es el que itera sobre el array2, por lo que al ejecutarse el break, se sale de ese bucle y no se muestra el elemento "cambur"
    }

    else 
        {document.writeln(array2[fruta] + "<br>")};
}


//si queremos saltar el segundo for que itera sobre array1, seria asi:

document.writeln("<br>")

forArray2:
for (let fruta in array2) {
    if (fruta == 3) {

        for (let fruta of array1) {
            continue forArray2;
            document.writeln(fruta + "<br>");}
            
    }

    else 
        {document.writeln(array2[fruta] + "<br>")};
}

document.writeln("<br>")

//