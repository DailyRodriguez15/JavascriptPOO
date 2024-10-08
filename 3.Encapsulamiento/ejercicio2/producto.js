// Clase Personas con atributos privados
class Productos {
    // método constructor
    constructor(nombre, precio, cantidad, categoria) {
        this._nombre = nombre; // privado (convención en JS usando _)
        this._precio = precio; // privado
        this.cantidad = cantidad; // público
        this.categoria = categoria; // público
    }

    // método getter para nombres
    obtenerNombre() {
        return this._nombre;
    }

    // método getter para apellidos
    obtenerPrecio() {
        return this._precio;
    }

    // método setter para nombres
    establecerNombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    // método setter para apellidos
    establecerPrecio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }

    // método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`\nNombre: ${this._nombre}<br>`);
        document.write(`Precio: ${this._precio}<br>`);
        document.write(`Cantidad: ${this.cantidad}<br>`);
        document.write(`Categoria: ${this.categoria}<br>`);
    }
}

// objeto
const producto = new Productos("Jorge", 96000, 21, "lexith");

// imprimir atributos públicos y privados
producto.mostrarDetalles();

document.write("<hr>");

// modificar atributos encapsulados usando setters y obtenerlos con getters
producto.establecerNombre("Luis"); // setter
document.write(`Nombre: ${producto.obtenerNombre()} <br>`); // getter
producto.establecerPrecio(36900); // setter
document.write(`Precio: ${producto.obtenerPrecio()} <br>`); // getter
document.write(`Cantidad: ${producto.cantidad} <br>`); // público
document.write(`Categoria: ${producto.categoria} <br>`); // público
