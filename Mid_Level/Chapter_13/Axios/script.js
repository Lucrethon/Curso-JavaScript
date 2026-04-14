//---------------- Librería Axios -------------

// Introducción e instalación — https://github.com/axios/axios
//Axios es un reemplazo mas moderno que Fetch

// Basado en promesas 
//esta basado en promesas como fetch, pero utiliza el objeto XMLHttpRequest para hacer sus promesas

//------------ CON FETCH ----------------

fetch("datos.txt")
    .then(res => res.json())
    .then(res => console.log(res))


//------------- CON AXIOS -----------------

//----Get----

axios("datos.txt")
    .then(res => console.log(res.data)) //me ahorro el tener que capturar una promesa porque no viene encapsulado. Para obtener la data, accedemos a la propiedad data 

//----Post----

axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: 'foo',
    body: 'bar',
    userId: 1,
})
    .then(res => console.log(res.data));

//tambien podemos hacer: 

axios("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    data: {
        title: 'foo',
        body: 'bar',
        userId: 1,
    } //a diferencia de XMLHttpRequest y Fect, aqui no hace falta serializarlo (JSON.strignify)
})
    .then(res => console.log(res.data));

//----------- Axios con Await y Async ----------------

//-Implementacion 

//------ Sin Async - Await -------------

const getName = ()=> {
    fetch("datos.txt")
        .then(res =>{
            if (res.ok) Promise.resolve(res) //ok es una validacion. Si ok es falso, significa que no se ejecuto correctamente 
            else Promise.reject(res);
        })
        .then(res => console.log(res))
        .catch(err=>console.log(err))

};

getName()  //esto va a tirar undefined porque estamos llamando a la funcion antes de que el codido pueda ejecutarse 

//------ Con Async - Await -------------

const resultado = document.querySelector(".resultado")

const getName2 = async ()=> {
    let request = await fetch("datos.txt"); //el await es como si pusieramos .then(res => console.log(res)), la peticion encapsulada
    let resultado = await request.json() //el resultado lo almacenamos aqui sin usar otro then. Desencapsulamos la respuesta con los diferentes metodos de fetch (por ejemplo, .json(), .text(), .bomb())
    

    let div = document.createElement("DIV");
    div.classList.add("nombre");


    let HTMLcode = `Nombre: ${resultado.nombre}`;
    div.innerHTML = HTMLcode

    document.body.appendChild(div)
};


//con axios 

const getAge = async ()=> {

    let resultado = await axios("datos.txt"); //el resultado lo almacenamos aqui sin usar otro then
    

    let div = document.createElement("DIV");
    div.classList.add("edad");


    let HTMLcode = `Edad: ${resultado.data.edad}`;
    div.innerHTML = HTMLcode

    document.body.appendChild(div)
};




document.getElementById("button-name").addEventListener("click", getName2);
document.getElementById("button-age").addEventListener("click", getAge);


//Importancia del Try-Catch  
