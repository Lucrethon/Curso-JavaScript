//Ejercicio 2: Los alumnos inscritos para reparar una materia ya fueron inscritos. Ahora los profesores tienen que visualizar los datos de todos los alumnos y definir los parametros para que este pase la materia. Se debe crear una interfaz que: 

//a. Sea agradable y atractiva 
//b. Contenga los datos de manera estructurada 
//c. Poder elegir cuando el alumno pasa la materia 
//d. Si el alumno rinde, se debe actualizar y reemplazar la información 

const boton = document.querySelector(".button")
const gridContainer = document.querySelector(".grid-container");


const alumnos = [
    {
        nombre: "Lucas Dalto",
        email: "lucas@gmail.com",
        materia: "Calculo III",
    },

        {
        nombre: "Samanta Dias",
        email: "samanta@gmail.com",
        materia: "Fisica I",
    },


        {
        nombre: "Valentina Perez",
        email: "valen@gmail.com",
        materia: "Historia",
    },


        {
        nombre: "Carlos Ramirez",
        email: "carlos@gmail.com",
        materia: "Literatura",
    },


        {
        nombre: "Cofla XD",
        email: "coflaxd@gmail.com",
        materia: "Informatica",
    },

];

let htmlCode = ""; //esto se hace para optimizar


for (let alumno in alumnos) {
    let nombre = alumnos[alumno].nombre;
    let email = alumnos[alumno].email;
    let materia = alumnos[alumno].materia;

    htmlCode += `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option>Semana 1</option>
                <option>Semana 2</option>
            </select>
        </div>
    `;

};

gridContainer.innerHTML = htmlCode;




boton.addEventListener("click", () => {
    let confirmar = confirm("Estas seguro que quieres actualizar los datos?")

    if (confirmar) {

        let divSemana = document.querySelectorAll(".semana");
    let semanaElegida = document.querySelectorAll(".semana-elegida");

    for (let i = 0; i < divSemana.length; i++) {
        divSemana[i].innerHTML = semanaElegida[i].value;
    }

    }
    
})

