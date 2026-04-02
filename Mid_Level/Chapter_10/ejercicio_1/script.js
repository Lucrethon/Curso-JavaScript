//Ejercicio 1: Los profesores de Cofla necesitan una aplicacion para cargar las notas de los alumnos. Se necesita crear una interfaz que:
//1. Permita introducir las notas de los alumnos
//2. Validar que no haya errores en la introduccion de las notas (por ejemplo, que no se introduzcan letras en lugar de numeros, o que las notas no sean mayores a 10)
//3. Promediar notas con trabajos 
//4. Si el promedio es mayor a 7/10, el alumno aprueba

alumnos = [
    "Lucas Dalto",
    "Samanta Dias",
    "Valentina Perez",
    "Carlos Ramirez",
    "Cofla XD"
];

const container = document.querySelector(".grid-container");

const boton = document.querySelector(".button");

const resultado = document.querySelector(".resultado");

let totalTrabajos = 30;

let htmlCode = "";

for (let alumno of alumnos) {
    htmlCode += `
        <div class="grid-item nombre">${alumno}</div>
        <input type="number" class="grid-item trabajos-entregados">
        <input type="number" class="grid-item nota">
        <div class="grid-item promedio"></div>
        <div class="grid-item aprobado"></div>
    `
};

container.innerHTML += htmlCode;

const totalTrabajosEntregados = document.querySelectorAll(".trabajos-entregados");
const totalNotas = document.querySelectorAll(".nota");
const totalPromedio = document.querySelectorAll(".promedio");
const totalAprobado = document.querySelectorAll(".aprobado");

const validarCampos = ()=> {
    let mensajesDeError = [];
    
        for (let dato of totalTrabajosEntregados) {
        if (dato.value > totalTrabajos || dato.value < 0) {
            mensajesDeError.push("La cantidad de trabajos entregados no puede ser mayor a 30 ni menor a 0");
            break; // Detenemos el bucle para no mostrar el mismo error varias veces
        }
    };

        for (let dato of totalNotas) {
        if (dato.value > 10 || dato.value < 0) {
            mensajesDeError.push("La nota no puede ser mayor a 10 ni menor a 0");
            break;
        }
    }

    // Si hay al menos un error guardado, lanzamos una sola excepción con todos los mensajes
    if (mensajesDeError.length > 0) {
        throw new Error(mensajesDeError.join("<br>"));
    }
};

const pesoNotas = 0.7;
const pesoTrabajos = 0.3;

//join sirve para unir los elementos de un array en una sola cadena de texto, utilizando el separador que se le indique (en este caso, "<br>" para crear un salto de línea entre cada mensaje de error).


const calcularPromedio = ()=> {

    let promedioTrabajos = []; 
    let promedioNotas = [];

    for (let dato of totalTrabajosEntregados) {
        let promedioTrabajo = ((dato.value / 30) * 10) * pesoTrabajos
        promedioTrabajos.push(promedioTrabajo)};

    for (let dato of totalNotas) {
        let promedioNota = (dato.value * pesoNotas)
        promedioNotas.push(promedioNota)};
        
    const promedios = promedioTrabajos.map((promedioTrabajo, index) => promedioTrabajo + promedioNotas[index]);

    return promedios;

}

//map es un método de los arrays en JavaScript que se utiliza para crear un nuevo array a partir de otro array existente, aplicando una función a cada uno de sus elementos
// En este caso, se está utilizando para sumar el promedio de trabajos y el promedio de notas correspondientes a cada alumno, generando así un nuevo array llamado promedios que contiene el resultado de esa suma para cada alumno.
//sintaxis: array.map((elemento, indice) => { /* código que devuelve el nuevo valor para cada elemento */ })

const updateResults = ()=> {
    const promedios = calcularPromedio();

    for (let i = 0; i < promedios.length; i++) {
        totalPromedio[i].textContent = promedios[i].toFixed(2); // Mostrar el promedio con 2 decimales
        totalAprobado[i].textContent = promedios[i] >= 7 ? "Aprobado" : "Reprobado"; // Mostrar si el alumno aprobó o no
    }
}




boton.addEventListener("click", ()=> {
    try {
        validarCampos();
        resultado.innerHTML = ""; // Limpiamos si no hay errores
        updateResults(); // Aquí puedes continuar con tu lógica si todo es válido
    } catch (error) {
        resultado.innerHTML = error.message;
    }
})





