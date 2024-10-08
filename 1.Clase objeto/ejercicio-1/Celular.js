//Defino la clase
class Celular{
    //Metodo constructor
    constructor(nombre,marca,imei,bateria,camara){
        this.nombre = nombre //Propiedades para la instancia
        this.marca = marca
        this.imei = imei
        this.bateria = bateria
        this.camara = camara
    }

    //Metodos para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3 class= 'text-danger'>Dispositivo Movil</h3><br> ")
        document.write("Nombre: "+this.nombre+"<br>")
        document.write("Marca: "+this.marca+"<br>")
        document.write("Imei: "+this.imei+"<br>")
        document.write("Bateria: "+this.bateria+"<br>")
        document.write("Camara: "+this.camara+"<br>")
        document.write("<hr>")
    }

    // Método para encender el celular
    encender() {
        // Atributo privado solo para el método encender
        let energia = parseInt(prompt("Diigite el valor de la carga: "));
        // Evaluanos si tiene carga el celular
        if (energia > 0) {
            document.write("El celular: " + this.nombre + " se puede encender <br>");
            document.write(`||||||||||| ${energia} % de carga <br>`);
            document.write("<hr>");
        } else {
            document.write("El celular: " + this.nombre + " no se puede encender <br>");
            document.write(`||||||||||| ${energia} % de carga <br>`);
            document.write("<hr>");
        }
    }
}


//Creacion de objetos de instanciar la clase celular
let celular1 = new Celular("Samsung", "Galaxi 521", 366789, "400mAh", "64mp")
let celular2 = new Celular("Phone", "Apple", 32111, "3095mAh", "12mp")
let celular3 = new Celular("Xiomi", "Mi 11", 45678, "4600mAh", "108mp")

//Mostrar los detalles de cada objeto
celular1.mostrarDetalles()
celular2.mostrarDetalles()
celular3.mostrarDetalles()
celular1.encender()
celular2.encender()
celular3.encender()
