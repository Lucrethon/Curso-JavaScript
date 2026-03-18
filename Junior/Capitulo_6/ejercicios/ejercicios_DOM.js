//Ejercicio 1: Cofla se queda encerrado en su casa porque rompio su llave. Necesita salir, asi que llama a un cerrajero para que lo ayude. El cerrjero trae 20 modelos de llaves. Se debe: 

//1. Indicarle a Cofla las 20 llaves posibles con su imagen respectiva para que pueda seleccionar cual llave usar 
//2. Una vez seleccionada la llave, enviar los datos al servidor y que otro programador se encargue de abrirle la puerta

class Llave {
    constructor(numeroItem, modelo, precio)
    {
        this.numeroItem = numeroItem;
        this.modelo = modelo;
        this.precio = precio;
    
    }

    createKey() {

        const img = document.createElement("img");
        img.src = "key.png";
        img.classList.add("key-image")

        const numero = document.createElement("h2");
        numero.innerHTML = this.numeroItem;

        const modelo = document.createElement("h3");
        modelo.innerHTML = this.modelo;

        const precio = document.createElement("P");
        precio.innerHTML = `$${this.precio}`;

        let key = {
            "imagen" : img, 
            "numero" : numero, 
            "modelo" : modelo, 
            "precio" : precio
        }

        return key

    }

}

const contenedor = document.querySelector(".key-container");
let fragmento = document.createDocumentFragment();

for (var i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
	let precioRandom = Math.round(Math.random()*10+30);

    let key = new Llave(`Llave ${i}`, modeloRandom, precioRandom);
    let keyInformation = key.createKey();

    let div = document.createElement("DIV");

    Object.values(keyInformation).forEach(element => {
        div.appendChild(element);
    });

    //Object.values(keyInformation) => Object es para trabajar con disccionarios. .values son los valores de las llaves. Esto devuelve un array con los valores en el cual se puede iterar
    //entonces, por cada valor en el array, este se inserta en el div

    div.classList.add(`item-${i}`, "key-item");
    div.tabIndex = i;
    
    //evento
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value = modeloRandom
    });

    fragmento.appendChild(div);

}

contenedor.appendChild(fragmento);