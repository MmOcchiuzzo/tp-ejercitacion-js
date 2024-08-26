//1
function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 3)); 
console.log(sumar(10, 8));

//2
function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(4, 5));
console.log(multiplicar(20, 3)); 

//3
function saludar(nombre = 'Invitado') {
    return `Hola, ${nombre}`;
}
        
console.log(saludar('Melina'));  

//4
function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad
    };
}

console.log(crearPersona('Umi', 6)); 
console.log(crearPersona('Loki', 2)); 

//5
function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}

const persona = { nombre: 'Stella', edad: 54 };
console.log(persona);

actualizarEdad(persona, 55);
console.log(persona);

//6
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(4)); 
console.log(factorial(6));

//7
function despedir() {
    function adios() {
        return 'Adiós!';
    }
    return adios();
}

console.log(despedir());

//8
function procesarArray(array, func) {
    return array.map(func);
}

function multiplicarPorDos(num) {
    return num * 2;
}

let numeros = [7, 29, 8, 12];
console.log(procesarArray(numeros, multiplicarPorDos));

//9
function crearMultiplicador(x) {
    return function (num) {
        return num * x;
    };
}

let multiplicarPorTres = crearMultiplicador(3);
console.log(multiplicarPorTres(4));

//10
let sumarAnonima = function(a, b) {
    return a + b;
};

console.log(sumarAnonima(7, 18));


