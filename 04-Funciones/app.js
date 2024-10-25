/* function bienvenido() {
    return 'Hola Bienvenido a la sección de funciones';
}

var mensaje = bienvenido();

console.log(mensaje);

// Partes de una función
// entradas(argumento), codigo, salida(return)

function cuadradoNumero(num){
    var resultado = num * num;
    return resultado;
}

var numero = 3;

var valor = cuadradoNumero(numero);

cuadradoNumero(numero);
cuadradoNumero(5);

console.log(valor);
console.log(cuadradoNumero(5));

// Funcion que convierte de grados Fahrenheit a celsius
// 32F = 0C, 68F = 20C.
// C= (F - 32) * 5/9

function convertirFAHaCelsius(gradoFah){
    var celsius = (gradoFah - 32) * 5 / 9;
    return celsius;
}

var tempUno = convertirFAHaCelsius(32);
var tempDos =convertirFAHaCelsius(68);

console.log(tempUno);
console.log(tempDos); 

function calcularEdad(yearNacimiento){
    return 2019 - yearNacimiento;
}

var edad = calcularEdad(1990);

console.log(edad); 


/******************
 * Ejercicio de codificacion 3
 * 
 * Calcular cuantos años le falta a una persona para que se jubile
 * Una persona se jubila a los 65 años de edad.
 * Enviar como datos a la funcion su año de nacimiento y su nombre.
 * 
 * Solucion:
 */

/* function jubilacion(yearNacimiento, nombre){
    var edad = 2019 - yearNacimiento;
    var retiro = 65 - edad;
    if(retiro <= 0){
        return nombre + ' ya se puede jubilar';
    } else {
        return 'A ' + nombre + ' le faltan: ' + retiro + ' años para jubilarse';
    }
}

var yearNacimiento = 1940;
var nombre = 'Juan';

console.log(jubilacion(yearNacimiento, nombre)); */

/**********************
 * Funciones como expresiones
 */

// Argumentos undefined

/* var nombre;

var prueba = function(n){
    return 'Hola ' + nombre;
}

nombre = 'Pablo';
console.log(prueba(nombre));

// Argumentos nulos

var a;
a = null;

var valorNulo = function(a){
    return a;
}

console.log(valorNulo(a)); */

// Argunmentos por defecto

/* var sumar = function(a = 5, b = 3, c = 3){
    return a + b + c;
} 

console.log(sumar(10, null, 4)); */

// Plantillas de cadenas (template string)
/* var nombre = 'Pablo';
console.log(`El nombre es : ${nombre}`);

var a = 5;
var b = 10;
// console.log('La suma es: ' + (a + b));

console.log(`La suma es: ${a + b}`); */

/************************
 * Ejercicio 4
 * Implementar una función que nos permita evaluar el
 * porcentaje de respuestas positivas y negativas de un examen
 * La funcion debe recibir el nombre, y la cantidad de
 * respuestas positivas y negativa.
 * 
 * La funcion debe calcular el porcentaje que representa cada tipo de respuesta, en una base de 100 preguntas.
 * 
 * De las respuestas positivas se define el score de la persona en:
 * A(> 90%), B(70% - 89%), C(45%-69%), D(<45%)
 */


var promedio = function(nombre, positivas, negativas){
    var porcPositivas = (positivas / (positivas + negativas)) *100;
    var porcNegativas = (negativas / (positivas + negativas)) *100;
    var resultado = '';

    if (porcPositivas >= 90){
        resultado = 'A'; 
    } else if (porcPositivas >= 70){
        resultado = 'B'
    } else if (porcPositivas >= 45){
        resultado = 'C';
    } else {
        resultado = 'D'
    }

    console.log(`${nombre} tiene un score de ${resultado} con ${porcPositivas}% de respuestas positivas y ${porcNegativas}% de respuestas negativas`);
}


var final = promedio('Juaco', 44, 56);

console.log(final);
































/* var calcularScore = function(nombre, positivas, negativas){
    var acertadas = (positivas / 100) * 100;
    var erradas = (negativas / 100) * 100;
    var score = ''

    if (acertadas >= 90) {
        score = 'A';
    } else if (acertadas >= 70) {
        score = 'B';
    } else if (acertadas >= 45) {
        score = 'C';
    } else {
        score = 'D';
    }
    return `${nombre} tiene el score ${score}, Positivas: ${acertadas}%, Negativas: ${erradas}%`;
}

var resultado = calcularScore('Pablo', 90, 10);

console.log(resultado); */