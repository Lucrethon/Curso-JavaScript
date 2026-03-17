
const titulo = document.querySelector(".titulo");


// --------------------- Clases, classList y Métodos de classList --------------------

// Definición y usos

//Classlist es una propiedad de los elementos que devuelve una colección de las clases del elemento, y nos permite manipular las clases de un elemento de forma sencilla, sin tener que preocuparnos por el formato de la cadena de texto que representa las clases (como el espacio entre las clases).

titulo.classList; // devuelve una colección de las clases del elemento con la clase "titulo" -> devuelve un DOMTokenList (no es un array)


// add() - añade una clase
titulo.classList.add("grande") //le añadimos la clase "grande" al elemento con la clase "titulo"
//uno de sus usos es para añadir una clase que ya tenemos definida en CSS, para aplicar los estilos de esa clase al elemento, sin tener que modificar el HTML y agregar la clase directamente en el elemento



// remove() - remueve una clase
titulo.classList.remove("grande") //eliminamos la clase "grande" del elemento con la clase "titulo"


// item() - devuelve la clase del índice especificado
console.log(titulo.classList.item(0)) //devuelve la clase del índice 0 (la primera clase) del elemento con la clase "titulo" -> devuelve una cadena de texto con el nombre de la clase o null si no existe


// contains() - verifica si ese elemento posee o no, la clase especificada.
console.log(titulo.classList.contains("rojo")) //devuelve true si el elemento con la clase "titulo" posee la clase "rojo", false en caso contrario


// replace() - reemplaza una clase por otra
titulo.classList.replace("rojo", "verde") //reemplaza la clase "rojo" por "verde" en el elemento con la clase "titulo"


// toggle() - si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.

titulo.classList.toggle("grande") //si el elemento con la clase "titulo" no tiene la clase "grande", se la añade, si ya la tiene, se la elimina --> devuelve true si se añadió la clase, false si se eliminó

//se le puede agregar un segundo parámetro booleano para forzar la adición o eliminación de la clase, dependiendo del valor del booleano (true para añadir, false para eliminar)


//------------------------ Obtención y Modificación de Elementos HTML con JavaScript ------------------


const titulo2 = document.querySelector(".titulo2"); // selecciona el primer elemento con la clase "titulo2" y lo asigna a la variable titulo2


// textContent - devuelve el texto de cualquier nodo.

let resultado = titulo2.textContent; //Se enfoca solo en el texto, ignorando cualquier etiqueta HTML. Es el más rápido y seguro.
//Uso: Cuando solo quieres leer o cambiar el texto sin preocuparte por el formato.

document.writeln(resultado); // muestra el texto del elemento con la clase "titulo2" en el documento
document.writeln("<br>"); 


// innerHTML - devuelve el contenido html de un elemento.

resultado = titulo2.innerHTML; //Devuelve (o cambia) el contenido interno del elemento, incluyendo las etiquetas HTML que tenga dentro.
//Uso: Cuando necesitas insertar etiquetas nuevas (como un <span> o un <br>) dentro de un elemento.
alert(resultado); 


// outerHTML - devuelve el codigo HTML completo del elemento.

resultado = titulo2.outerHTML; // Es el "paquete completo". Devuelve el contenido interno más la propia etiqueta del elemento en el que estás.
//Uso: Cuando necesitas reemplazar el elemento entero por otro trozo de código.
alert(resultado); // muestra el código HTML completo del elemento con la clase "titulo2" en una ventana de alerta
document.writeln("<br>");


//METODOS QUE NO SE USAN 

// innerText - devuelve el texto visible de un node element. (ya no se usa mucho, se prefiere textContent)

resultado = titulo2.innerText; // devuelve el texto visible del elemento con la clase "titulo2"
document.writeln(resultado); // muestra el texto visible del elemento con la clase "titulo2" en el documento
document.writeln("<br>");

// outerText - devuelve el texto que de las etiquetas html incluidas las etiquetas. (Nota: esta propiedad está en desuso y no es estándar; generalmente se prefiere innerText).

