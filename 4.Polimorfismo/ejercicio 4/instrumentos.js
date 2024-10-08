const output = document.getElementById("output");

// Clase Guitarra
class Guitarra {
    constructor(nombre, color, cuerdas, tocar) {
        this.nombre = nombre;
        this.color = color;
        this.cuerdas = cuerdas;
        this.tocar = tocar;
    }

    descripcion() {
        output.innerHTML += `Nombre del instrumento: <strong>${this.nombre}</strong><br>`;
        output.innerHTML += `Color: ${this.color}<br>`;
        output.innerHTML += `Cuerdas: ${this.cuerdas}<br>`;
        output.innerHTML += `Manejas: ${this.tocar} músicas<br>`;
        if (this.tocar == 7) {
            output.innerHTML += "Usted puede tocar o sabe tocar, mientras debe practicar un poco más.<br>";
        }
        output.innerHTML += "--------------------------------------------------<br><br>";
    }
}

// Clase Piano
class Piano {
    constructor(nombre, color, material, tocar) {
        this.nombre = nombre;
        this.color = color;
        this.material = material;
        this.tocar = tocar;
    }

    descripcion() {
        output.innerHTML += `Nombre del instrumento: <strong>${this.nombre}</strong><br>`;
        output.innerHTML += `Color: ${this.color}<br>`;
        output.innerHTML += `Material del piano: ${this.material}<br>`;
        output.innerHTML += `Manejas: ${this.tocar} músicas<br>`;
        if (this.tocar == 7) {
            output.innerHTML += "Usted puede tocar o sabe tocar, mientras debe practicar un poco más.<br>";
        }
        output.innerHTML += "--------------------------------------------------<br><br>";
    }
}

// Clase Trompeta
class Trompeta {
    constructor(nombre, color, modelo, tocar) {
        this.nombre = nombre;
        this.color = color;
        this.modelo = modelo;
        this.tocar = tocar;
    }

    descripcion() {
        output.innerHTML += `Nombre del instrumento: <strong>${this.nombre}</strong><br>`;
        output.innerHTML += `Color: ${this.color}<br>`;
        output.innerHTML += `Modelo de la trompeta: ${this.modelo}<br>`;
        output.innerHTML += `Manejas: ${this.tocar} músicas<br>`;
        if (this.tocar == 7) {
            output.innerHTML += "Usted puede tocar o sabe tocar, mientras debe practicar un poco más.<br>";
        }
        output.innerHTML += "--------------------------------------------------<br><br>";
    }
}

// Función que muestra la descripción de cualquier tipo de instrumento
function mostrarDescripcion(instrumento) {
    instrumento.descripcion();
}

// Instancias de cada clase con entradas de ejemplo
const guitarra = new Guitarra("Guitarra", "Marrón", "12 cuerdas", 7);
const piano = new Piano("Piano", "Negro", "Roble", 5);
const trompeta = new Trompeta("Trompeta", "Gris", "Piccolo", 7);

// Llamado al método descripcion para cada objeto
mostrarDescripcion(guitarra);
mostrarDescripcion(piano);
mostrarDescripcion(trompeta);
