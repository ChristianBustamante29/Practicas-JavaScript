/*****************
 * Arreglos en javascript
 */

/* var nombres = ['Pablo', 'Carlos', 'Ana', 'Teresa'];
var vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria');

console.log(nombres[2]);
console.log(nombres[1]);
console.log(vegetales[1]);

nombres[1] = 'Jose';

console.log(nombres[1]);
vegetales[2] = 'Nabo';
console.log(vegetales[2]);

console.log(nombres.length); /*

/**************************
 * Operaciones con arreglos
 */

/*var frutas = ['pera', 'manzana', 'uva', 'sandia'];
console.log(frutas); */

/* for(var i = 0; i <= frutas.length - 1; i++){
    console.log(frutas[i]);
} 

frutas.forEach(function (elemento, indice, array){
    console.log(elemento, indice);
}); */

/*
// Agrega un elemento al final del arreglo
frutas.push('naranja');
console.log(frutas);

// Agrega un elemento al principio del arreglo
frutas.unshift('fresa');
console.log(frutas);

// Elimina el ultimo elemento del arreglo
frutas.pop();
console.log(frutas);

// Elimina el primer elemento del arreglo
frutas.shift();
console.log(frutas);

// Muestra la posicion en el indice del elemento
var pos = frutas.indexOf('uva');
console.log(pos);

// Elimina uno o varios elementos del arreglo, el primer parametro es la posicion y el segundo el numero de elementos a eliminar
frutas.splice(1,2);
console.log(frutas);

*/

// Arreglo con elementos de diferentes tipos

/* var persona = ['Pablo', 'Vazquez', 34, '8715209815', 1.75];

console.log(persona); */

/******************
 * Objetos literales
 */

/* var persona = {
    nombre: 'Pablo',
    apellido: 'Vazquez',
    gustos: ['Futbol', 'Peliculas', 'Ingles'],
    trabajo: 'Instructor',
    esCasado: true
};

console.log(persona.nombre);
console.log(persona['trabajo']);

persona.esCasado = false;
console.log(persona.esCasado); */

/*****************************+
 * Objetos con la sintaxis object
 */

/* var persona2 = new Object();
persona2.nombre = 'Ana';
persona2.apellido = 'Pinedo';
persona2['Trabajo'] = 'WebDeveloper';

console.log(persona2); */

// Objetos y metodos

var persona = {
    // Propiedades
    nombre: 'Pablo',
    apellido: 'Vazquez',
    gustos: ['Futbol', 'Peliculas', 'Ingles'],
    trabajo: 'Instructor',
    esCasado: true,
    yearNacimiento: 1985,

    // Metodos
    calcularEdad: function(){
        this.edad = 2019 - this.yearNacimiento;
    }
};

persona.calcularEdad();
console.log(persona);
