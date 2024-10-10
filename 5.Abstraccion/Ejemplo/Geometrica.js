// Clase base FormaGeometrica
class FormaGeometrica {
    calcularArea() {

    }
}

// Clase Cuadrado que hereda de FormaGeometrica
class Cuadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado ** 2;
    }
}

// Clase Circulo que hereda de FormaGeometrica
class Circulo extends FormaGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * (this.radio ** 2);
    }
}

// Uso de las clases y mostrar resultados
const cuadrado = new Cuadrado(5);
const circulo = new Circulo(3);

const resultadoFormas = `
    <div class="alert alert-info">
        <h4>Áreas de las Formas Geométricas</h4>
        <p>Área del cuadrado: ${cuadrado.calcularArea()}</p>
        <p>Área del círculo: ${circulo.calcularArea()}</p>
    </div>
`;

// Mostrar en el HTML
document.getElementById("resultado").innerHTML = resultadoFormas;
