//Ejercicio 1

// Cofla para aprobar las materias de la universidad necesita tener un 90% de asistencia, un promedio por materia de al menos 7 de diez y tener como minimo el 75% de los trabajos entregados. Se debe: 

//1. Crear una funcion que le solicite los datos y decirle si aprueba o reprueba 

//2. Mostrar todo eso con colores representativos en la consola 

let promedioPorMateriaCofla = {

    "fisica" : {
        "promedio" : 5,
        "asistencias" : 60,
        "trabajos" : 10
    },
    
    "historia" : {
        "promedio" : 8,
        "asistencias" : 80,
        "trabajos" : 15
    },

    "algebra" : {
        "promedio" : 10,
        "asistencias" : 85,
        "trabajos" : 13
    }
    
}

let mayorPromedio = 10 
let totalClases = 90
let totalTrabajos = 15

function materiasAprobadas(promedioPorMateria) {

    for (const materia in promedioPorMateria)

        if (promedioPorMateria[materia].promedio >= 7 &&
            promedioPorMateria[materia].asistencias >= (Math.trunc(totalClases * 0.90)) &&
            promedioPorMateria[materia].trabajos >= (Math.trunc(totalTrabajos*0.75))
        ) {
            console.log(`%c${materia}: Aprobado`, "color: green; font-size: 20px; border: 2px solid green; padding: 5px;")
        }


        else {
            console.log(`%c${materia}: Reprobado`, "color: red; font-size: 20px; border: 2px solid red; padding: 5px;")
        }
}



function aprobado(promedio, asistencias, trabajosEntregados) {

    if (promedio >= 7 && asistencias >= (Math.trunc(totalClases*0.90)) && trabajosEntregados >= (Math.trunc(totalTrabajos*0.75))) {

        console.log("%cAprobado", "color: green; font-size: 20px; border: 2px solid green; padding: 5px;")

    } else {

        console.log("%cReprobado", "color: red; font-size: 20px; border: 2px solid red; padding: 5px;")
    }
}

materiasAprobadas(promedioPorMateriaCofla)


//Ejercicio 2

//Cofla no cree poder entregar el 75% de todos los trabajos. Neccesita dividir la tareas que hará semanalmente. Debe trabajar 8 horas por dia durante dos semanas entra las que tiene: 24 horas para estudias, 24 horas para trabajos practicos, 56 horas para trabajar y 8 horas para hacer las labores de la casa. Se debe: 

//1. Organizar las actividades diariamente
//2. Utilizar la consola para organizarlo
//4. Cada tarea no debe superar las 4 horas diarias 

let horasDiarias = 8
let totalHoras = 8*14
let totalHorasEstudio = 24
let totalHorasTrabajos = 24
let totalHorasTrabajo = 56
let totalHorasCasa = 8

function organizarTareas(horasEstudio, horasTrabajos, horasTrabajo, horasCasa) {

    let divisionHoras = {};
    let divisionDiariaHoras = {};

    divisionHoras["Horas Diarias de Estudio"] = horasEstudio
    divisionHoras["Horas Diarias de Trabajos"] = horasTrabajos
    divisionHoras["Horas Diarias de Trabajo"] = horasTrabajo
    divisionHoras["Horas Diarias de Casa"] = horasCasa

    for (const tarea in divisionHoras) {


        let horasDiarias = (divisionHoras[tarea] / 14).toFixed(2)

        minutosDiarios = (horasDiarias - Math.trunc(horasDiarias))*60

        divisionDiariaHoras[tarea] = `${Math.trunc(horasDiarias)} horas y ${Math.trunc(minutosDiarios)} minutos`
    }

    for (i = 0; i <= 14; i++) {

        if (i == 0) {
        console.log("Semana 1")}

        console.groupCollapsed(`Dia ${i+1}`)
        console.table(divisionDiariaHoras)
        console.groupEnd()


        if (i == 7) {
            console.groupCollapsed("Semana 2")
        }
    }

}

organizarTareas(totalHorasEstudio, totalHorasTrabajos, totalHorasTrabajo, totalHorasCasa)