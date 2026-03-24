



//Ejercicio 1: Cofla se va a comprar una computadora para la universidad. La panalla de la misma debe: 
//1. Ser full HD
//2. preguntarle si esta seguro antes de comprar 

width = window.screen.width;
height = window.screen.height;

comprar = confirm(`Esta pantalla tiene ${height} de alto y ${width} de ancho. ¿Estas seguro de que quieres comprar esta pantalla?`)

if (comprar) {
    alert("Compra realizada con exito")
} 
else {
    alert("Compra cancelada")
}

//Ejercicio 2: Cofla esta navegando en un sitio web es pantalla completa, pero no puede ver ni la url ni nada de la misma. Se debe: 
//1. crear un sitio web que muetre los suficientes datos para conocer el sitio web (barra de marcadores, protocolo, URL)

const url = window.location.href
const protocol = window.location.protocol
const hostname = window.location.hostname
const pathname = window.location.pathname

document.writeln(`
    <b>Informacion de la web:</b> <br>
    URL = ${url} <br>
    Protocol = ${protocol} <br>
    Hostname = ${hostname} <br>
    Pathname = ${pathname} <br>
    `)
