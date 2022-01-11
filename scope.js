//Tenemos 2 tipos de Scope, Scope Global y Scope Local.

//====================================================

//Ejemplo de lo que es un Scope Global

var miNombre ="Abraham";

function nombre(){
    miNombre = "Job";
    return miNombre;
}

nombre();

console.log(miNombre);

// Ejemplo de lo Scope Local, el Scope Local pasa al momento de crear una funcion, esto genera un ambito diferente, al cual no se podra tener acceso desde el ambito Global

var miNombre = "Abraham"

function nombre(){
    var miApellido = "Sanchez";
    return miNombre + " " + miApellido
}

nombre();

console.log(miNombre);
console.log(miApellido);

//Ejemplos de como puede ayudar o crear error el tema del Scope.

//Ejemplo 1, como con una funcion podemos cambiar el valor de la variable global

var miNombre = "Abraham"

function nombre(usuario) {
    miNombre = usuario;
    console.log(miNombre);
}

nombre("Job");

console.log('hola ${miNombre}, como estas?');


//Ejemplo 2, como podemos eviar reescribir el valor de una variable gracias al Scope.
var miNombre = "Abraham";

function nombre(usuario){
    var miNombre = usuario;
    console.log(miNombre);
}

nombre("Job");

console.log('Hola ${miNombre}, como estas?');


// Ejemplo 3, como si creamos un scoper local, y mandamo a llamar la variable fuera de la funcion, nos puede crear un problema.

function nombre(usuario){
    var miNombre = usuario;
    console.log(miNombre);
}

nombre("Job");

console.log ('Hola ${miNombre}, como estas?');