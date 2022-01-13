// Esto nos ayudara para poder hacer decisiones.

var esUsuario = true;

if(esUsuario) {// con el if validamos que la condicion sea true
    console.log('Tiene acceso al contenido');
}

// Presentamos el else

var esUsuario = false;

if(esUsuario) {
    console.log('Tiene acceso al contenido');
} else {
    console.log('Tienes que crear una cuenta para poder acceder al contenido');
}

// Ejemplo de como hariamos una validacion

var edad = 18;
var accion;

if(edad >= 18) {
    accion = 'Puede votar'
} else { // call back
    accion = 'No puede votar'
}

console.log(accion);

// Ejemplo de como utilizaremos el else if

var edad = 18;
var accion;

if (edad === 18) {
    accion = 'Puede votar, sera su 1ra. votacion'
} else if(edad > 18) {
    accion = 'Puede votar'
} else { //call back
    accion = 'Aun no puede votar'
}

console.log(accion);



/* =====================================================*/

// Operador ternario

var numero = 1;
var resultado;

if(numero === 1){
    resultado = 'Si soy un 1';
} else {
    resultado = 'No soy un 1';
}

condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? 'Si sony un 1' : 'No soy un 1'

console.log(resultado);