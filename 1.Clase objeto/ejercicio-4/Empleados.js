//Defino la clase
class Empleados{
    //Metodo constructor
    constructor(nombre,id,puesto,salario,departamento){
        this.nombre = nombre //Propiedades para la instancia
        this.id = id
        this.puesto = puesto
        this.salario = salario
        this.departamento = departamento
    }

    //Metodos para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3 class= 'text-danger'>Informacion Del Empleado</h3><br> ")
        document.write("Nombre: "+this.nombre+"<br>")
        document.write("id: "+this.id+"<br>")
        document.write("Puesto: "+this.puesto+"<br>")
        document.write("Salario: "+this.salario+"<br>")
        document.write("Departamento: "+this.departamento+"<br>")
        document.write("<hr>")
    }

    // Método para encender el celular
    calcular_perimetro() {
        // Atributo privado solo para el método encender
        let registrar = parseInt(prompt("Digite su nombre (analista, enfermera, bombero): "));
        // Evaluanos si tiene carga el celular
        if (registrar == 'carlos, luis') {
            document.write("Emplead@: " + this.puesto + " tiene horario de 7:00AM y finaliza a las 11:00PM <br>");
            document.write("<hr>");
        } else {
            document.write("Emplead@: " + this.puesto + " tiene horario de 6:00Am y finaliza a las 1:00AM <br>");
            document.write("<hr>");
        }
    }
}


//Creacion de objetos de instanciar la clase celular
let empleado1 = new Empleados("carlos","EMp5658", "analisista", "3,000","tecnologia de la informacion")
let empleado2 = new Empleados("luis","EMp12245", "bombero", "2,200","recursos humanos")
let empleado3 = new Empleados("laura","EMp6789", "enfermera", "5,500","centro de la salud y vida")

//Mostrar los detalles de cada objeto
empleado1.mostrarDetalles()
empleado2.mostrarDetalles()
empleado3.mostrarDetalles()
empleado1.registrarse()
empleado2.registrarse()
empleado3.registrarse()