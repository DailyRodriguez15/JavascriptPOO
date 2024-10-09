// Super clase
class Electrodomestico {
    // Constructor
    constructor(marca, color, capacidad) {
        this.marca = marca;
        this.color = color;
        this.capacidad = capacidad;
        this.consumo_electrico = parseInt(prompt("Consumo eléctrico:")); // Se usa prompt para pedir input
    }

    // Método público
    registrar() {
        document.write("<hr>");
        document.write('<div class="alert alert-primary" role="alert">ELECTRODOMÉSTICO REGISTRADO</div>');
        document.write("<hr>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Color: ", this.color, "<br>");
        document.write("Capacidad: ", this.capacidad, "<br>");
        document.write("Consumo eléctrico: ", this.consumo_electrico, " kWh<br>");
    }
}

// Subclase Refrigerador
class Refrigerador extends Electrodomestico {
    // Constructor
    constructor(marca, color, capacidad, tipo) {
        super(marca, color, capacidad); // Hereda de Electrodomestico
        this.tipo = tipo;
        this.temperatura = parseInt(prompt("Temperatura inicial en grados centígrados:")); // prompt para pedir input
    }

    // Método para ajustar la temperatura
    ajustar_temperatura() {
        document.write("Tipo: ", this.tipo, "<br>"); // Imprime el tipo

        if (this.temperatura > 7) {
            document.write("<hr>");
            document.write(`<div class="alert alert-success" role="alert">El refrigerador ${this.marca}, con color ${this.color} y capacidad ${this.capacidad} litros tiene una temperatura normal.</div>`);
        } else {
            document.write("<hr>");
            document.write(`<div class="alert alert-danger" role="alert">El refrigerador ${this.marca}, con color ${this.color} y capacidad ${this.capacidad} litros tiene una temperatura anormal.</div>`);
        }
    }
}

// Instanciando la subclase Refrigerador
let objeto_refrigerador = new Refrigerador("Samsung", "Gris", "230 litros", "ElP"); // Objeto refrigerador
objeto_refrigerador.registrar(); // Registrando el refrigerador
objeto_refrigerador.ajustar_temperatura(); // Ajustando la temperatura del refrigerador