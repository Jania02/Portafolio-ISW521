export class Perro extends Animal {
    constructor(nombre, raza, especie, edad, tamano) {
        super(especie, edad, tamano);
        this.nombre = nombre;
        this.raza = raza;
    }
}

export function edadMultiplicada(edad) {
    return edad * 2;
}