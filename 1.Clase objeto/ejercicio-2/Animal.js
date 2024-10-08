//Defino la clase
class Animal{
    //Metodo constructor
    constructor(nombre,especie,edad,peso,color){
        this.nombre = nombre //Propiedades para la instancia
        this.especie = especie
        this.edad = edad
        this.peso = peso
        this.color = color
    }

    //Metodos para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3 class= 'text-danger'>Infomacion del animal</h3><br> ")
        document.write("Nombre: "+this.nombre+"<br>")
        document.write("Especie: "+this.especie+"<br>")
        document.write("Edad: "+this.edad+"<br>")
        document.write("Peso: "+this.peso+"<br>")
        document.write("Color: "+this.color+"<br>")
        document.write("<hr>")
    }

    // Método para encender el celular
    comer() {
        // Atributo privado solo para el método encender
        let comida = parseInt(prompt("Diigite cuantas horas lleva el animal sin comer: "));
        // Evaluanos si tiene carga el celular
        if (comida >= 4) {
            document.write("El animal: " + this.nombre + " tiene que comer <br>");
            document.write(`||||||||||| hace ${comida} horas se alimento`);
            document.write(`||||||||||| cada 4 horas se le debe dar la comida al animal`);
            document.write("<hr>");
        } else {
            document.write("El animal: " + this.nombre + " no puede comer <br>");
            document.write(`||||||||||| hace ${comida} horas se alimento`);
            document.write(`||||||||||| despues de 4 horas podra comer`);
            document.write("<hr>");
        }
    }
}


//Creacion de objetos de instanciar la clase celular
let animal1 = new Animal("max","perro", "5 años", "25kg","marron con blanco")
let animal2 = new Animal("luna","gata", "3 años", "4kg","gris")
let animal3 = new Animal("kiwi","canario", "2 años", "30g","amarillo")

//Mostrar los detalles de cada objeto
animal1.mostrarDetalles()
animal2.mostrarDetalles()
animal3.mostrarDetalles()
animal1.comer()
animal2.comer()
animal3.comer()
