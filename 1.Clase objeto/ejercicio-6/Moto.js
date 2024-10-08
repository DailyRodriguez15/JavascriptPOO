//Defino la clase
class Motos{
    //Metodo constructor
    constructor(marca,modelo,año,color,kilometraje){
        this.marca = marca //Propiedades para la instancia
        this.modelo = modelo
        this.año = año
        this.color = color
        this.kilometraje = kilometraje
    }

    //Metodos para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3 class= 'text-danger'>Informacion De La Moto</h3><br> ")
        document.write("Marca: "+this.marca+"<br>")
        document.write("Modelo: "+this.modelo+"<br>")
        document.write("Año: "+this.año+"<br>")
        document.write("Color: "+this.color+"<br>")
        document.write("Kilometraje: "+this.kilometraje+"<br>")
        document.write("<hr>")
    }

    // Método para encender el celular
    encender() {
        // Atributo privado solo para el método encender
        let gasolina = parseFloat(prompt("Digite la cantidad de su tanque combustible: "));
        // Evaluanos si tiene carga el celular
        if (gasolina >= 1) {
            document.write("El carro: " + this.marca + " si se puede encender <br>");
            document.write(`||||||||||| ${gasolina} % de gasolina <br>`);
            document.write("<hr>");
        } else {
            document.write("El carro: " + this.marca + " no se puede encender <br>");
            document.write(`||||||||||| ${gasolina} % digite gasolina <br>`);
            document.write("<hr>");
        }
    }
}


//Creacion de objetos de instanciar la clase celular
let moto1 = new Motos("yamaha","mt-07", "2021", "negra","12,000km")
let moto2 = new Motos("ducati","muster 821", "2020", "azul","5,000km")
let moto3 = new Motos("honja","pex 125", "2022", "blanco","8,000km")

//Mostrar los detalles de cada objeto
moto1.mostrarDetalles()
moto2.mostrarDetalles()
moto3.mostrarDetalles()
moto1.encender()
moto2.encender()
moto3.encender()
