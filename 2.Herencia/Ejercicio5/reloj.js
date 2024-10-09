// Super clase
class Reloj {
    // Constructor
    constructor(marca, tipo, material) {
        this.marca = marca;
        this.tipo = tipo;
        this.material = material;
        this.precio = parseFloat(prompt("Precio del reloj:")); // Entrada para el precio
    }

    // Método público
    registrar() {
        document.write("<hr>");
        document.write('<div class="alert alert-primary" role="alert">RELOJ REGISTRADO</div>');
        document.write("<hr>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Tipo: ", this.tipo, "<br>");
        document.write("Material: ", this.material, "<br>");
        document.write("Precio del reloj: ", this.precio, "<br>");
    }
}

// Subclase RelojInteligente
class RelojInteligente extends Reloj {
    // Constructor de la subclase
    constructor(marca, tipo, material, tipoPantalla) {
        super(marca, tipo, material); // Llamada al constructor de la superclase
        this.tipoPantalla = tipoPantalla; // Tipo de pantalla
        this.sistemaOperativo = prompt("Sistema operativo del reloj:"); // Entrada para el sistema operativo
        this.bateria = parseInt(prompt("Batería del reloj (en %):")); // Entrada para la batería
    }

    // Método para encender el reloj
    encender() {
        document.write("Tipo de pantalla: ", this.tipoPantalla, "<br>");

        // Evaluar si la batería es suficiente para encender
        if (this.bateria > 0) {
            document.write('<div class="alert alert-success" role="alert">El Reloj inteligente ' + this.marca + ', con tipo ' + this.tipo + ' y material ' + this.material + ' enciende !!</div>');
        } else {
            document.write('<div class="alert alert-danger" role="alert">El Reloj inteligente ' + this.marca + ', con tipo ' + this.tipo + ' y material ' + this.material + ' no enciende !!</div>');
        }
    }
}

// Instanciando la subclase RelojInteligente
let objetoRelojInteligente = new RelojInteligente("Samsung", "Galaxi", "plástico", "LCD"); // Crear el objeto reloj inteligente
objetoRelojInteligente.registrar(); // Registrar el reloj inteligente
objetoRelojInteligente.encender(); // Intentar encender el reloj inteligente