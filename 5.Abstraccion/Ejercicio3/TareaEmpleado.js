// Clase base TareaEmpleado
class TareaEmpleado {
    constructor(nombre) {
        this.nombre = nombre;
    }

    realizarTarea() {
      
    }
}

// Clase Ingeniero que hereda de TareaEmpleado
class Ingeniero extends TareaEmpleado {
    constructor(nombre, especialidad) {
        super(nombre); // Invoca al constructor de la clase base TareaEmpleado
        this.especialidad = especialidad;
    }

    realizarTarea() {
        return `${this.nombre} está diseñando un proyecto de ${this.especialidad}.`;
    }
}

// Clase Doctor que hereda de TareaEmpleado
class Doctor extends TareaEmpleado {
    constructor(nombre, especialidad) {
        super(nombre); // Invoca al constructor de la clase base TareaEmpleado
        this.especialidad = especialidad;
    }

    realizarTarea() {
        return `${this.nombre} está tratando a un paciente en el área de ${this.especialidad}.`;
    }
}

// Uso de las clases
const ingeniero = new Ingeniero("Laura", "Ingeniería Civil");
const doctor = new Doctor("Pedro", "Cardiología");

// Obtener el resultado de las tareas
const resultadoIngeniero = ingeniero.realizarTarea();
const resultadoDoctor = doctor.realizarTarea();

// Imprimir en el HTML
document.getElementById("resultado").innerHTML = `
    <div class="alert alert-info">
        <h4>Resultados de las Tareas</h4>
        <p>${resultadoIngeniero}</p>
        <p>${resultadoDoctor}</p>
    </div>
`;
