// Funcion para agregar datos a AUTO
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
};

// Array de "Autos" para guardar los difetentes tipos
var autos = [];


// Bucle para agregar los datos de "Autos que necesitemos"
for (var i=0; i < 3; i++){
    var marca = prompt ("Marca: ");
    var modelo = prompt ("Modelo: ");
    var annio = prompt ("Año: ") 

    var autoNuevo = new auto(marca, modelo, annio)

    autos.push(autoNuevo);
}

// Muestra los registros del array "Autos"
console.log(autos);