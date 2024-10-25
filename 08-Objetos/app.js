// let miLibroA = {
//     titulo: 'El libro de JavaScript',
//     autor: 'Grover Pablo Vasquez',
//     paginas: 400,
//     publicado: false
// }

// let miLibroB = {
//     titulo: 'Programacion en PHP',
//     autor: 'Pablo Vasquez',
//     paginas: 700,
//     publicado: true
// }

// console.log(miLibroA.publicado);
// console.log(`${miLibroA.titulo} creado por ${miLibroA.autor}`);

// miLibroA.paginas = 500;

// console.log(miLibroA.paginas);

// let getResumen = (libro) => {
//     return {
//         resumen: `${libro.titulo} creado por ${libro.autor}`,
//         resumenPaginas: `${libro.titulo} tiene ${libro.paginas} paginas`
//     }
// }

// let libroAResumen = getResumen(miLibroA);
// let libroBResumen = getResumen(miLibroB);

// console.log(libroAResumen.resumen);
// console.log(libroAResumen.resumenPaginas);

// console.log(libroBResumen.resumen);
// console.log(libroBResumen.resumenPaginas);




// Ejercicio, crear un objeto persona que tengas las siguentes prop:
// Nombre, edad, ciudad
// Cmabiar la edad
// Mostrar datos de la persona


// let persona = {
//     nombre: 'Juan Rulfo',
//     edad: 39,
//     ciudad: 'Durango'
// }

// persona.edad = 24;

// console.log(`${persona.nombre} tiene ${persona.edad} años de edad y es de ${persona.ciudad}`);


// Referencia de objetos

// let persona = {
//     nombre: 'Pablo',
//     edad: 30,
//     sueldo: 1200
// }

// let otraPersona = persona;
// otraPersona.sueldo = 1500;
// console.log(otraPersona);

// let cambiarSueldo = (p, monto) => {
//     p.sueldo = p.sueldo + monto;
    // console.log(person);
// }

// cambiarSueldo(persona, 500);
// console.log(otraPersona);
// console.log(persona);



// Metodos

// let persona = {
//     nombre: 'Pablo',
//     edad: 30,
//     sueldo: 1200,
//     metodoPrueba: function(){
        // console.log('Escribiendo desde el metodo Prueba');
//         return 'Resultado desde prueba';
//     },
//     cambiarEdad: function(edad){
//         this.edad = this.edad + edad;
//     }
// }

// let result = persona.metodoPrueba();
// console.log(result);
// persona.cambiarEdad(3);
// console.log(persona.edad);

/////////////////////////// String ////////////////////////////////

// let nombre = ' Grover Vasquez ';
// let clave = '123cris456.b';

// console.log(nombre.length);
// console.log(nombre.toUpperCase());
// console.log(nombre.toLowerCase());

// console.log(nombre.trim());
// console.log(clave.includes('cris', 3));

//////////////////////////// Destructuración de objetos //////////////////////////////

// Expresiones literales de objetos

const getPersonaDatos = () => {
    const respuesta = [
        {
            codigo: 200,
            data: {
                persona: {
                    nombre: 'Pablo',
                    direccion: {
                        ciudad: 'Lima',
                        pais: 'Peru'
                    }
                }
            }
        },
        {
            codigo: 300,
            data: {
                persona: {
                    nombre: 'Ana',
                    direccion: {
                        ciudad: 'Santiago',
                        pais: 'Chile'
                    }
                }
            }
        },
        {
            codigo: 400,
            data: {
                persona: {
                    nombre: 'Jose',
                    direccion: {
                        ciudad: 'Bogota',
                        pais: 'Colombia'
                    }
                }
            }
        },
    ]
    return respuesta;
}



let { codigo : status, data : {persona : { nombre : nom}} } = getPersonaDatos()[0];

for (const { codigo : status, data : { persona : { nombre : nom }}} of getPersonaDatos()){
    console.log(nom);
}

