var articulos = [
    { nombre: 'Bici', costo: 3000},
    { nombre: 'TV', costo: 2500},
    { nombre: 'Libro', costo: 320},
    { nombre: 'Celular', costo: 10000},
    { nombre: 'Laptop', costo: 20000},
    { nombre: 'Teclado', costo: 500},
    { nombre: 'Audifonos', costo: 1700}
]


// Métodos para recorrer arrays


// Método Filter
/* Válida sí es un true o false para poder meterlos al nuevo array, y éste método no modifica el array original */

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500 // Menor o igual a 500
});

console.log(articulosFiltrados);

// Método Map

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

console.log(nombreArticulos);

// Método Find
/* De igual forma, con este método se valida un true o false para encontrar un elemento y si está lo regresa y si no, no pasa nada*/

var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === 'Laptop';
});

console.log(encuentraArticulos);

// Método forEach

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// Método Some
/* Este método nos regresa un false o un true para validar si hay o no artículos que cumple la validación */

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos);

// Método Every

/* Este método checa que todos los elementos en el array cumplan con la validadción que ponemos, y al final nos regresa un true o un false*/

var articulosBaratos = articulos.every(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos);

// Método Reduce
/* Este método corre una función en cada elemento del array, para comenzar a sumar los costos de cada elemento */

var costoTotal = articulos.reduce(function(totalActual, articulo){
    return articulo.costo + totalActual;
}, 0); // El 0  será la cantidad inicial con la que comenzará el totalActual

console.log(costoTotal);

// Método Includes
/* En este método podemos validar si el array tiene un número en específico*/

var numeros = [1, 2, 3, 4, 5, 6];

var incluyeNumero = numeros.includes(2);

console.log(incluyeNumero);