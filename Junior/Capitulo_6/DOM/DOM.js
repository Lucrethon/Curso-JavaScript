// // DOM: Document Object Model

// Nodo - Un nodo en el DOM es cualquier etiqueta del cuerpo, como un párrafo, el mismo body o incluso las etiquetas de una lista.
//Los nodos hacen referencia a las etiquetas, pero no todas las etiquetas generan nodos, por ejemplo, las etiquetas de apertura y cierre de un párrafo no generan nodos, sino que el nodo se genera a partir del texto que se encuentra entre esas etiquetas.


// Document: el nodo document es el nodo raíz, a partir del cual derivan el resto de nodos.

// Element: nodos definidos por etiquetas html.

// Text: el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto).

// Attribute: los atributos de las etiquetas definen nodos, (en JavaScript no los veremos como nodos, sino como información asociada al nodo de tipo element)

// Comentarios y otros: los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos.


//------------------------------------------

//Document - Metodos de Selección de elementos 
//se aplican al objeto document 



// document.getElementById() - Selecciona un elemento por ID

let parrafo;

parrafo = document.getElementById("parrafo"); // devuelve el nodo con el id "parrafo"
//selecciona el elemento con el id "parrafo" y lo asigna a la variable parrafo

// Es recomendable usar console.log para ver la estructura del objeto en la consola (F12)
// document.writeln mostrará "[object HTMLParagraphElement]" o "null"
console.log("Elemento seleccionado por ID:", parrafo);
document.writeln(parrafo + "<br>"); // muestra el nodo (o null) en el documento




// document.getElementsByTagName() - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
let parrafos;

parrafos = document.getElementsByTagName("p"); // devuelve una colección de nodos con la etiqueta "p"
//selecciona todos los elementos con la etiqueta "p" y los asigna a la variable parrafo
//NO es un array, es una lista de elementos (no se utiliza mucho)

document.writeln(parrafos) // muestra la colección de nodos con la etiqueta "p" en el documento
document.writeln("<br>")
document.writeln(parrafos[0]) // muestra el primer nodo con la etiqueta "p" en el documento
document.writeln("<br>")



// document.querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores.

parrafo = document.querySelector(".texto"); // devuelve el primer nodo que coincida con la clase ".texto"
document.writeln(parrafo); 
document.writeln("<br>"); 

parrafo = document.querySelector("#parrafo"); // devuelve el primer nodo que coincida con el id "parrafo"
document.writeln(parrafo); 
document.writeln("<br>"); 



// document.querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado de selectores.

parrafos = document.querySelectorAll("#parrafo"); // devuelve todos los nodos que coincidan con el id "parrafo" -> devuelve un NodeList (no es un array)
document.writeln(parrafos); 
document.writeln("<br>");


//-------------------------------------------


// Métodos para Definir, Obtener y Eliminar atributos.


const rango = document.querySelector(".rango"); // selecciona el elemento con la clase "rango" y lo asigna a la variable rango


// setAttribute() - Modifica el valor de un atributo

rango.setAttribute("type", "color"); // modifica el valor del atributo "type" a "text"

//primer parametro: lo que queremos modificar, segundo parametro: el nuevo valor del atributo

//si el elemento seleccionado no tiene el atributo especificado, el método setAttribute() lo crea y le asigna el valor indicado. Si el atributo ya existe, se actualiza su valor con el nuevo valor proporcionado.



// getAttribute() - Obtiene el valor de un atributo

document.writeln(rango.getAttribute("type")); // obtiene el valor del atributo "type" y lo muestra en el documento
document.writeln("<br>");


// removeAttribute() - Remueve el valor de un atributo

rango.removeAttribute("type"); // elimina el atributo "type" del elemento seleccionado
document.writeln(rango.getAttribute("type")); // intenta obtener el valor del atributo "type" después de eliminarlo, lo que devolverá null



// Atributos globales: Son atributos que pueden ser utilizados en cualquier elemento HTML.

const titulo = document.querySelector(".titulo"); // selecciona el elemento con la clase "titulo" y lo asigna a la variable titulo

// class - lista de clases del elemento separadas por espacios

// contenteditable - indica si el elemento puede ser modificable por el usuario (bool)

titulo.setAttribute("contenteditable", "true"); // hace que el elemento con la clase "titulo" sea editable por el usuario

// dir - indica la direccionalidad del texto

