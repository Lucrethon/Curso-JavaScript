//Ejercicio: Cofla quiere saber cuantas personas cursan el semestre y cuantas no. Esta informacion la tiene una API de su universidad. Se tiene que: 

//Crear un sistema que le permita obtener esa informacion 
//Mostrarla ordenadamente en un sitio web



//con axios (importancia del try catch)

const getAprobados = async ()=> {

    let aprobados = document.querySelector(".aprobados")
    try {
        let resultado = await axios("estudiantes.txt");
        aprobados.innerHTML = `Estudiantes Aprobados: ${resultado.data.aprobados}`;

    } catch(err) {
        aprobados.textContent = "La API fallo";
    }

};

const getReprobados = async ()=> {

    let reprobados = document.querySelector(".reprobados")

    try{    
        let resultado = await axios("estudiantes.txt"); //el resultado lo almacenamos aqui sin usar otro then
        reprobados.innerHTML = `Estudiantes Reprobados: ${resultado.data.reprobados}`;
} catch(err) {
        reprobados.textContent = "La API fallo";
    }

};





document.getElementById("button-aprobados").addEventListener("click", getAprobados);
document.getElementById("button-reprobados").addEventListener("click", getReprobados);
