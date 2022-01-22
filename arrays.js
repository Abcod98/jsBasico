// Un array es una estructura de datos, es un objeto tipo lista de alto nivel

// Los arrays son objetos de tipo lista cuyo prototipo tiene metodos para realizar operaciones de recorrido y mutacion

var frutas = []; // Array Literal Syntax

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas);
console.log(frutas.length); // length es una propiedad del array

// Acceder (por indice) a un elemento del Array
console.log(frutas[0]); // Los arrays inician en "0"


// === Metodos para mutar arrays ===


// .push();

var masFrutas = frutas.push("Uvas"); // Este metodo añadira "Uvas" al final del array
console.log(frutas);

// .pop();

var ultimo = frutas.pop("Uvas"); // Eliminara "Uvas" del final
console.log(frutas);

// unshift();

var nuevaLongitud = frutas.unshift("Uvas"); // Añade "Uvas" al inicio
console.log(frutas);

// shift();

var borrarFruta = frutas.shift("Manzana"); // Elimina "Manzana" del inicio
console.log(frutas);

// .indexOf();

var posicion = frutas.indexOf("Platano"); // Te dará la posición de ese item en el array
console.log(frutas);