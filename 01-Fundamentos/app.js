/************************************
* Lección de definición de variables
* ***********************************/

/*var primerNombre = 'Christian';
console.log(primerNombre);

var edad = 34;
var sueldo = 1800.99;

console.log(edad);

var tieneTrabajo = true;
console.log(tieneTrabajo);

var puestoDeTrabajo;

console.log(puestoDeTrabajo);


tieneTrabajo = null;

console.log(tieneTrabajo);

var cajas;

// Conversion de tipos

var primerNombre, edad, sexo, esSoltero;

primerNombre = 'Christian';
edad = 34;
sexo = 'M';
esSoltero= false;

console.log('El nombre es: ' + primerNombre + ', y su edad es: ' + edad + ',  ¿es soltero? ' + esSoltero);

edad = 'Veinte';

console.log(edad);*/

/**************************************
* Operadores - Matemáticos (+, +, *, /)
***************************************/

/* var edadGrover, edadPablo, sumaEdades, yearActual, yearGrover, yearPablo;

edadGrover = 34;
edadPablo = 28;
yearActual = 2019;

var diferenciaDeEdad = edadGrover - edadPablo;
sumaEdades = edadGrover + edadPablo;

yearGrover = yearActual - edadGrover;
yearPablo = yearActual - edadPablo;

console.log(diferenciaDeEdad);
console.log(sumaEdades);
console.log('Año en que nacio Grover: ' + yearGrover);
console.log('Año en que nacio Pablo: ' + yearPablo);
console.log(yearActual * 5);
console.log(yearActual / 2);

// Operadores lógicos

var mayorGrover = edadGrover == edadPablo;
console.log(mayorGrover);

// Operador typeof
console.log(typeof edadGrover);
console.log(typeof edadPablo);
console.log(typeof mayorGrover);
console.log(typeof 'Grover es mayor que pablo'); */

// Operadores Unarios Aritmeticos
// ++ Incremento
// -- Decremento

var edadCarmen = 18;
var edadMaria = 14;

// ++edadCarmen;
console.log(edadCarmen++);
console.log(--edadCarmen);

// Operadores de asignación
// =
var a = 5;
var b = 18;

a += b;
a -= b;
a *= b;
a /= b;
var c;
c = a % b; //Devuelve el residuo de una división.
a %= b;

// Ejericio de codificacion
// Se tienen los siguiente datos.

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

/* Utiliza la siguiente formula para calcular el IMC (Indice de masa corporal) de Luis y de Carlos, IMC es igual al peso dividido entre la 
altura al cuadrado, luego comparar e indicar si el IMC de Carlos es superior al de Luis */

// Solucion:

imcLuis = (pesoLuis / Math.pow(alturaLuis, 2)).toFixed(2);

imcCarlos = (pesoCarlos / (alturaCarlos*alturaCarlos)).toFixed(2);

mayorCarlos = imcCarlos > imcLuis;

console.log(imcLuis);
console.log(imcCarlos);
console.log(mayorCarlos);


