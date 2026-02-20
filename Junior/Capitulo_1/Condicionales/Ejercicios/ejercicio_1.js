//Ejercicio 1: Unos amigos van a comprar un helado. Ellos quieren comprar el helado mas caro que puedan comprar con el dinero que tienen. Entonces se debe: 

//1. Pedirle al usuario que ingrese el dinero que tiene
//2. Mostrarle al usuario el helado mas caro que pueda comprar con ese dinero
//3. Si hay dos o mas, mostrar todos
//4. Indicarle el vueto 

//Precios de los helados: 
//Palito de helado de agua: $0.6 
//Palito de helado de crema: $1
//Bombon helado marca heladix: $1.6
//Bombon helado marca Effe: $1.7
//Bombo helado marca Tio Rico: $1.8
//Pote de helado con confites: $2.9
//Pote de 1/4 Kg: $2.9


let palitoHeladoAgua = 0.6;
let palitoHeladoCrema = 1;
let bombonHeladoHeladix = 1.6;
let bombonHeladoEffe = 1.7;
let bombonHeladoTioRico = 1.8;
let poteHeladoConfites = 2.9;
let poteHeladoCuartoKg = 2.9;


let dineroRoberto = 1.5
let dineroPedro = 1.7 
let dineroCofla = 3


let dineroHelado = prompt("Cuanto dinero tienes?");

if (dineroHelado >= palitoHeladoAgua && dineroHelado < palitoHeladoCrema){
    alert('puedes comprarte un palito de agua. Vuelto: ' + (dinero - palitoHeladoAgua).toFixed(2))
}

else if (dineroHelado >= palitoHeladoCrema && dineroHelado < bombonHeladoHeladix){
    alert('puedes comprarte un palito de crema. Vuelto: ' + (dinero - palitoHeladoCrema).toFixed(2))
}

else if (dineroHelado >= bombonHeladoHeladix && dineroHelado < bombonHeladoEffe){
    alert('puedes comprarte un bombon heladix. Vuelto: ' + (dinero - bombonHeladoHeladix).toFixed(2))
}

else if (dineroHelado >= bombonHeladoEffe && dineroHelado < bombonHeladoTioRico){
    alert('puedes comprarte un heladito effe. Vuelto: ' + (dinero - bombonHeladoEffe).toFixed(2))
}

else if (dineroHelado >= bombonHeladoTioRico && dineroHelado < poteHeladoConfites){
    alert('puedes comprarte un heladito tio rico')
}

else if (dineroHelado >= poteHeladoConfites || dineroHelado >= poteHeladoCuartoKg){
    alert('puedes comprarte un helado con confites o un pote de 1/4 kg. Vuelto: ' + (dineroHelado - poteHeladoCuartoKg).toFixed(2))
}

else {
    alert('no te alcanza pa na')
}

//.toFixed(numero) -> Se utiliza para llevar una cantidad de decimales a la cantidad que se desea
// variable = parseInt(variable) -> se utiliza para convertir un numero en texto a un numero entero 


//Ejercicio 2: Cofla se molesta porque no le alcanza el dinero para comprar el helado, entonces le da el dinero a un sintecho y este a su vez se compra un ticket de loteria. 

//1. Si le llega a alcanzar el dinero para comprar el ticket, lo compra
//2. Si le alcanza para dos, compra dos
//3. Si le alcanza para tres y sobra, regala el vuelto
//4. Se debe mostrar que compro y el vuelto

let precioTicket = 3

let dineroLoteria = prompt("Cuanto dinero le da Cofla al Sintecho:");

if ((dineroLoteria >= precioTicket) && (dineroLoteria < (precioTicket * 2))) {
    alert(`El sintecho se compra un ticket de loteria. Vuelto: ${dineroLoteria - precioTicket}`)
}
else if ((dineroLoteria >= (precioTicket * 2)) && (dineroLoteria < (precioTicket * 3))) {
    alert(`El sintecho se compra dos tickets de loteria. Vuelto: ${dineroLoteria - (precioTicket * 2)}`)
}

else if (dineroLoteria >= (precioTicket * 3)) {
    alert(`El sintecho se compra tres tickets de loteria. Vuelto: ${dineroLoteria - (precioTicket * 3)}. El sintecho regala el vuelto a Cofla.`)
}

else {
    alert('El sintecho es pobre, no le alcanza para comprar ni un ticket de loteria')}



//Ejercicio 3: Se crea un detector de mentiras que devuelve un dato asociado a la culpabilidad del sospechoso: 
//Devuelve 1 en caso de mentira 
//Devuelve 2 en caso de decir la verdad
//Devuelve 3 en caso de indecision 

//Ocurrio un asesinato y Cofla era uno de los sopechosos y se lo llevaron a la comisaria para utilizar en el el detector de mentiras.
//Si miente, se le da una descarga
//Si no miente, no se le hace nada
//Si el aparato no se dedice, aclarar que la pregunta debe ser mas concreta
