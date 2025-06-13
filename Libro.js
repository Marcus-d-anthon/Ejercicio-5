/*5.	Crear una clase Libro con propiedades y un método
Ejercicio: Crea una clase Libro con las propiedades titulo, autor y un método describir() que devuelva una cadena como "El libro Cien Años de Soledad fue escrito por Gabriel García Márquez.".
*/

class Libro {
    constructor(titulo, autor){
        this.titulo = titulo,
        this.autor = autor;
    }

    describir(){
        return `El libro ${this.titulo} fue escrito por ${this.autor}`
    }
}

const Descripcion = new Libro("Cien Años de Soledad", "Gabriel García Márquez");
console.log(Descripcion.describir())