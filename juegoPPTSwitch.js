var forma1 = "Piedra";
var forma2 = "Papel";
var forma3 = "Tijera";

var persona = forma1; // cambiar la forma para ver los posibles resultados
var computadora = forma1; // cambiar la forma

var resultado;

switch (true){
    case persona === computadora:
        resultado = "Empate";
        break;
    case persona == forma1 && computadora == forma2:
        resultado = "Gana COMPUTADORA";
        break;
    case persona == forma2 && computadora == forma3:
        resultado = "Gana COMPUTADORA";
        break;
    case persona == forma3 && computadora == forma1:
        resultado = "Gana COMPUTADORA";
        break;
    default:
        resultado = "Gana persona";
}

console.log(resultado);