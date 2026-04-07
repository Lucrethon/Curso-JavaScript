//Ejercicio 1: Cofla necesita las notas de las materias para saber si aprueba o no. Crear un sistema que almacene toda la información de las materias y las muestre en pantalla de forma ordenada. 

const materiasHTML = document.querySelector(".materias"); 

const materias = [
    {
        nombre: "Calculo 3",
        nota: 6,
    },
        {
        nombre: "Fisica 3",
        nota: 5,
    },
        {
        nombre: "Bases de datos 3",
        nota: 8,
    },
        {
        nombre: "Programacion 4",
        nota: 7,
    },

];

const obtenerMateria = (id) => {
    
    return new Promise ((resolved, rejected) => {
        let materia = materias[id];

        if (materias[id] == undefined) {
            rejected("Materia no encontrada");
        }
        else setTimeout(() => {resolved(materia)}, Math.random() * 2000);

    })
}; 

const mostrarMaterias = async () => {
    for (let i = 0; i < materias.length; i++) {
        let materia = await obtenerMateria(i)
        const htmlCode = `
        <div class="materia">
            <div class="nombre-materia">${materia["nombre"]}</div>
            <div class="nota-materia">${materia["nota"]}</div>
        </div>
        `;
        materiasHTML.innerHTML += htmlCode;
    }
};



mostrarMaterias();