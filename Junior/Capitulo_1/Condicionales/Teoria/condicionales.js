// -------- CONDICIONALES -----------

// Los condicionales ejecutan un bloque de codigo (abierto y cerrado por llaves {})dependiendo de si se cumple o no una condicion

num1 = 10
num2 = 20

if (num1 < num2) {
    alert("num1 es menor que num2")
}

// como la condicion es verdadera, se ejecuta el bloque de codigo dentro del if, y se muestra la alerta

nombre = "Juan"

if (nombre == "Pablo") {
    alert("Tu nombre es " + nombre);
}
else if (nombre == "Juan") {
    alert("No eres Pablo, tu nombre es " + nombre);
}

// el else if se ejecuta si la condicion del if es falsa, y su propia condicion es verdadera. 
// En este caso, como el nombre es "Juan", se muestra la alerta del else if

//para que se ejecute el bloque de codigo del else, la condicion del if y del else if deben ser falsas.

//else if = como el elif en python
//else = como el else en python