export class Estudiante {
    cedula: number;
    nombre: string;
    primer_apellido: string;
    edad: number;

    constructor(
        cedula: number, 
        nombre: string, 
        primer_apellido: string, 
        edad: number,
    ) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.primer_apellido = primer_apellido;
        this.edad = edad;
    }

    matricular(): void {
        console.log(`Cedula: ${this.cedula}, Nombre: ${this.nombre}, Primer apellido: ${this.primer_apellido}, Edad: ${this.edad}`);
}
    }