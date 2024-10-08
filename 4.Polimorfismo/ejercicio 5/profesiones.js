const output = document.getElementById("output");

// Clase Ingeniero
class Ingeniero {
    constructor(profesion, nombre, sexo, horasSinTrabajar) {
        this.profesion = profesion;
        this.nombre = nombre;
        this.sexo = sexo;
        this.horasSinTrabajar = horasSinTrabajar;
    }

    descripcion() {
        output.innerHTML += `Profesión: <strong>${this.profesion}</strong><br>`;
        output.innerHTML += `Nombre del ingeniero: ${this.nombre}<br>`;
        output.innerHTML += `Sexo del ingeniero: ${this.sexo}<br>`;
        output.innerHTML += `Horas sin trabajar: ${this.horasSinTrabajar} horas<br>`;
        if (this.horasSinTrabajar > 8) {
            output.innerHTML += "¡Debe ir a trabajar! Han pasado más de 8 horas.<br>";
        } else {
            output.innerHTML += "No es necesario ir a trabajar aún.<br>";
        }
        output.innerHTML += "--------------------------------------------------<br><br>";
    }
}

// Clase Docente
class Docente {
    constructor(profesion, nombre, documento, horasSinTrabajar) {
        this.profesion = profesion;
        this.nombre = nombre;
        this.documento = documento;
        this.horasSinTrabajar = horasSinTrabajar;
    }

    descripcion() {
        output.innerHTML += `Profesión: <strong>${this.profesion}</strong><br>`;
        output.innerHTML += `Nombre del docente: ${this.nombre}<br>`;
        output.innerHTML += `Documento de identidad del docente: ${this.documento}<br>`;
        output.innerHTML += `Horas sin trabajar: ${this.horasSinTrabajar} horas<br>`;
        if (this.horasSinTrabajar > 8) {
            output.innerHTML += "¡Debe ir a trabajar! Han pasado más de 8 horas.<br>";
        } else {
            output.innerHTML += "No es necesario ir a trabajar aún.<br>";
        }
        output.innerHTML += "--------------------------------------------------<br><br>";
    }
}

// Clase Médico
class Medico {
    constructor(profesion, nombre, edad, horasSinTrabajar) {
        this.profesion = profesion;
        this.nombre = nombre;
        this.edad = edad;
        this.horasSinTrabajar = horasSinTrabajar;
    }

    descripcion() {
        output.innerHTML += `Profesión: <strong>${this.profesion}</strong><br>`;
        output.innerHTML += `Nombre del médico: ${this.nombre}<br>`;
        output.innerHTML += `Edad del médico: ${this.edad} años<br>`;
        output.innerHTML += `Horas sin trabajar: ${this.horasSinTrabajar} horas<br>`;
        if (this.horasSinTrabajar > 8) {
            output.innerHTML += "¡Debe ir a trabajar! Han pasado más de 8 horas.<br>";
        } else {
            output.innerHTML += "No es necesario ir a trabajar aún.<br>";
        }
        output.innerHTML += "--------------------------------------------------<br><br>";
    }
}

// Función que muestra la descripción de cualquier profesional
function mostrarDescripcion(profesional) {
    profesional.descripcion();
}

// Instancias de cada clase con valores de ejemplo
const medico = new Medico("Médico", "Carlos", 38, 6);
const ingeniero = new Ingeniero("Ingeniero", "Julian", "Masculino", 9);
const docente = new Docente("Docente", "Marcos", 11028945829, 10);

// Llamado al método descripcion para cada objeto
mostrarDescripcion(medico);
mostrarDescripcion(ingeniero);
mostrarDescripcion(docente);
