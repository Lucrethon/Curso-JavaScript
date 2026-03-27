// ------------------ Eventos -----------------------
// *Definición
//Los eventos son cualquier cosa que suceda en la pagina web. Desde dar click a algo hasta mover el mouse o scrollear 

// *de Eventos o "Event Handlers"
//se les dice "on evenets" porque al principio se escriben con "on".
//Se manejan como una propiedad mas de los elementos HTML

const boton = document.querySelector(".button");

// boton.onclick = ()=> {
//     alert("Hola Mundo")
// }

//hacer esto anterior no es recomendable. se tiene que utilizar los "events listeners"

// *Escucha de eventos o "Event Listeners"

boton.addEventListener("click", ()=> {
    alert("Hola Mundo")
});

//si se va a utilizar una funcion de afuera, estas se tienen que declarar las funciones con "function" para que funcionen con el Event Listener 
//las funciones que se utilizan con Event Listener no pueden recibir parametro

const button = document.querySelector(".button2");


function saludar(e) {
    alert("Hola Mundo")
    button.removeEventListener("click", saludar); //esto lo que hace es remover el Event Listener del objeto y que deje de hacer la propia funcion "saludar"
    console.log(e.target) //se muestra la propiedad target del objeto event 
}

button.addEventListener("click", saludar);

//


// *El objeto Event
//El objeto event es el unico parametro que le podemos pasar a las funciones de un Event Listener 
//se le denomina como "evt", "e" o "event"
//si se coloca e.target (propiedad target, una de las propiedades del evento) se accede al objeto que desencadeno el evento



// *Flujo de Eventos o "event flow"
//orden en el que se ejecutan los eventos. Hay dos formas de ordenarlos:

// *Event Bubbling vs Event Capturing
//Event Bubbling: viene por defecto. Significa que se ejecutan primero los elementos mas especificos (los hijos) y despues los menos especificos (padres)


const button2 = document.querySelector(".button3");
const contenedor = document.querySelector(".contenedor");

contenedor.addEventListener("click", ()=>{
    alert("presiona el contenedor")
});

//si no estuviera el evento el boton sino solamente en el contenedor, aun presionando el boton, se ejecutaria el codigo del contenedor

button2.addEventListener("click", (e)=>{
    alert("presiona el boton")
    e.stopPropagation()

});

//cuando se presiona el boton, se ejecuta el codigo del boton pero tambien se ejecuta el codigo del contenedor 

// *event.stopPropagation()
//para que no se ejecute el codigo de los elementos padres al hacer el elemento del elemento hijo, se le tiene que agregar al codigo e.stopPropagation(). El hijo recibiria e (event). eso detiene todos los eventos asociados


//Event Capturing: se ejecuta al revez del bubbling. Para poder activarlo, al contenedor padre hay que colocar "true" al final 


const button3 = document.querySelector(".button4");
const contenedor1 = document.querySelector(".contenedor1");
const contenedor2 = document.querySelector(".contenedor2");


contenedor1.addEventListener("click", ()=>{
    alert("presiona el contenedor naranja")
}, true);


contenedor2.addEventListener("click", ()=>{
    alert("presiona el contenedor gris")
}, true);

button3.addEventListener("click", ()=>{
    alert("presiona el boton")
});

//al ponerle "true" al padre ahora se ejecuta al reves: primero se ejecuta el codigo de contenedor padre y despues el de los contenedores hijos
//como contenedor2 es padre de boton3, hay que agregarle el true tambien, porque sino, al presionar contenedor1 el orden seria: contenedor1, boton, contenedor2. Si no se especifica en todos los padres, el event flow viaja al mas especifico primero siempre 




// ------------------ Eventos del Mouse --------------------------


// click - ocurre con un click

// dblclick - ocurre con un doble click

const button4 = document.querySelector(".doubleclick");
button4.addEventListener("dblclick", ()=>{
    alert("Hola Mundo")
});

//


// mouseover - ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos.

const contenedor3 = document.querySelector(".mouseover");


contenedor3.addEventListener("mouseover", ()=>{
    alert("Hola Mundo")
});



//

// mouseout - ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios.

const contenedor4 = document.querySelector(".mouseout");


contenedor4.addEventListener("mouseout", ()=>{
    alert("Hola Mundo")
});


// ----- otros -----

