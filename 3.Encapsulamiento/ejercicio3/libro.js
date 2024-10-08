// Clase Personas con atributos privados
class Libros {
    // método constructor
    constructor(titulo, autor, isbn, editorial) {
        this._titulo = titulo; // privado (convención en JS usando _)
        this._autor = autor; // privado
        this._isbn = isbn; // privado
        this.editorial = editorial; // público
    }

    // método getter para nombres
    obtenerTitulo() {
        return this._titulo;
    }

    // método getter para apellidos
    obtenerAutor() {
        return this._autor;
    }

    // método getter para apellidos
    obtenerIsbn() {
        return this._isbn;
    }

    // método setter para nombres
    establecerTitulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
    }

    // método setter para apellidos
    establecerAutor(nuevoAutor) {
        this._autor = nuevoAutor;
    }

    // método setter para apellidos
    establecerIsbn(nuevoIsbn) {
        this._isbn = nuevoIsbn;
    }

    // método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`Titulo: ${this._titulo}<br>`);
        document.write(`Autor: ${this._autor}<br>`);
        document.write(`Isbn: ${this._isbn}<br>`);
        document.write(`Editorial: ${this.editorial}<br>`);
    }
}

// objeto
const libro = new Libros("La piragua", "Davenci", 218, "San blas");

// imprimir atributos públicos y privados
libro.mostrarDetalles();

document.write("<hr>");

// modificar atributos encapsulados usando setters y obtenerlos con getters
libro.establecerTitulo("El paraiso"); // setter
document.write(`Titulo: ${libro.obtenerTitulo()} <br>`); // getter
libro.establecerAutor("Marisol"); // setter
document.write(`Autor: ${libro.obtenerAutor()} <br>`); // getter
libro.establecerIsbn(369); // setter
document.write(`Isbn: ${libro.obtenerIsbn()} <br>`); // getter
document.write(`Editorial: ${libro.editorial} <br>`); // público

