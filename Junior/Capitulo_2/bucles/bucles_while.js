// --- WHILE ---

//mientras que el if pregunta una sola vez si la condición se cumple, el while lo hace repetidamente hasta que deje de cumplirse

let numero = 0

while (numero < 10) {
    console.log(numero)
    numero++
    //como se le suma uno constantemente, el número va aumentando y eventualmente llegará a 10, momento en el que la condición dejará de cumplirse y el bucle se detendrá
}

document.writeln("<br>")

// --- DO WHILE ---

//la diferencia entre el while y el do while es que el do while ejecuta el bloque de código al menos una vez, incluso si la condición no se cumple

//Primero se ejecuta y despues se pregunta si la condición se cumple, por lo que el bloque de código se ejecutará al menos una vez

let numero1 = 0

do {

    document.writeln(numero1 + "<br>");
    numero1++;
    
} while (numero1 < 10)

document.writeln("<br>")

//---- BREAK ----

let numero2 = 9

while (numero2 < 1000) {

    if (numero2 !== 33) {   //si el numero es diferente a 33 
    numero2++;
    document.writeln(numero2 + "<br>"); //se ejecuta este codigo
    }

    else{break} //si es 33, el bucle se rompe

    }

document.writeln("<br>")


let numero3 = 32

while (numero2 < 1000) {

    numero2++;
    document.writeln(numero2 + "<br>");

    if (numero2 == 66) { break } //si el numero es 66, el bucle se rompe
    }

    document.writeln("<br>")

