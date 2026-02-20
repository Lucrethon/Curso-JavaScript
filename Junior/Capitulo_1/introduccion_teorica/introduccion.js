variable = "Juanito";
alert(variable); //utilizar siempre ; al terminar algo para separar 

// Alert es una funcion que muestra un mensaje en pantalla como una notificación
// El mensaje se puede escribir directamente o se puede guardar en una variable y luego mostrar esa variable

// -------- SCOPE -----------

//declarar una variable: definir el alcance que va a tene la misma

//formas de declarar una variable:

//let: permite que la variable sea usada dentro de un bloque o scope especifico (ejm.: una funcion, un if, etc)
//var: su alcance es global
//const: significa que esa variable sera siempre la misma aunque se intente cambiar mas adelante en el programa

let numero; //declaracion de variable

//Inicializar una variable es darle un valor. Si no se inicializa, la misma pasa a ser undifined 

numero = 30; // Inicializacion de una variable

//se puede declarar e inicializar en la misma linea 

const pi = 3.14;
//Aqui la variable no va a cambiar porque es un const

//A diferencia de let y var, const necesariamente se tiene que declarar e inicializar al mismo tiempo. No se puede dejar sin inicializar o hacerlo despues

// -------- CREAR VARIABLES MULTIPLES -----------

//significa declarar muchas variables al mismo tiempo

let numero1, numero2, numero3;

numero1 = 14;
numero2 = 16;
numero3 = 18;

alert(numero1);
alert(numero2);
alert(numero3);

let numero4 = 20, numero5 = 22;

// -------- HOSTING -----------
//fases de creacion y ejecucion
//algunas funciones pueden ser llamadas antes de su creacion 

// -------- NULL -----------

let numero6 = null;

// Null significa que la variable va a tener un valor nulo pero de forma intencional. Esta variable ya esta inicializada, a diferencia de undefined que es una constante que no fue inicializada de forma no intencional y se definira en el futuro

// -------- NaN -----------

//NaN = Not a Number
//Esto es un valor que obtenemos cuando intentamos hacer una operacion con una cadena de texto o con algo que no es un numero

variable1 = "pedro";
let numero7 = 26;

alert(numero7 * variable1);

// -------- PROMPT -----------

//la funcion prompt pide un dato al usuario y este se puede guardar en una variable 

let nombre = prompt("Escribe tu nombre");
alert("hola, " + nombre);

// -------- OPERADORES DE ASIGNACION -----------

// x = y; //significado: x = y
// x += y; //x = x + y
// x -= y; //x = x - y
// x *= y; //x = x * y
// x /= y; //x = x / y
// x %= y; //x = x % y      asignacion de resto: se usa para obtener el residuo de una división entre dos números. Ejemplo: 50 % 6 = 2. Esto porque 6, 12, 28, 24, 30, 36, 42, 48. Entonces, 50 - 48 = 2
// x **= y; //x = x ** y    asignacion de exponenciacion
// x <<= y; //x = x << y    asignacion de desplazamiento a la derecha
// x >>= y; //x = x >> y    asignacion de desplazamiento a la izquierda

let numero8 = 28;

numero8 += 2; 
alert(numero8);

document.write("El resultado de la operacion es: " + numero8);

let numero9 = 50;
numero9 %= 6;
alert(numero9)

document.write("El resultado de la operacion es: " + numero9);



// -------- OPERADORES ARITMETICOS -----------

//toma los valores numericos y los tranforma para retornar un valor

//Adicion: +
//Sustraccion: -
//Decremento: -- (decrece el valor en 1). Se puede utilizar con una sola variable y se tiene que ejecutar antes de utilizarse en una funcion, al igual que el incremento

// osea, no puedo hacer alert(numero10--) porque el decremento se ejecutaria despues de mostrar el numero en pantalla, entonces se mostraria el numero antes de ser decrementado. 

//Incremento: ++ (crece el valor en 1)
// Para mostrarse en pantalla, se tienen que ejecutar antes de utilizarse en una funcion

let numero10 = 10;
numero10++;
alert(numero10)

//resto: &

// -------- CONCATENACION -----------

//Unir dos cadenas de texto o strings

let saludo = "Hola, ";
let pregunta = "¿Cómo estás?";

let mensaje = saludo + pregunta;
alert(mensaje);

// para unir dos numeros, se tiene que forzar a que se conviertan en texto 

let numero11 = 2
let numero12 = 3

let numeros_contatenados = "" + numero11 + numero12;
alert(numeros_contatenados);

//otra forma de concatenar strings es con el metodo concat(). Este solo acepta strings, entonces si queremos concatenar un numero, se tiene que convertir a string

let numero13 = 4;
let numero14 = 5;

let numeros_concatenados2 = String(numero13).concat(String(numero14));
alert(numeros_concatenados2);

// ${}

let nombre1 = "Juan";
let edad = 30;

let mensaje2 = `Hola, mi nombre es ${nombre1} y tengo ${edad} años.`;
alert(mensaje2);

//solo funciona con comillas invertidas (backticks) y no con comillas simples o dobles ()

// -------- OPERADORES COMPARACION -----------

// Comparan dos expresiones y devuelven un valor booleano (true o false)

// Igualdad: == (compara solo el valor, no el tipo de dato)
// Estrictamente igual: === (compara el valor y el tipo de dato)
// Desigualdad: != (compara solo el valor, no el tipo de dato)
// Estrictamente desigual: !== (compara el valor y el tipo de dato)
// Mayor que: >
// Menor que: <
// Mayor o igual que: >=
// Menor o igual que: <=

let numero15 = 10;
let numero16 = "10";

alert(numero15 == numero16); //true
alert(numero15 === numero16); //false

// -------- OPERADORES LOGICOS -----------

// Nos devuelven un resultado a partir de que se cumpla (o no) una condicion. 
// Su resultado es un valor booleano (true o false), y sus operandos son valores logicos o asimilables a ellos

let valor1 = true;
let valor2 = true;

// let resultado = true
let resultado1 = valor1 && valor2; //AND: devuelve true si ambos operandos son true, de lo contrario devuelve false

let resultado2 = valor1 || valor2; //OR: devuelve true si al menos uno de los operandos es true, de lo contrario devuelve false

let resultado3 = !valor1; //NOT: devuelve el valor opuesto del operando. Si el operando es true, devuelve false, y viceversa

alert(resultado1);
alert(resultado2);
alert(resultado3);

let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 85;
let num5 = 93;

let afirmacion1 = num1 < num2;
let afirmacion2 = num2 > num1;
let afirmacion3 = num1 > num2;
let afirmacion4 = num1 == num2;

document.write(afirmacion1 && afirmacion2); //true
document.write(afirmacion1 || afirmacion3); //true. con que una de las dos sea true, el resultado es true
document.write(afirmacion3 || afirmacion4); //false. ninguna de las dos es true, entonces el resultado es false
document.write(!afirmacion4); //true. el resultado de afirmacion4 es false, entonces el resultado de !afirmacion4 es true


operacion = (num1 < num2 && num2 > num3) && (!(num4 != num5) || num5 != num1);
//(true && false) && (False || True)
//false && true
//false

alert(operacion);

// -------- CAMEL CASE -----------

//Es una forma de escribir variables o funciones sin espacios, donde cada palabra despues de la primera empieza con mayuscula

let nombreCompleto = "Juan Perez";
let fechaDeNacimiento = "01/01/1990";














