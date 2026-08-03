console.log ("Hola companera");
console.log ("Hola buenassssssss");
console.log ("Hola tarde");
console.log ("Hola profe");


let nombre: string ="Hola mi amor"; //explicito
let nombreDos = "Holaaa"; //implicito

function saludar (nombre: string ):void{
    console.log (`Hola ${nombre}`);
}

function sumar (a: number, b: number): number{
return a+b;
}

function restar (a: number, b: number, c?: number): number{
return a-b - (c || 0);
}

console.log (restar(5,9,2));

import {Estudiante} from "./Estudiante";
import { Pato } from "./Pato";

let estudiante = new Estudiante(12345678,"Jania","Chinchilla",12);
let pato = new Pato ("blanco", "Domestico", "QUAK QUAK", "Lucas");

pato.comer ("insectos");
estudiante.matricular();






//mano izquierda los que son exigidos y por ultimo los opcionales