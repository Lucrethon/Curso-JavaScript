//Ejercicio 1
//El sintecho al que Cofla le dio el dinero para comprarse la loteria gana. Hace una fiesta para celebrar. 
//Compra una maquina en donde: 
//1. No pueden pasar los menores de 18
//2. La primera persona que entre despues de las 2:00 am, no paga
//3. A las 7 termina la wea 
let entradaGratis = false



let edad = prompt("¿Cuántos años tienes?")


function validarHora(){
    let hora

    do hora = prompt("¿Qué hora es? (en formato 24 horas)")

    while (hora > 24 || hora < 0) {
    }

    return hora}

function validarCliente(hora, edad){

    if (edad > 18) {      

        if (hora >= 2 && hora < 7 && entradaGratis == false) {
        alert("Eres la primera persona despues de las 2AM. Entrada gratis para ti!")
        entradaGratis = true //esto va a hacer que la próxima persona que entre después de las 2:00 am tenga que pagar, porque ya se usó la entrada gratis
    }

        else {alert(`Son las ${hora}. Puedes pasar pero tienes que pagar la entrada`)}}
        
    else {
        alert("No puedes pasar flaco tas muy peque")
    }
}

let hora = validarHora()

validarCliente(hora, edad)

edad = prompt("¿Cuántos años tienes?")

validarCliente(hora, edad)


//Ejercicio 2
//Cofla se inscribe en una universidad, no obstante, la facultad tiene un problema de registro de asistencias y no se podra iniciar las clases hasta que este arreglado. Se tiene que crear un sistema en donde: 
//1. Crear un sistema para registrar presentes (P) y ausentes (A)
//2. Pasado los 30 días, mostrar el porcentaje de asistencias de cada alumno
//3. Si el porcentaje de inasistencias es mayor o igual al 10%, el alumno no aprueba el curso

let cantidadAlumnos = prompt("¿Cuántos alumnos hay en la clase?")

let listaAlumnos = []

for (i = 0; i < cantidadAlumnos; i++) {
    listaAlumnos[i] = [prompt("Nombre del alumno " + (i + 1)), 0]
}

const TomarAsistencia = (lista, alumno) => {
    let asistencia 
    
    do asistencia = prompt(lista[alumno][0] + " presente o ausente? (responder P o A) " + (d + 1) + "º día")

    while (asistencia != "P" && asistencia != "p" && asistencia != "A" && asistencia != "a") {
    }

    if (asistencia == "P" || asistencia == "p") {
        lista[alumno][1]++}

    else {}
    }

    //se modifica el segundo elemento del array de cada alumno, que es el contador de ausencias, sumándole uno cada vez que el alumno asiste a clase

for (d = 0; d < 30; d++) {

    for (alumno in listaAlumnos) {
        TomarAsistencia(listaAlumnos, alumno)
    }

}

const alumnoSuspendido = (lista, alumno) => {
    if (lista[alumno][1] >= 20)
        alert(`${lista[alumno][0]} aprobado. Tuvo ${lista[alumno][1]} asistencias y ${30 - lista[alumno][1]} ausencias`)
    else 
        alert(`${lista[alumno][0]} suspendido. Tuvo ${lista[alumno][1]} asistencias y ${30 - lista[alumno][1]} ausencias`)
}

for (alumno in listaAlumnos) {
    alumnoSuspendido(listaAlumnos, alumno)
}

    

//Ejercicio 3
//Crear una calculadora que simplifique el trabajo (suma, resta, multiplicacion, division) y que tenga una funcion para mostrar el resultado.


//Ejercicio 4
// Filtrado de Usuarios Activos
// Tienes un array de objetos que representan usuarios:

const usuarios = [
    { nombre: "Sara", edad: 25, activo: true },
    { nombre: "Juan", edad: 15, activo: true },
    { nombre: "Pedro", edad: 30, activo: false },
    { nombre: "María", edad: 22, activo: true },
    { nombre: "Luis", edad: 17, activo: false },
    { nombre: "Ana", edad: 28, activo: true },
    { nombre: "Carlos", edad: 35, activo: false },
];

//Crea una función que reciba este array y devuelva un nuevo array solo con los nombres de los usuarios que sean mayores de edad (18+) y estén activos.



const validarUsuarios = (lista) => {
    let usuariosValidados = []

    for (usuario in lista) {
        if (lista[usuario].edad > 18 && lista[usuario].activo == true) {
            usuariosValidados.push(lista[usuario].nombre)
        }
    }
    return usuariosValidados
}

//push es como append en python, agrega un elemento al final del array

let usuariosValidados = validarUsuarios(usuarios)
alert(usuariosValidados)
