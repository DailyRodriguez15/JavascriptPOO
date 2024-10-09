// Super clase
class Instrumento {
    // Constructor
    constructor(tipo, marca, material) {
        this.tipo = tipo;
        this.marca = marca;
        this.material = material;
        this.precio = parseFloat(prompt("Precio del Instrumento:")); // Usando prompt para pedir el precio
    }

    // Método público
    registrar() {
        document.write("<hr>");
        document.write('<div class="alert alert-primary" role="alert">INSTRUMENTO REGISTRADO</div>');
        document.write("<hr>");
        document.write("Tipo: ", this.tipo, "<br>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Material: ", this.material, "<br>");
        document.write("Precio: $", this.precio, "<br>");
    }
}

// Subclase Guitarra
class Guitarra extends Instrumento {
    // Constructor de la subclase
    constructor(tipo, marca, material, numero_de_cuerdas) {
        super(tipo, marca, material); // Llamada al constructor de la superclase
        this.numero_de_cuerdas = numero_de_cuerdas;
        this.acordes_basicos = prompt("¿Qué acordes básicos conoces? (separados por comas): "); // Pedir acordes básicos
    }

    // Método para mostrar información y evaluar los acordes conocidos
    conocimiento() {
        // Imprimir el número de cuerdas
        document.write("Número de cuerdas: ", this.numero_de_cuerdas, "<br>");
        
        // Procesar los acordes básicos
        let acordes = this.acordes_basicos.split(",").map(acorde => acorde.trim());

        // Evaluar el número de acordes conocidos
        if (acordes.length > 5) {
            document.write('<div class="alert alert-success" role="alert">¡Excelente! Conoces una gran cantidad de acordes.</div>');
        } else {
            document.write('<div class="alert alert-warning" role="alert">Sigue practicando para aprender más acordes. Después de conocer 5 mínimo podrás tocar bien la guitarra.</div>');
        }

        // Mostrar los acordes conocidos
        document.write("Acordes conocidos: ", acordes.join(", "), "<br>");
    }
}

// Instanciando la subclase Guitarra
let objeto_guitarra = new Guitarra("acústica", "Fender", "spruce", 6); // Objeto guitarra
objeto_guitarra.registrar(); // Registrando la guitarra
objeto_guitarra.conocimiento(); // Evaluando y mostrando los acordes conocidos