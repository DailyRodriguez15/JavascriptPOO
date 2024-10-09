// Super clase
class Dispositivo {
    // Constructor
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.capacidad_bateria = parseInt(prompt("Capacidad de la batería en mAh:")); // Se usa prompt para pedir input
    }

    // Método público
    registrar() {
        document.write("<hr>");
        document.write('<div class="alert alert-primary" role="alert">DISPOSITIVO REGISTRADO</div>');
        document.write("<hr>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Modelo: ", this.modelo, "<br>");
        document.write("Año: ", this.año, "<br>");
        document.write("Capacidad de la batería: ", this.capacidad_bateria, " mAh<br>");
    }
}

// Subclase Smartphone
class Smartphone extends Dispositivo {
    // Constructor de la subclase
    constructor(marca, modelo, año, sistema) {
        super(marca, modelo, año); // Hereda de Dispositivo
        this.sistema = sistema;
        this.tipo_conectividad = prompt("Tipo de conectividad: "); // Prompt para pedir el tipo de conectividad
        this.energia = parseInt(prompt("Cantidad de la batería: ")); // Prompt para pedir la energía
    }

    // Método para encender el smartphone
    encender() {
        document.write("Sistema: ", this.sistema, "<br>"); // Imprime el sistema operativo

        if (this.energia > 0) {
            document.write("<hr>");
            document.write(`<div class="alert alert-success" role="alert">El smartphone ${this.marca}, modelo ${this.modelo} del año ${this.año} enciende con éxito!</div>`);
        } else {
            document.write("<hr>");
            document.write(`<div class="alert alert-danger" role="alert">El smartphone ${this.marca}, modelo ${this.modelo} del año ${this.año} no enciende!</div>`);
        }
    }
}

// Instanciando la subclase Smartphone
let objeto_smartphone = new Smartphone("Samsung", "Galaxy", "2023", "Android"); // Objeto smartphone
objeto_smartphone.registrar(); // Registrando el smartphone
objeto_smartphone.encender(); // Encendiendo el smartphone