// contextmenu - ocurre con un click en el botón derecho en un elemento para abrir un menú contextual. Si das click derecho adentro del elemento, mantienes y sueltas afuera del mismo, no se ejecuta 

contenedor.addEventListener("contextmenu", ()=>{
    alert("presiona el boton derecho")
});


// mouseenter - ocurre cuando el puntero se mueve sobre un element (solo se utiliza para internet explorer)
// mousemove - ocurre cuando el puntero se mueve mientras está sobre un elemento.


// mouseleave - ocurre cuando el puntero se mueve fuera de un elemento.


// mousedown - ocurre cuando un usuario apreta un boton del mouse sobre un elemento 


// mouseup - ocurre cuando un usuario suelta un botón del mouse sobre un elemento.





// ------------------- Eventos del Teclado ----------------------

const input = document.querySelector(".input-prueba");
const contenedor5 = document.querySelector(".contenedor-prueba");



// keydown - ocurre cuando se presiona una tecla

input.addEventListener("keydown", (e)=>{
    console.log("una tecla fue presionada")
    console.log(e.key) //te dice que tecla acciono el evento
    console.log(e.keyCode)
});



// keypress - ocurre cuando una tecla se presiona y se suelta en el mismo elemento (obsoleto)

// keyup - ocurre cuando se suelta una tecla

input.addEventListener("keyup", (e)=>{
    console.log("una tecla fue soltada")
    console.log(e.key)
    console.log(e.keyCode)
});


// --------------------------- Eventos de la interfaz ---------------------------

const img = document.querySelector(".img-prueba")

// error - ocurre cuando sucede un error durante la carga de un archivo multimedia.

img.addEventListener("error", ()=> {
    console.log("ha ocurrido un error")

})

// load - ocurre cuando un objeto se ha cargado

img.addEventListener("load", ()=> {
    console.log("ha cargado la imagen")

})

window.addEventListener("load", ()=> {
    console.log("ha cargado la pagina")

})

//

// beforeunload - ocurre antes de que el documento esté a punto de descargarse

window.addEventListener("beforeunload", ()=> {
    console.log("estas a punto de irte del sitio")

})

// unload - ocurre una vez que se ha descargado una página (cuando te vas del sitio)

window.addEventListener("unload", ()=> {
    console.log("estas a punto de irte del sitio")

})

// resize - ocurre cuando se cambia el tamaño de la vista del documento.

window.addEventListener("resize", ()=> {
    console.log("se ha cambiado el tamaño de la pagina")

})

//scroll

window.addEventListener("scroll", ()=> {
    console.log("se ha scrolleado la pagina")

})


//select - ocurre despues de que el usuario selecciona algún texto <input> o <textarea>

const input2 = document.querySelector(".input-prueba2");

input2.addEventListener("select", (e)=> {
    console.log("se ha seleccionado texto")
    console.log(e.target.selectionStart) //Muestra el indice desde que caracter se esta seleccionando (inicio)
    console.log(e.target.selectionEnd) //Muestra el indice hasta que caracter se esta seleccionando (final)
})

const input3 = document.querySelector(".input-prueba3");
const contenedor6 = document.querySelector(".contenedor-prueba1");

input3.addEventListener("select", (e)=> {
    console.log("se ha seleccionado texto")
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = e.target.value; 
    contenedor6.innerHTML = textoCompleto.substring(start, end);

})

const contenedor7 = document.querySelector(".contenedor-prueba2");


input3.addEventListener("keyup", (e) => {
    let tecla = e.key 
    contenedor7.innerHTML = `La ultima tecla presionada fue ${tecla}`
})


// ------------------- Timers (Temporizadores) --------------------------

//nos permite hacer trabajos con tiempos

// setTimeout() -> recibe una funcion como primer parametro y en cuanto tiempo quiero que se realice la accion como segundo parametro 

const temporizador = setTimeout(()=> {
    document.writeln("Hola Mundo")
}, 2000)

// clearTimeout() -> Esto es para hacer que no se ejecute mas

clearTimeout(temporizador) // -> Eliminamos el temporizador

// setInterval() -> Nos ejecuta una funcion cada x tiempo que el desarrollador establezca 

const intervalo = setInterval(()=> {
    console.log("Hola Mundo")
}, 2000)

// clearInterval() -> Eliminamos el intervalo 

clearInterval(intervalo)

//