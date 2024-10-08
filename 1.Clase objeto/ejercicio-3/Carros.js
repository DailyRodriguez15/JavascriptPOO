//Defino la clase
class Carros{
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
        document.write("<h3 class= 'text-danger'>Informacion Del Carro</h3><br> ")
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
let carro1 = new Carros("toyota","corolla", "2022", "rojo","30,000km")
let carro2 = new Carros("ford","mustang", "2021", "azul","15,000km")
let carro3 = new Carros("tesla","model s", "2023", "negro","10,000km")

//Mostrar los detalles de cada objeto
carro1.mostrarDetalles()
carro2.mostrarDetalles()
carro3.mostrarDetalles()
carro1.encender()
carro2.encender()
carro3.encender()
