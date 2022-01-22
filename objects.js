// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores

var objeto = {}; // Object Literal Syntax

var miAuto = {
    marca: "Toyota", // Key - value
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function(){
        return 'Auto ${this.modelo} ${this.annio}';
    }
};

miAuto.annio
miAuto.modelo

miAuto.detallesDelAuto();


// Función constructora

function auto(marca, modelo, annio) { // Creas una fucnión con los parametros que va a recibir,
    this.marca = marca; // Utilizamos el "this" para asignar valores a las propiedades del objeto
    this.modelo = modelo;
    this.annio = annio;
};

var newAuto = new auto("Tesla", "Model 3", 2020);