const original = {nombre: "equipo A", puntos: 10};
const actualizado = {...original, puntos: 15}; // se imprime esto por que decia algo de la derecha

console.log (original.puntos);
console.log (actualizado.puntos);

const numeros = [1,2,3];
const copia = [...numeros, 4];


//?? solo reacciona a null o indefinido