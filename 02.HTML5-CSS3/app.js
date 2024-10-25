/*********************
 * Sentencia if / else
 *********************/

/* var nombre = 'Pablo';
var estadoCivil = 'Soltero';
var estaCasado = false;

if (estaCasado){
    // Si es verdadera la condición
    console.log(nombre + ' esta casado');
} else {
    // Si es falsa la condición
    console.log(nombre + ' esta soltero');
} */

/********************
 * Sentencia condicionales
 ********************/

/* var nombre = 'Pablo';
var edad = 61;

// Edad < 12 es un niño.
// Edad > 11, es < 18, es un adolescente.
// Edad > 17, es < 60, es un adulto
// edad > 60, es un anciano.

if (edad < 12) {
    console.log(nombre + ' es un niño.');
} else if ((edad > 11) && (edad < 18)){
    console.log(nombre + ' es un adolescente.');
} else if ((edad > 17) && (edad < 60)) {
    console.log(nombre + ' es un adulto.');
} else {
    console.log(nombre + ' es un anciano');
} */

/*********************
 * Operador ternario
 *********************/

var nombre = 'Pablo';
var edad = 15;

edad >= 18 ? console.log(nombre + ' es mayor de edad') : console.log(nombre + ' no es mayor de edad');