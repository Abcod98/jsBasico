// Switch es una forma diferente de validar, esta depende del caso que sea verdad.

var numero = 1;
var resultado;

/* Switch compara con un === por esa razon los elementos tienen que ser identicos*/

switch (numero) {
    case 1:
        resultado = "Si es uno";
        break;
    case 10:
        resultado = "Si es diez";
        break;
    case 100:
        resultado = "Si es cien";
        break;
    default:
        resultado = "No match";
}

console.log(resultado);