titulo.setAttribute("dir", "rtl"); // establece la dirección del texto del elemento con la clase "titulo" de derecha a izquierda
//ltr - de izquierda a derecha
//rtl - de derecha a izquierda

// draggable - indica si el elemento puede ser arrastrado

// hidden - indica si el elemento aún no es, o ya no es, relevante.

titulo.setAttribute("hidden", "false"); // oculta el elemento con la clase "titulo" del documento
titulo.removeAttribute("hidden"); // muestra el elemento con la clase "titulo" en el documento

// id - define un identificador único.



// tabindex - indica si el elemento puede obtener un focus de input
//focus de input: el usuario pude interactuar con ese elemento con el teclado o el mouse. Por ejemplo. moverse a traves de elementos con la tecla Tab, o hacer clic en un elemento para seleccionarlo.


//solo elementos interactivos (como <button>, <a>, <input>) pueden recibir el foco. Con tabindex puedes cambiar esto:

// tabindex="0": Hace que un elemento que normalmente NO tiene foco (como un <div> o un <span>) sea parte de la navegación por teclado.
// tabindex="-1": Quita el elemento del orden de la tecla Tab (ya no puedes llegar a él saltando), pero aún puede recibir foco mediante código (JavaScript).
// tabindex="1" (o superior): Define un orden específico (si pones 1, será el primero en recibir el foco al pulsar Tab). Nota: No se recomienda abusar de números positivos porque rompe la experiencia natural del usuario.

titulo.setAttribute("tabindex", "0"); // hace que el elemento con la clase "titulo" pueda obtener un focus de input



// title - Contiene un texto con información relacionada al elemento al que pertenece.

titulo.setAttribute("title", "titulo normal"); // establece el atributo "title" del elemento con la clase "titulo" a "titulo normal"



//------------------------------------------


// Atributos de Inputs

const input = document.querySelector(".input-texto"); // selecciona el elemento con la clase "input-texto" y lo asigna a la variable input

// className

document.writeln("<br>");
document.writeln(input.className); // muestra el valor del atributo "class" del elemento con la clase "input-texto" en el documento
document.writeln("<br>");


// value: nos dice lo que esta adentro del input, lo que el usuario ha escrito o el valor por defecto del input

input.setAttribute("value", "Valor por defecto"); // establece el valor del atributo "value" del elemento con la clase "input-texto" a "Valor por defecto"
document.writeln(input.value); // muestra el valor del atributo "value" del elemento con la clase "input-texto" en el documento
document.writeln("<br>");


// type

document.writeln(input.type = "number"); // muestra el valor del atributo "type" del elemento con la clase "input-texto" en el documento
input.type = "color"; // establece el valor del atributo "type" del elemento con la clase "input-texto" a "text"

// accept

const inputFile = document.querySelector(".input-file"); // selecciona el elemento con la clase "input-file" y lo asigna a la variable inputFile    
inputFile.aceept = "image/png"


// form: permite ejecutar un input dentro de un formulario, incluso si el input no esta dentro del formulario
// cuando tu colocas un input dentro de un formulario, al presionar el boton "enviar" la pagina se recarga porque se esta enviando los datos del formulario. Si esta afuera del formulario, no se recarga la pagina

//al colocar el atributo form en un input, le estas diciendo que ese input pertenece a ese formulario, aunque no este dentro del formulario. Esto es muy util para colocar los botones de envio fuera del formulario, o para colocar los inputs fuera del formulario y evitar que la pagina se recargue al enviar el formulario.


// minlength: es la minima cantidad de caracteres que tiene que tener un input para ser valido

const input1 = document.querySelector(".nombre");

input1.minLength = 4; // 


// placeholder

input1.placeholder = "Escribe tu nombre"; // establece el valor del atributo "placeholder" del elemento con la clase "nombre" a "Escribe tu nombre"

// required


input1.required = true; // establece el valor del atributo "required" del elemento con la clase "nombre" a true, lo que hace que el input sea obligatorio para enviar el formulario


// Atributo style - Contiene declaraciones de estilo CSS para ser aplicadas al elemento.
// usos y ejemplos

titulo.style.color = "red"; // establece el color del texto del elemento con la clase "titulo" a rojo
titulo.style.fontSize = "44px";
titulo.style.padding = "20px"; // funciona porque padding es una propiedad de estil




