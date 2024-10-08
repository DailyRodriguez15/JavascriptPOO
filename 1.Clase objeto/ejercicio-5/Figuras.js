// Defino la clase
class Figuras {
    // Método constructor
    constructor(nombre, numero, area, perimetro) {
        this.nombre = nombre // Propiedades para la instancia
        this.numero = numero
        this.area = area
        this.perimetro = perimetro
    }

    // Métodos para mostrar detalles del objeto
    mostrarDetalles() {
        document.write("<h3 class='text-danger'>Información de la Figura</h3><br>")
        document.write("Nombre: " + this.nombre + "<br>")
        document.write("Número de lados: " + this.numero + "<br>")
        document.write("Área: " + this.area + "<br>")
        document.write("Perímetro: " + this.perimetro + "<br>")
        document.write("<hr>")
    }

    
    calcularPerimetroCuadrado(){
        if (this.nombre === "cuadrado"){
            let lado = parseInt(prompt("Digite la longitud de un lado del cuadrado: "))
            if(lado > 0){
                this.perimetro = 4 * lado
                document.write("El perímetro del: "+ this.nombre + "es: " + this.perimetro+ " unidades.<br>")
            }else{
                document.write("El valor ingresado no es válido.")
            }
        }else{
            document.write(`El cálculo del perímetro no está implementado para ${this.nombre}.`)

        }
    } 
  
}

// Creación de objetos a partir de la clase Figuras
let figura1 = new Figuras("cuadrado", "4", "25 unidades", "20 unidades")
let figura2 = new Figuras("triángulo", "3", "18.8 unidades", "18 unidades")
let figura3 = new Figuras("círculo", "0", "78.5 unidades", "31.4 unidades")

// Mostrar los detalles de cada objeto
figura1.mostrarDetalles()
figura2.mostrarDetalles()
figura3.mostrarDetalles()
figura1.calcularPerimetroCuadrado()
figura2.calcularPerimetroCuadrado()
figura3.calcularPerimetroCuadrado()