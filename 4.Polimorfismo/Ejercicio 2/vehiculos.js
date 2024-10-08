const output = document.getElementById("output");

// Clase base Vehiculo
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // Metodo que genera una cadena con la informacion basica del vehiculo
    generarInfoBase() {
        return `Marca: ${this.marca}<br>Modelo: ${this.modelo}<br>`;
    }
}

// Clase Carro
class Carro extends Vehiculo {
    constructor(marca, modelo, color) {
        super(marca, modelo);
        this.color = color;
    }

    mostrarInfo() {
        output.innerHTML += `<strong>Carro:</strong><br>` + super.generarInfoBase() + `Color: ${this.color}<br><br>`;
    }
}

// Clase Moto
class Moto extends Vehiculo {
    constructor(marca, modelo, cilindraje) {
        super(marca, modelo);
        this.cilindraje = cilindraje;
    }

    mostrarInfo() {
        output.innerHTML += `<strong>Moto:</strong><br>` + super.generarInfoBase() + `Cilindraje: ${this.cilindraje} cc<br><br>`;
    }
}

// Clase Bicicleta
class Bicicleta extends Vehiculo {
    constructor(marca, modelo, velocidad) {
        super(marca, modelo);
        this.velocidad = velocidad;
    }

    mostrarInfo() {
        output.innerHTML += `<strong>Bicicleta:</strong><br>` + super.generarInfoBase() + `Velocidad: ${this.velocidad} km/h<br><br>`;
    }
}

// Funcion que muestra la informacion de cualquier tipo de vehiculo
function mostrarInformacion(vehiculo) {
    vehiculo.mostrarInfo();
}

// Instancias de cada clase
const objetoCarro = new Carro("Toyota", "Corolla", "Rojo");
const objetoMoto = new Moto("Yamaha", "YZF-R3", 321);
const objetoBicicleta = new Bicicleta("Trek", "Domane", 45);

// Llamado al metodo mostrarInfo para cada objeto
mostrarInformacion(objetoCarro);
mostrarInformacion(objetoMoto);
mostrarInformacion(objetoBicicleta);