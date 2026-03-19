
//Ejercicio: Cofla decide abrir una tienda de objetos mágicos. Como no quiere perder tiempo anotando a mano, te pide crear un sistema donde pueda visualizar y gestionar su inventario. Se debe:

// 1. Crea una clase Producto que tenga: nombre, precio, stock y una URL de imagen. Crea un array con al menos 5 objetos de esta clase.

// 2. Utiliza un bucle para recorrer el array y generar dinámicamente "tarjetas" (cards) de producto dentro de un contenedor en el HTML.

// 3. Cada tarjeta debe incluir la imagen (usando src), el nombre y el precio. Si el stock es 0, el texto del precio debe ponerse en rojo 

// 4. Agrega un botón de "Comprar" a cada tarjeta. Al hacer clic, debe aparecer un prompt preguntando cuántas unidades quiere. Si hay stock suficiente, resta el valor al objeto y actualiza el texto del stock en el DOM sin recargar la página.

class Product {
    constructor(name, price, stock, img) {
        this.name = name;
        this.price = price; 
        this.stock = stock;
        this.img = img; 
    }

    information() {

        const image = document.createElement("img");
        image.src = this.img;
        image.alt = this.name
        image.classList.add("product-image")


        const productName = document.createElement("h2");
        productName.innerHTML = this.name;
        productName.classList.add("product-name-h2")


        const productPrice = document.createElement("h3");
        productPrice.innerHTML = `Price: $${this.price}`;

        const stock = document.createElement("P");
        stock.classList.add("product-stock");

        if (this.stock <= 0) {
            stock.style.color = "red";
            stock.style.fontStyle = "italic";
            stock.innerHTML = `Out of Stock`;
        }
        else {
            stock.style.color = "black";
            stock.innerHTML = `Stock: ${this.stock}`;
        }
        
        

        let product = {
            "image" : image, 
            "name" : productName, 
            "price" : productPrice, 
            "stock" : stock
        }

        return product

    }

}


let pictures = {
    "Cauldron" : "https://m.media-amazon.com/images/I/81SgQg5fL3L.jpg",
    "Magic Gem" : "https://4cs.gia.edu/wp-content/uploads/2014/11/Hexafocus-Brilliant-Burmese-peridot.jpg",
    "Magic Wand" : "https://i.pinimg.com/736x/fd/87/23/fd8723eb1185877008568beb1cb77d46.jpg",
    "Old Scroll" : "https://static.wikia.nocookie.net/forgottenrealms/images/d/d3/Scroll-Jim_Nelson.jpg",
    "Old Magic Book" : "https://www.eastonpress.com/dw/image/v2/BDZH_PRD/on/demandware.static/-/Sites-full-catalog/default/dwe389e732/images/hi-res/Alice-Hoffmans-Practical-Magic-A-Signed-Edition-3370-1.jpg"
}

function createProductList() {
    let products = []

    Object.entries(pictures).forEach(element => {
        let precioRandom = Math.round(Math.random()*10+30);
        let stockRandom = Math.round(Math.random()*10);
        const magicProduct = new Product(element[0], precioRandom, stockRandom, element[1]);
        products.push(magicProduct);
    })
    
    return products;
}

let productList = createProductList()


//

const contenedor = document.querySelector(".product-container");
let fragmento = document.createDocumentFragment();


function askUser() {

    let number;
    
    do {
        let quantity = prompt("How many do you want?");
        number = parseInt(quantity); //parseInt analiza la cadena de texto ingresada por el usuario, limpia los caracteres que no son numeros y devuelve un numero. Si al principio hay texto, devuelve NaN

        if (isNaN(number)) { //si number es NaN (not a number), salta una alerta
            alert("Please enter a valid number")
        }
    } while (isNaN(number)); //se ejecuta el codigo mientras en number sea NaN
    
    return number

}


function createProductCard() {

    let i = 0;

    productList.forEach(item => {

        i++
        
        //crear los elementos HTML para un card product
        let div = document.createElement("DIV")
        let form = document.createElement("FORM")
        let input =document.createElement("INPUT")
        input.type = "button"
        input.value = "Comprar"
        input.classList.add("buy-button")
        form.appendChild(input)
        input.tabIndex = i;                   


        let productInfo = item.information()
        Object.values(productInfo).forEach(element => {
            div.appendChild(element);
    });
        div.classList.add("card-product");
        div.appendChild(form)

        fragmento.appendChild(div);

        //agregar click event 
        input.addEventListener("click", () =>{
            quantity = askUser()
            if (quantity <= item.stock) {
                item.stock -= quantity
                div.querySelector(".product-stock").innerHTML = `Stock: ${item.stock}`
            }
            else {
                alert("Not enough stock")
            }
            
        })
    })

}

createProductCard()
contenedor.appendChild(fragmento);
