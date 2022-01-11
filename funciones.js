//Declarativas

function miFuncion(){
    return 3;
}

miFuncion();


function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');

//Expresion

var miFuncion = function(a,b){
    return a + b;
}

miFuncion();


var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre('Diego');