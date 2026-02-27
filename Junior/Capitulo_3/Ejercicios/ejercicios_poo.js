//ejercicio 1

//Cofla decide ir a una tienda de celulares a comprar un nuevo celular. Quiere ver las propiedades de cada uno de los celulares para decidir cual comprar. Para esto debemos: 

//1. Mostrarle las particularidades de cada celular
//2. Cada celular debe tener color, peso, resolución de pantalla, cámara y memoria RAM
//3. Los celulares deben poder prender, reiniciar, apagar, tomar fotos y grabar videos

class Celular {
    constructor(color, peso, rdp, cámara, ram) {
        this.color = color;
        this.peso = peso;
        this.resoluciónPantalla = rdp;
        this.cámara = cámara;
        this.ram = ram;
        this.isOn = false

    }

    encender(){
        if (this.isOn == false) {
            this.isOn = true
            alert("Celular encendido")
        }

        else {
            alert("El celular ya está encendido")
        }

    }

    apagar(){
        if (this.isOn == true) {
            this.isOn = false
            alert("Celular apagado")
        }

        else {
            alert("El celular ya está apagado")
        }
    }

    reiniciar(){
        if (this.isOn == true) {
            alert("Reiniciando celular")
        }

        else {
            alert("El celular está apagado, no se puede reiniciar")
        }
    }

    tomarFotos() {
        if (this.isOn == true){
            alert(`Chic! Tomando foto con una resolución de ${this.cámara}`)
        }

        else {
            alert("El celular está apagado. No se puede tomar una foto")
        }
    }

    grabar() {
        if (this.isOn == true){
            alert(`Grabando con una resolución de ${this.cámara}`)
        }

        else {
            alert("El celular está apagado. No se puede grabar")
        }
    }
}


const celular1 = new Celular("negro", "150g", "5 pulgadas", "12mpx", "4gb");
const celular2 = new Celular("blanco", "155g", "5.5 pulgadas", "16mpx", "6gb");
const celular3 = new Celular("rojo", "160g", "6 pulgadas", "20mpx", "8gb");

let celulares = [celular1, celular2, celular3]

for (let celular of celulares) {
    document.writeln(`<br> El celular ${celular.color} tiene las siguientes características: <br>`)
    document.writeln(`Peso: ${celular.peso} <br>`)
    document.writeln(`Resolución de pantalla: ${celular.resoluciónPantalla} <br>`)
    document.writeln(`Cámara: ${celular.cámara} <br>`)
    document.writeln(`Memoria RAM: ${celular.ram} <br>`)
}

const mostrarCelulares = function(celulares) {
    
    alert("¡Bienvenido a la tienda de celulares! Tenemos 3 modelos disponibles, elige el que más te guste")

for (let celular of celulares) {
    alert(`El celular ${celular.color} pesa ${celular.peso}, tiene una resolución de pantalla de ${celular.resoluciónPantalla}, tiene una cámara de ${celular.cámara} y una memoria RAM de ${celular.ram}`)
}
}

const respuesta = function() {

    let seleccion


        do {seleccion = prompt(`¿Cuál celular quieres probar? Escribe el número: 1. Celular ${celular1.color} 2. Celular ${celular2.color} 3. Celular ${celular3.color}`)
    
    } while (seleccion != 1 && seleccion != 2 && seleccion != 3)

        if (seleccion == 1) {
            return celular1
        }

        else if (seleccion == 2) {
            return celular2
        }

        else if (seleccion == 3) {
            return celular3
        }

}


const preguntaInicial= function(celular) {

    let respuesta

    do {respuesta = prompt(`¿Quieres encender el celular? Escribe el número: 1.Si 2.No`)

} while (respuesta != 1 && respuesta != 2)

    if (respuesta == 1) {
        celular.encender()
    }
    else {
    }
}

const preguntar = function() {

    let respuesta

    do {respuesta = prompt(`¿Qué quieres hacer con el celular? Escribe el número: 1.Encender 2. Apagar 3.Reiniciar 4.Tomar una foto 5. Grabar`)

} while (respuesta != 1 && respuesta != 2 && respuesta != 3 && respuesta != 4 && respuesta != 5) 

    return respuesta
    
}

