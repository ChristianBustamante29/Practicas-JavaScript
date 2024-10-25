// Manejo de fecha y hora

// const ahora = new Date();
// const timestamp = ahora.getTime();
// console.log(timestamp.toString());

// const fechaActual = new Date(timestamp);
// console.log(fechaActual.getFullYear());

// const fecha1 = new Date("December 17, 1995 06:20:00");
// console.log(ahora.toString());
// console.log(fecha1.toString());

// console.log(`Año: ${ahora.getFullYear()}`);
// console.log(`Mes: ${ahora.getMonth()}`);
// console.log(`Día: ${ahora.getDate()}`);
// console.log(`Día de la semana: ${ahora.getDay()}`);
// console.log(`Hora: ${ahora.getHours()}`);
// console.log(`Minutos: ${ahora.getMinutes()}`);
// console.log(`Segundos: ${ahora.getSeconds()}`);


/*
Ejercicio de comparacion de fechas.
Crear dos objetos Date, uno con una fecha cualquiera y el siguiente
con la fecha actual, luego compara ambos valores,
visualizar cual es la fecha menor a la otra.

*/

const fecha1 = new Date("January 29 2000 15:30:25");

const fecha2 = new Date();

const timestampFecha1 = fecha1.getTime();
const timestampFecha2 = fecha2.getTime();

if(timestampFecha1 < timestampFecha2){
    console.log(fecha1.toString());
} else if(timestampFecha2 < timestampFecha1){
    console.log(fecha2.toString());
}
