// ------------Introducción a Window----------------
//es el objeto mas grande de javascript. Es la mas alta jerarquia de JS

// Hereda las propiedades de EventTarget

// open() - Carga un recurso en el contexto de un nuevo navegador o uno que ya existe.

let youtuberURL = "https://www.youtube.com/watch?v=xOinGb2MZSk&t=78s"

let ventana;

//ventana = window.open(youtuberURL);


// // close() - cierra la ventana actual, o la ventana en la que se llamó.

// ventana.close()



// closed - indica si la ventana referenciada está cerrada o no. Devuelve true si esta cerrada, devuelve false si esta abierta



// name - Obtiene / establece el nombre del contexto de exploración de la ventana.

// stop() - detiene la carga de recursos en el contexto de navegación actual.
//en coloquial, deja de cargar lo que estaba cargando o para la recarga o actualizacion de pagina


// alert() - muestra un cuadro de alerta con el contenido especificado y un botón Aceptar.

//alert("rancio")


// print() - Abre el cuadro de diálogo Imprimir para imprimir el documento actual.

//print()

// prompt() - Abre un cuadro de diálogo con un mensaje que solicita al usuario un dato (String)

//prompt("dame un dato")

// confirm() - Abre un cuadro de diálogo con un mensaje y dos botones: Aceptar y Cancelar.

respuesta = confirm("estas seguro de que deseas abandonar el proceso?")
console.log(respuesta)
//comfirm devuelve true si el usuario presiona Aceptar, devuelve False si presiona cancelar 


//------------Screen-------------------
//Screen es uno de los tantos objetos que tiene window


// screen - devuelve una referencia al objeto de pantalla asociado con la ventana.

const screen = window.screen; 

console.log(screen);
document.writeln(screen.availHeight);

//screen.availHeight es la altura que puede tener la window del browser si esta maximizada, incluyendo las barras del browser 
//screen.Height es el alto total de la pantalla 

// screenLeft - devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla.

// screenTop - devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la pantalla.

const screenLeft = window.screenLeft;
const screenTop = window.screenTop;

//son solamente propiedades de lectura. No se pueden modificar en codigo

document.writeln(`Left: ${screenLeft} - Top: ${screenTop}`)


// scrollX - devuelve el número de píxeles que el documento se desplaza actualmente horizontalmente.

// scrollY - devuelve el número de píxeles que el documento se desplaza actualmente verticalmente.

const scrollX = window.scrollX; //cuanto me desplace en pixeles en horizontal hacia la derecha
const scrollY = window.scrollY; //cuanto me desplace en pixeles en vertical hacia abajo

alert(scrollY)

// scroll() - desplaza la ventana a un lugar particular en el documento. (con options y con posiciones)

window.scroll(0, 100)
//scrollTo es casi lo mismo




//todo a partir de aqui no se usa mucho

// resizeBy() - cambia el tamaño de la ventana actual en una cantidad específica.
//le das los valores en X y Y de como quieres que se redimencione la ventana indicada 
//lo hace de forma relativa


// resizeTo() - redimensiona dinámicamente la ventana.
//casi lo mismo que resizeBy, solo que de forma absoluta

// moveBy() - Mueve la ventana en una ubicación relativa.

// moveTo() - Mueve la ventana en una ubicación absoluta.


// ----------------Objetos barprop------------------
//son objetos a los que podemos acceder para comprobar su visibilidad su visibilidad

// locationbar
//window.locationbar.visible => si es visible, va a devolver true y viseversa

// menubar

// personalbar

// scrollbars

// statusbar

// toolbar


// ----------------------Location--------------------

// window.location.href ----------> (devuelve el href (URL) de la página actual) (href=url completa de la paginam, con protocolo, dominio, etc)

const href = window.location.href;
document.writeln(href)


// window.location.hostname ----> (devuelve el nombre de dominio del servidor web) (hostname=nombre del dominio)

// window.location.pathname ----> (devuelve la ruta y el nombre de archivo de la página actual) (donde te encuentras actualmente en la pagina, en que parte) (pathname = nos devuelve lo que esta despues del dominio)

// window.location.protocol ------> (devuelve el protocolo web utilizado (http: o https :)) si dice http es un sitio inseguiro, si dice https es seguro

// window.location.assign() ------> (carga un nuevo documento) (nos carga un documento)

