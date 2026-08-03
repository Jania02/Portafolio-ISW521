"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hola companera");
console.log("Hola buenassssssss");
console.log("Hola tarde");
console.log("Hola profe");
let nombre = "Hola mi amor"; //explicito
let nombreDos = "Holaaa"; //implicito
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
function sumar(a, b) {
    return a + b;
}
function restar(a, b, c) {
    return a - b - (c || 0);
}
console.log(restar(5, 9, 2));
const Estudiante_1 = require("./Estudiante");
const Pato_1 = require("./Pato");
let estudiante = new Estudiante_1.Estudiante(12345678, "Jania", "Chinchilla", 12);
let pato = new Pato_1.Pato("blanco", "Domestico", "QUAK QUAK", "Lucas");
pato.comer("insectos");
estudiante.matricular();
//mano izquierda los que son exigidos y por ultimo los opcionales
//# sourceMappingURL=index.js.map