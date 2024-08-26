// 1
let frutas = ['manzana', 'banana', 'pera'];

frutas.push('naranja');
console.log(frutas);

frutas.pop();
console.log(frutas);

//2
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[1][1]);

//3
let frutas1 = ['manzana', 'banana', 'pera', 'frutilla'];

for (let i = 0; i < frutas1.length; i++) {
    console.log(frutas1[i]);
}

//4
function elevarAlCuadrado(numeros) {
    return numeros.map(num => num * num);
}

let numeros = [1, 5, 3, 8];
console.log(elevarAlCuadrado(numeros)); 

//5
function filtrarMayoresDe(array, valor) {
    return array.filter(num => num > valor);
}

let numeros1 = [15, 5, 8, 12, 2, 134];
console.log(filtrarMayoresDe(numeros1, 12));

//6
function sumarElementos(array) {
    return array.reduce((acc, num) => acc + num, 0);
}

let numeros2 = [1, 2, 3, 4];
console.log(sumarElementos(numeros2));

//7
let numeros3 = [4, 18, 15, 7];

let hayMayorQueDiez = numeros3.some(num => num > 10);
console.log(hayMayorQueDiez);

//8
let numeros4 = [1, -2, 3, 4, 5];

let todosPositivos = numeros4.every(num => num > 0);
console.log(todosPositivos);

//9
let personas = [
    { nombre: 'Juan Carlos', edad: 28 },
    { nombre: 'Ana Maria', edad: 34 },
    { nombre: 'Luis Miguel', edad: 31 }
];

let mayorDe30 = personas.find(persona => persona.edad > 30);
console.log(mayorDe30);

//10
let palabras = ['unicornio', 'frutilla', 'gato', 'arbol', 'cama'];

palabras.sort();
console.log(palabras);


