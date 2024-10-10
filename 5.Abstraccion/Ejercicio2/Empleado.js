// Clase base Empleado
class Empleado {
    constructor(nombre) {
        this.nombre = nombre;
    }

    calcularSalario() {
      
    }
}

// Clase EmpleadoTiempoCompleto que hereda de Empleado
class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, salarioMensual) {
        super(nombre);
        this.salarioMensual = salarioMensual;
    }

    calcularSalario() {
        return this.salarioMensual;
    }
}

// Clase EmpleadoPorHoras que hereda de Empleado
class EmpleadoPorHoras extends Empleado {
    constructor(nombre, horasTrabajadas, tarifaPorHora) {
        super(nombre);
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }

    calcularSalario() {
        return this.horasTrabajadas * this.tarifaPorHora;
    }
}

// Uso de las clases y mostrar resultados
const empleadoTiempoCompleto = new EmpleadoTiempoCompleto("Ana", 3000);
const empleadoPorHoras = new EmpleadoPorHoras("Carlos", 120, 15);

const resultadoEmpleados = `
    <div class="alert alert-success">
        <h4>Salarios de los Empleados</h4>
        <p>Salario de ${empleadoTiempoCompleto.nombre}: ${empleadoTiempoCompleto.calcularSalario()}</p>
        <p>Salario de ${empleadoPorHoras.nombre}: ${empleadoPorHoras.calcularSalario()}</p>
    </div>
`;

// Mostrar en el HTML
document.getElementById("resultado").innerHTML = resultadoEmpleados;
