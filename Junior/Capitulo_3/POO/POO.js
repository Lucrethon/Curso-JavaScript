class perro {
    constructor(nombre, raza, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.informacion = `Soy un perro y mi nombre es ${this.nombre}, soy de raza ${this.raza} y tengo ${this.edad} años.`
    }
    
    verInformacion = ()=> {
        document.writeln(this.informacion)
    }

}

//para instanciar una clases, se utiliza la palabra reservada "new" seguida del nombre de la clase y los argumentos necesarios para el constructor
//para instanciar una clase se tiene que usar el scope const 
const miPerro = new perro("Firulais", "Labrador", 5)


document.writeln(miPerro + "<br>")
document.writeln(miPerro.nombre + "<br>")
document.writeln(miPerro.informacion + "<br>")
miPerro.verInformacion()

//----- ABSTRACION, MODULARIDAD, ENCAPSULAMIENTO, POLIMORFISMO ------
//Abstracción: hacer que un objeto se resuma en sus características principales 
//Modularidad: dividir un programa en partes más pequeñas y manejables
//Encapsulamiento: ocultar los detalles internos de un objeto y solo mostrar lo necesario
//Polimorfismo: la capacidad de un objeto de tomar muchas formas, es decir, que una función pueda ser utilizada para diferentes tipos de objetos

// ------ HERENCIA ------

class Animal {
    constructor(especie, edad) {
        this.especie = especie;
        this.edad = edad;
    }

}

class Perro extends Animal {
    constructor(especie, edad, raza, nombre) {
        super(especie, edad);
        this.raza = raza;
        this.nombre = null;
    }

    ladrar() {
        document.writeln(`<br> El ${this.especie} ladra. Woof! <br>`);
    }

    //metodo estatico: es un metodo que se puede llamar sin necesidad de instanciar la clase, 
    // se utiliza la palabra reservada "static" antes del nombre del metodo
    //Para que un metodo sea estatico, no debe utilizar las propiedades de la clase, ya que no se puede acceder a ellas sin instanciar la clase

    static comer() {
        document.writeln(`<br> Comiendo. <br>`);
    }

    //metodos setters: se utilizan para modificar un valor

    
    modificarNombre() {
        this.nombre = "Cambur";
    }
    //esto de esta forma no se utiliza. Se tiene que utilizar la palabra reservada set

    set setNombre(nombre) {
        this.nombre = nombre;
    }

    //metodos getters: se utilizan para obtener un valor 

    get getNombre() {
        return this.nombre;
    }


}

const miPerro2 = new Perro("perro", 3, "pastor aleman", "Firulais");
miPerro2.ladrar();

//llamar a un metodo estatico sin instanciar la clase, se utiliza el nombre de la clase seguido del nombre del metodo estatico
Perro.comer()

const miPerro3 = new Perro("perro", 2, "labrador");

//modificar el nombre del perro utilizando el metodo setter
//los setters se utilizan como si fueran propiedades, es decir, sin los parentesis, ya que modifican una propiedad de la clase, no devuelven un valor como los metodos normales
miPerro3.setNombre = "Cambur";
document.writeln(miPerro3.nombre)

//obtener el nombre del perro utilizando el metodo getter
//los getters se utilizan como si fueran propiedades, es decir, sin los parentesis, ya que devuelven un valor de la clase, no modifican una propiedad como los setters
document.writeln(miPerro3.getNombre)
