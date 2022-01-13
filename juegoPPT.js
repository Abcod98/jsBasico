var forma1 = "Piedra"; 
var forma2 = "Papel";
var forma3 = "Tijera";

var persona = forma1;
var computadora = forma2;

var resultado;

if (persona === computadora ) {
    resultado = "Empate";
} else if (persona == forma1 && computadora == forma2){
    resultado = "Ganador COMPUTADORA"
} else if (persona == forma2 && computadora == forma3) {
    resultado = "Ganador COMPUTADORA"
} else if (persona == forma3 && computadora == forma1) {
    resultado = "Ganador COMPUTADORA"
} else {
    resultado = "Ganador PERSONA"
}

console.log(resultado);