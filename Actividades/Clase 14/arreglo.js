const numeros = [1000,20,16,80,70,95];
numeros.sort((a, b) => a - b);
console.log(numeros);

//imperativo todos los pasos 
for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

//un declarativo es cuando usa algo existente
//no le importa lo que esta por debajo solo extrae 
const declarativo = numeros.map((n) => n);

console.log(declarativo);