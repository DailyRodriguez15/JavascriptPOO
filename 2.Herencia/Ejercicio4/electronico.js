// Super clase
class Electronico {
    // Constructor
    constructor(marca, modelo, tipo_procesador) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipo_procesador = tipo_procesador;
        this.memoria_ram = parseInt(prompt("Cantidad de memoria RAM en gb:")); // Entrada para la RAM
    }

    // Método público
    registrar() {
        document.write("<hr>");
        document.write('<div class="alert alert-primary" role="alert">ELECTRÓNICO REGISTRADO</div>');
        document.write("<hr>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Modelo: ", this.modelo, "<br>");
        document.write("Tipo de Procesador: ", this.tipo_procesador, "<br>");
        document.write("Cantidad de memoria RAM en gb: ", this.memoria_ram, "<br>");
    }
}

// Subclase Laptop
class Laptop extends Electronico {
    // Constructor de la subclase
    constructor(marca, modelo, tipo_procesador, tipo_discoduro) {
        super(marca, modelo, tipo_procesador); // Llamada al constructor de la superclase
        this.tipo_discoduro = tipo_discoduro;
        this.duracion_bateria = prompt("Duración de la batería en horas: "); // Duración de batería
        this.nivel_bateria = parseInt(prompt("Nivel de batería: ")); // Nivel de batería
    }

    // Método para encender la laptop
    encender() {
        document.write("Tipo de disco duro: ", this.tipo_discoduro, "<br>");
        
        // Evaluar si la batería es suficiente para encender
        if (this.nivel_bateria > 0) {
            document.write('<div class="alert alert-success" role="alert">El laptop ' + this.marca + ', modelo ' + this.modelo + ' con procesador ' + this.tipo_procesador + ' enciende !!</div>');
        } else {
            document.write('<div class="alert alert-danger" role="alert">El laptop ' + this.marca + ', modelo ' + this.modelo + ' con procesador ' + this.tipo_procesador + ' no enciende !!</div>');
        }
    }
}

// Instanciando la subclase Laptop
let objeto_laptop = new Laptop("Samsung", "Galaxi", "Raince", "solido"); // Crear el objeto laptop
objeto_laptop.registrar(); // Registrar el laptop
objeto_laptop.encender(); // Intentar encender el laptop