const celularFuncional = function(celular) {

    while (celular.isOn == true) {

    let respuesta = preguntar()

    if (respuesta == 1) {
        celular.encender()
    }
    else if (respuesta == 2) {
        celular.apagar()
    }

    else if (respuesta == 3) {
        celular.reiniciar()
    }

    else if (respuesta == 4) {
        celular.tomarFotos()
    }

    else if (respuesta == 5) {
        celular.grabar()
    }
}
}

mostrarCelulares(celulares);
let celularPrueba = respuesta();
preguntaInicial(celularPrueba);
celularFuncional(celularPrueba);



//Ejercicio 2

//Cofla no se convenció con los celulares que vio, así que decidió ir a la sección de celulares de alta gama. Estos celulares tienen las mismas características que los celulares normales, pero además tienen las siguientes funciones adicionales: 
//1. Reconocimiento facial
//2. grabar en camara lenta
//3.camara adicional 

class celularAltaGama extends Celular {
    constructor(color, peso, rdp, cámara, ram, rdce) {
        super(color, peso, rdp, cámara, ram)
        this.resolucionCamaraExtra = rdce
    }

    grabarEnCamaraLenta(){
        alert("Grabando en camara lenta")
    }

    reconocimientoFacial() {
        alert("Vamos a iniciar el reconocimiento facial")
    }

    
}

const celularAltaGama1 = new celularAltaGama("rojo", "130g", "5.2'", "4K", "3GB", "Full HD");
const celularAltaGama2 = new celularAltaGama("negro", "142g", "6'", "4K", "4GB", "HD");
const celularAltaGama3 = new celularAltaGama("blanco", "146g", "5.9'", "4K", "4GB", "Full HD");



//Ejercicio 3

//Cofla quiere descargar juegos para su nuevo celular. Hay 7 opciones de juegos, pero el solo quiere descargar 2. Para esto debemos:
//1. Mostrarle los juegos disponibles
//2. Crear un sistema que lo ayude a decidir que juegos descargar. Este debe mostrarle las características siguientes características: nombre, numero de descargas, puntuación y peso del juego.
//3. Se deben poder instalar, abrir, cerrar y desinstalar

class juegoMovil {
    constructor(nombre, nDescargas, puntuación, peso) {
        this.nombre = nombre; 
        this.numeroDescargas = nDescargas; 
        this.puntuación = puntuación; 
        this.peso = peso;
        this.isInstalled = false;
        this.isOpened = false;
    }

    instalar() {
        if (this.isInstalled == false) {
            alert("Instalando juego")
            this.isInstalled == true
        }

        else {alert("el juego ya está instalado")}
    }

    desinslatar() {
        if (this.isInstalled == true) {
            alert("desinstalando juego")
            this.isInstalled = false
        }

        else {alert("el juego ya está desinstalado")}
    }

    abrirJuego() {

        if (this.isInstalled == true) {

            if (this.isOpened == false) {
            alert("Abriendo juego")
            this.isOpened = true
        }

            else {alert("El juego ya está abierto")}
        }

        else {alert("el juego no está instalado")}



    }

    cerrarJuego() {
        if (this.isInstalled == true) {

            if (this.isOpened == true) {
            alert("Cerrando juego")
            this.isOpened = false
        }

        else {alert("El juego ya está cerrado")
        }
        }

        else {"El juego no está instalado."}
    }

    appInfo() {
        return (`
            Nombre: <b>${this.nombre}<b><br>
            Numero de descargas: <b>${this.numeroDescargas}<b><br>
            Puntuación: <b>${this.puntuación}<b><br>
            Peso: <b>${this.peso}<b><br>
            
            `)
    }

}

const juego1 = new juegoMovil("FIFA Mobile", "100M", "4.5", "150MB");
const juego2 = new juegoMovil("Call of Duty Mobile", "500M", "4.8", "2GB");
const juego3 = new juegoMovil("Clash of Clans", "500M", "4.6", "200MB");
const juego4 = new juegoMovil("Candy Crush Saga", "1B", "4.7", "100MB");
const juego5 = new juegoMovil("Pokemon GO", "1B", "4.2", "120MB");
const juego6 = new juegoMovil("Among Us", "500M", "4.0", "80MB");
const juego7 = new juegoMovil("Minecraft", "10M", "4.5", "500MB");

let apps = [juego1, juego2, juego3, juego4, juego5, juego6, juego7]

for (let app of apps) {
    alert(app.appInfo())
}

