// Ejercicio 1

//Cofla ya está terminando el primer semestre del primer ciclo, la tarea que debe realizar su calculadora es mucho mas avanzada de la que tenía antes, además de suma, resta, multiplicación y división ahora también necesitará calcular potencias, raices cuadradas y cúbicas. Se debe: 

// - Perfeccionar calculadora para poder implementar las nuevas funciones



// Ejercicio 2: 

//La universidad de cofla ya tiene asignada a cada materia su respectivo profesor. Se necesita: 

//1. Crear una función que nos devuelva: 

//- El nombre del profesor de cada materia.
//- Nombre de los alumnos inscritos en ella

let calculo = {
    "profesor" : "Fernando Brito",
    "alumnos" : ["alejandro", "dalto", "maria", "cofla"]
}

let trigonometria = {
    "profesor" : "Gustavo Ponce",
    "alumnos" : ["lucas", "juan", "pedro", "cofla"]
}

let fisica = {
    "profesor" : "Maria Perez", 
    "alumnos" : ["lucas", "alejandro", "maria", "cofla", "pedro", "juan", "dalto", "ramon", "carlos", "fernando", "santiago", "martina", "sofia", "valentina", "diego", "camila", "nicolas", "julian", "gabriel", "emilia"]
}

let programacion = {
    "profesor" : "Carlos Ramirez",
    "alumnos" : ["juan", "alejandro", "pedro"]
}

let materias = {calculo, trigonometria, fisica, programacion}

function mostrarInformacionMateria(listaMaterias, materia) {


    document.writeln(`El profesor de ${materia} es ${listaMaterias[materia].profesor} y los alumnos inscritos son: ${(listaMaterias[materia].alumnos).join(", ")} <br>`)

}

function preguntarMateria() {

    let materia
    let respuesta

    do {respuesta = prompt("De qué materia quiere saber información? 1.Calculo 2.Trigonometria 3.Fisica 4.Programacion. Ingrese el numero:")} while (respuesta != 1 && respuesta != 2 && respuesta != 3 && respuesta != 4)

    if (respuesta == 1) {
        materia = "calculo"
    }

    else if (respuesta == 2) {
        materia = "trigonometria"
    }

    else if (respuesta == 3) {
        materia = "fisica"
    }

    else if (respuesta == 4) {
        materia = "programacion"
    }

    return materia
}

let materia = preguntarMateria()
mostrarInformacionMateria(materias, materia)

//2. Una función que nos permita saber en cuntas clases esta Cofla inscrito, el nombre de la clase y sus profesores 

const validarAlumnoPorMateria = function(listaMaterias, alumno) {

    let materiasInscritas = []

    for (let materia in listaMaterias) {
        if (listaMaterias[materia].alumnos.includes(alumno)) {
            materiasInscritas.push(listaMaterias[materia])
            document.writeln(`${alumno} esta inscrito en ${materia} con el profesor ${listaMaterias[materia].profesor} <br>`)
        }

        else {
            document.writeln(`${alumno} no esta inscrito en ${materia} <br>`)
        }
    }

    document.writeln(`El alumno ${alumno} esta inscrito en ${materiasInscritas.length} materias <br>`)
}

validarAlumnoPorMateria(materias, "alejandro")


// Ejercicio 3: 

//Hay que crear un sistema de inscripcionees para la universidad de Cofla, el sistema debe permitir:

//1. Preguntarle al usuario en que materia se quiere inscribir
//2. Si hay 20 inscritos, negarle la inscripción a ese alumno
//3. Si no hay 20 inscritos, inscribirlo y añadirlo a la lista de alumnos inscritos en esa materia.

function preguntarAlumno() {

    let alumno = prompt("Ingrese su nombre para inscribirse: ")
    return alumno
}




function preguntarMateriaInscripcion() {

    let materia
    let respuesta

    do {respuesta = prompt("En cual materia te quieres inscribir? 1.Calculo 2.Trigonometria 3.Fisica 4.Programacion. Ingrese el numero:")} while (respuesta != 1 && respuesta != 2 && respuesta != 3 && respuesta != 4)

    if (respuesta == 1) {
        materia = "calculo"
    }

    else if (respuesta == 2) {
        materia = "trigonometria"
    }

    else if (respuesta == 3) {
        materia = "fisica"
    }

    else if (respuesta == 4) {
        materia = "programacion"
    }

    return materia
}


function inscribirAlumno(listaMaterias, alumno, materia) {

    if (listaMaterias[materia].alumnos.length >= 20) {
        alert("Ya no hay mas cupos para esta materia")
    }

    else {
        if (listaMaterias[materia].alumnos.includes(alumno)) {
        alert(`El alumno ${alumno} ya esta inscrito`)
    }
        else {
            listaMaterias[materia].alumnos.push(alumno)
            alert(`El alumno ${alumno} se ha sido inscrito exitosamente`)
        }
    }

}

let alumno = preguntarAlumno()
materia = preguntarMateriaInscripcion()
inscribirAlumno(materias, alumno, materia)
mostrarInformacionMateria(materias, materia)