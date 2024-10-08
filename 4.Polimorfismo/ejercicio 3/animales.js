const output = document.getElementById("output");

// Clase Perro
class Perro {
    constructor(nombre, raza, especie) {
        this.nombre = nombre;
        this.raza = raza;
        this.especie = especie;
    }

    sonido() {
        output.innerHTML += `El perro <strong>${this.nombre}</strong> hace: ¡Guau guau!<br>`;
        output.innerHTML += `Raza: ${this.raza}<br>`;
        output.innerHTML += `Especie: ${this.especie}<br>`;
        output.innerHTML += "--------------------------------------------------<br><br>";
    }
}

// Clase Gato
class Gato {
    constructor(nombre, raza, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }

    sonido() {
        output.innerHTML += `El gato <strong>${this.nombre}</strong> hace: ¡Miau miau!<br>`;
        output.innerHTML += `Raza: ${this.raza}<br>`;
        output.innerHTML += `Edad: ${this.edad}<br>`;
        output.innerHTML += "--------------------------------------------------<br><br>";
    }
}

// Clase Pájaro
class Pajaro {
    constructor(nombre, raza, peso) {
        this.nombre = nombre;
        this.raza = raza;
        this.peso = peso;
    }

    sonido() {
        output.innerHTML += `El pájaro <strong>${this.nombre}</strong> hace: ¡Pio pio!<br>`;
        output.innerHTML += `Raza: ${this.raza}<br>`;
        output.innerHTML += `Peso: ${this.peso} kg<br>`;
        output.innerHTML += "--------------------------------------------------<br><br>";
    }
}

// Función que muestra el sonido de cualquier tipo de animal
function mostrarSonido(animal) {
    animal.sonido();
}

// Instancias de cada clase
const perro = new Perro("Doki", "Labrador", "Canis");
const gato = new Gato("Luna", "Persa", "8 años");
const pajaro = new Pajaro("Kiwi", "Agapornis", 1.111);

// Llamado al método sonido para cada objeto
mostrarSonido(perro);
mostrarSonido(gato);
mostrarSonido(pajaro);
