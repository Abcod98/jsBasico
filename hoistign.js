// Hoisting es cuando las declaraciones de variables y funciones se procesan antes de ejecutar cualquier codigo, al momento de que se genere el hoisting, las funciones se declaran primero, y despues las variables

// Que resultado esperas que nos aparezca si corremos este ejemplo? "Undefined"
console.log(miNombre);

var miNombre = "Abraham";

//Lo que sucede con el hoisting
var miNombre = undefined;

console.log(miNombre + "soy hoisting");

miNombre = "Abraham";

// === Hoisting con functions ===
hey();

function hey(){
    console.log('Hola ' + miNombre);
};

var miNombre = "Abraham";

//Lo que sucede con hoisting

function hey(){ //La funcion se declara hasta arriba, y despues se declaran las variables
    console.log('Hola ' + miNombre);
};

var miNombre;

hey();

miNombre = "Abraham";