resultado = titulo2.outerText; // devuelve el texto del elemento con la clase "titulo2" incluyendo las etiquetas HTML del elemento
document.writeln(resultado); // muestra el texto del elemento con la clase "titulo2" incluyendo las etiquetas HTML del elemento en el documento
document.writeln("<br>");


//--------------------------- Creación de Elementos en HTML con JavaScript ----------------------


const contenedor = document.querySelector(".contenedor"); 

// createElement() 

const item = document.createElement("LI"); // crea un nuevo elemento HTML del tipo especificado (en este caso, un elemento "LI") y lo asigna a la variable item


document.writeln(item); // muestra el nuevo elemento "LI" creado en el documento (aunque no se verá nada porque no tiene contenido ni estilos
document.writeln("<br>");

//createTextNode() 

const textoDelItem = document.createTextNode("Este es un item de la lista"); // crea un nuevo nodo de texto con el contenido especificado y lo asigna al elemento "LI" creado anteriormente

//como se coloca un nodo dentro del item?

//appendChild() - añade un nodo al final de la lista de hijos de un nodo padre especificado.

item.appendChild(textoDelItem); // añade el nodo de texto creado anteriormente como hijo del elemento "LI" creado anteriormente
console.log(item);

//tambien se puede hacer item.innerHTML = "Este es un item de la lista"; pero no tendria las propiedades de un text Node
// 
// el uso de createTextNode y appendChild es más seguro, ya que evita problemas de seguridad como la inyección de código malicioso (XSS) al tratar el contenido como texto en lugar de HTML.

contenedor.appendChild(item); // añade el elemento "LI" (con su nodo de texto) como hijo del elemento con la clase "contenedor", lo que hace que se muestre en el documento


// createDocumentFragment() 
//se utiliza para agregar varios eleemntos a la vez, sin tener que agregar cada uno al DOM individualmente, lo que puede ser más eficiente en términos de rendimiento.

const fragmento = document.createDocumentFragment(); // crea un nuevo fragmento de documento y lo asigna a la variable fragmento

for (i = 0; i < 5; i++) {
    const item = document.createElement("LI");
    item.innerHTML = "este es el item " + (i + 1);
    fragmento.appendChild(item);
}


console.log(fragmento); // muestra el fragmento de documento creado anteriormente en la consola (aunque no se verá nada porque no tiene contenido ni estilos)
contenedor.appendChild(fragmento); // añade el fragmento de documento creado anteriormente como hijo del elemento con la clase "contenedor", lo que hace que se muestren los 5 nuevos elementos "LI" en el documento




//---------------------- Obtención y modificación de Childs (Hijos) ------------------------


// firstChild

const primerHijo = contenedor.firstChild; // devuelve el primer nodo hijo del elemento con la clase "contenedor" (puede ser un nodo de texto, un elemento, etc.)
//si hay espacio entre una etiqueta y otra, ese espacio se considera un nodo de texto, por lo que el primer nodo hijo puede ser un nodo de texto con un espacio en blanco, en lugar del primer elemento hijo (sucede lo mismo con lastChild). Por eso es recomendable usar firstElementChild para obtener el primer elemento hijo, ignorando los nodos de texto.
document.writeln(primerHijo);
document.writeln("<br>");


// lastChild

const ultimoHijo = contenedor.lastChild; // devuelve el último nodo hijo del elemento con la clase "contenedor" (puede ser un nodo de texto, un elemento, etc.)
document.writeln(ultimoHijo);
document.writeln("<br>");



// firstElementChild

const primerElementoHijo = contenedor.firstElementChild; // devuelve el primer elemento hijo del elemento con la clase "contenedor", ignorando los nodos de texto
document.writeln(primerElementoHijo);
console.log(primerElementoHijo);
document.writeln("<br>");


// lastElementChild

