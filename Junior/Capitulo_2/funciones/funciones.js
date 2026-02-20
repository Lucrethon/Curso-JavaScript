
let respuesta = prompt("Hola que tal tu día?")


function saludar(respuesta) {
    
if (respuesta == "bien") {
alert("me alegro")
}
else {alert("que mal")}
}

saludar(respuesta)


// --- RETURN ---s

function saludar1(respuesta) {

if (respuesta == "bien") {
return "me alegro"
}
else {return "que mal"}}



saludo = saludar1(respuesta)

alert(saludo)




//Las funciones se pueden crear de las siguientes formas:

let nombre = prompt("¿Cuál es tu nombre?")



function saludar2(nombre){
    let frase = `Hola ${nombre}! ¿Cómo estás?`
    alert(frase)
}

//ó:

const saludar3 = function(nombre){
    let frase = `Hola ${nombre}! ¿Cómo estás?`
    alert(frase)
}

//ó (funciones flecha)

const saludar4 = (nombre)=> {
    let frase = `Hola ${nombre}! ¿Cómo estás?`
    alert(frase)
}

//Si la función solo tiene una línea, se puede escribir sin llaves y sin la palabra return:
//Y si tiene un solo parámetro, se pueden omitir los paréntesis:

const saludar5 = nombre => `Hola ${nombre}! ¿Cómo estás?`

saludar2(nombre)
saludar3(nombre)
saludar4(nombre)
alert(saludar5(nombre))


//---

function isPrimo(numero){

    let rango = Range(2, numero)

    if (numero % 2 == 0) {
        alert("no es primo")}
    
    else if (numero % 3 == 0) {
        alert("no es primo")}
    
    else if (numero % 5 == 0) {
        alert("no es primo")}
    
    else if (numero % 7 == 0) {
        alert("no es primo")}
    

    else if (numero == 1 ||
            numero == 2 ||
            numero == 3 ||
            numero == 5 ||
            numero == 7
    ) {
        alert("primo")}

        

    // else if (); {}
}

// let numero = prompt("ingresa un numero")

// isPrimo(numero)