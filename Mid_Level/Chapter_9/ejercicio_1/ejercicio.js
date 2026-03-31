//Ejercicio 1: Cofla reprobo 2 materias. Debe presentar un formulario para presentar el examen de reparacion y poder aprobarlas. El formulario debe contener: 
//Nombre, mail y materia reprobada 
//Validar que los mails sean validos y los nombres sean reales 
//Enviar al servidor de manera pulida 

const nombre = document.getElementById("nombre");
const email = document.getElementById("correo");
const materia = document.getElementById("materia");
const boton = document.getElementById("submit");

const resultado = document.querySelector(".resultado");


function validateName() {
    let error = [];

    if (nombre.value.length < 3) {
        error [0] = true
        error [1] = "El nombre no puede tener menos de 3 caracteres"
        return error
    }

    else if (nombre.value.length > 40) {
        error[0] = true
        error[1] = "El nombre no puede tener mas de 40 caracteres"
        return error
    
    }

    else {
        error[0] = false
        error[1] = ""
        return error
    
    }

};


function validateEmail() {
    let error = [];

    if (email.value.includes("@") == false ||
        email.value.includes(".com") == false) {
            error[0] = true
            error[1] = "El email no es valido"
            return error

        }
    else {
        error[0] = false
        error[1] = ""
        return error
    }

};

function validateSubject() {
    let error = [];

    if (materia.value.length < 5) {
        error [0] = true
        error [1] = "Materia no valida"
        return error
}
    
    else {
        error[0] = false
        error[1] = ""
        return error
    
    }
};

function validateCampos() {

    let errorName = validateName();
    let errorEmail = validateEmail();
    let errorSubject = validateSubject();


    if (errorName[0] ||
        errorEmail[0] ||
        errorSubject[0]) {

            resultado.innerHTML = `
            ${errorName[1]} <br>
            ${errorEmail[1]} <br>
            ${errorSubject[1]} <br>
            `
        }

        else {
            resultado.innerHTML = `Formulario enviado exitosamente`
        }
    
};

boton.addEventListener("click", (e)=>{
    e.preventDefault(); //prevenimos el comportamiento default del boton
    validateCampos();

});