const ultimoElementoHijo = contenedor.lastElementChild; // devuelve el último elemento hijo del elemento con la clase "contenedor", ignorando los nodos de texto
document.writeln(ultimoElementoHijo);
console.log(ultimoElementoHijo);
document.writeln("<br>");

// childNodes: devuelve todos los nodos hijos de un elemento, incluyendo los nodos de texto (como los espacios en blanco entre las etiquetas), los elementos, etc. Devuelve una colección de nodos (NodeList) que se puede recorrer con un bucle.

const nodosHijos = contenedor.childNodes; // devuelve todos los nodos hijos del elemento con la clase "contenedor", incluyendo los nodos de texto
console.log(nodosHijos); // muestra la colección de nodos hijos del elemento con la clase "contenedor" en la consola
document.writeln(nodosHijos);
document.writeln("<br>");

nodosHijos.forEach(nodo => {
    document.writeln(nodo); // muestra cada nodo hijo del elemento con la clase "contenedor" en el documento
    document.writeln("<br>");
});

// children

const elementosHijos = contenedor.children; // devuelve todos los elementos hijos del elemento con la clase "contenedor", ignorando los nodos de texto
console.log(elementosHijos); // muestra la colección de elementos hijos del elemento con la clase. Esta coleccion no se puede recorrer con un forEach, pero si con un bucle for tradicional o con un for of
document.writeln(elementosHijos);
document.writeln("<br>");

for (hijo of elementosHijos) {
    console.log(hijo); // muestra cada elemento hijo del elemento con la clase "contenedor" en la consola
    document.writeln(hijo);
}


//---------------------- Métodos de Childs (Hijos) -------------------

// appendChild()

// replaceChild()

const parrafo = document.createElement("P"); // crea un nuevo elemento "P" y lo asigna a la variable parrafo
const h2Nuevo = document.createElement("H3"); // crea un nuevo elemento "H2" y lo asigna a la variable h3

h2Nuevo.innerHTML = "Titulo cool h3"
parrafo.innerHTML = "Parrafo cool"

const h3Antiguo = document.querySelector(".h3");

contenedor.replaceChild(h2Nuevo, h3Antiguo)
//se coloca como parametros primero el elemento que se quiere colocar nuevo y despues el elemento que se quiere remplazar


// removeChild()

const parrafoEliminar = document.querySelector(".texto"); 
contenedor.removeChild(parrafoEliminar)

// hasChildNodes()

document.writeln("<br>")

let respuesta = contenedor.hasChildNodes(); // devuelve true si el elemento con la clase "contenedor" tiene hijos
//para ques esta funcion nos diga false, el elemento tiene que estar completamente vacio. Si tiene texto, va a decir que tiene de child un texto

if (respuesta) {
    document.writeln("<br>")
    document.writeln(`El elemento ${contenedor} tiene los siguientes childs:`)
    for (hijo of contenedor.children) {
        document.writeln(hijo);
        document.writeln("<br>");
    }
}

else {
    document.writeln("<br>")
    document.writeln(`El elemento ${contenedor} no tiene childs`);
}


//-------------------- Propiedades de parents (Padres) ---------------


// parentElement => selecciona el padre de un elemento cuando es HTML

respuesta = h2Nuevo.parentElement
console.log(respuesta)


// parentNode => selecciona el padre de un elemento cuando no es HTML sino otra cosa


//---------------------  Propiedades de siblings (Hermanos) ------------------
//son los nodos que estan en el mismo rango o nivel


// nextSibling

console.log(h2Nuevo.nextSibling) //=> text


// previousSibling

console.log(h2Nuevo.previousSibling) //=> text

// nextElementSibling

console.log(h2Nuevo.nextElementSibling) //=> li

// previousElementSibling

console.log(h2Nuevo.previousElementSibling) //=> <p>


//------------ Nodos - Extras -----------

//-closest() : ubica el elemento ascendente o padre mas cercano

console.log(h2Nuevo.closest(".contenedor")) //=> <div class="contenedor">