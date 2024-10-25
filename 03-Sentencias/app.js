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

/* var nombre = 'Pablo';
var edad = 15;

edad >= 18 ? console.log(nombre + ' es mayor de edad') : console.log(nombre + ' no es mayor de edad'); */

/*********************
 * Sentencia switch
 *********************/

/* var mes = 10;
switch(mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    default:
        console.log('Mes no considerado');
} */

/**********************
 * Sentencias repetitivas - Bucles
 * Sentencia for
 * Sentencia while
 * Sentencia Do..while
 */

// Sentencia For

/* for(var i = 0; i <= 10 ; i++){
    console.log(i);
} */

/* Sentencia While */

/* var i = 10;
while(i >= 1){
    console.log(i);
    i--
} */

/* Sentencia Do while */

/* var i = 12;
do {
    console.log(i);
    i++
}while(i <= 10) */

/*****************
 * Valores verdaderos y falsos
 */

// Valores falsos: undefined, null, 0, ''.
// Valores verdaderos: NOT valores falsos.

/* var edad;
edad = '10';

if(edad){
    console.log('Variable esta definida');
} else {
    console.log('Variable no definida');
}

// Operadores de igualdad

if(edad === 10){
    console.log('Variable con coersión');
} else {
    console.log('Variable sin coersión');
} */

/********************
 * Tienes dos alumnos, Pablo y Maria.
 * Pablo tiene las siguientes notas en el curso de Javascript: 14, 8 , 16.
 * Maria tiene las siguientes notas en el curso de javascript: 12, 18, 10.
 * 
 * Calcular el promedio de cada alumno, ademas indicar quien tiene el promedio superior, e indicar si el alumno esta aprobado, para ello su
 * promedio debe ser superior a 13.
 */


// Promedio
var promedioPablo = ((14 + 8 + 16) / 3).toFixed(2);
var promedioMaria = ((12 + 18 + 10) / 3).toFixed(2);


console.log(promedioPablo);
console.log(promedioMaria);

// Promedio superior

// return promedioPablo > promedioMaria ? 'Pablo tiene mejores calificaciones' : promedioMaria == promedioPablo ? 'Tienen la misma calificación' : promedioMaria;

if(promedioPablo > promedioMaria){
    console.log('Pablo tiene mejores calificaciones');
} else if (promedioPablo < promedioMaria){
    console.log('Maria tiene mejores calificaciones');
} else {
    console.log('Pablo y Maria tiene promedio iguales');
}

// Mostrar si esta aprobado

// promedioPablo >= 13 ? console.log('Pablo esta aprobado') : console.log('Pablo esta reprobado');
// promedioMaria >= 13 ? console.log('Maria esta aprobado') : console.log('Maria esta reprobado');

for(var i = 1; i <= 2; i++){
    if(i == 1){
        if(promedioPablo >= 13){
            console.log('Pablo esta aprobado');
        } else {
            console.log('Pablo esta desaprobado');
        }
    } else{
        if(promedioMaria >= 13){
            console.log('Maria esta aprobada');
        } else {
            console.log('Maria esta desaprobada');
        }
    }
}


