// setTimeout(() => console.log('Esto aparece despues de 3 segundos.'),3000);

// JavaScrpit Asincrono

// const segundo = () => {
//     setTimeout(() => {
//         console.log('Llamada a segundo');
//     },2000);
// } 

// const primero = () => {
//     console.log('Inicio de primero');
//     segundo();
//     console.log('Fin de primero');
// }


// primero();


// const getUsuarios = () => {
//     setTimeout(() => {
//         const userIDs = [101,102,103,105];
//         console.log(userIDs);

//         setTimeout((id) => {
//             const usuario ={
//                 email:'grover@gmail.com',
//                 nombre:'Grover'
//             }
//             console.log(`${id} - ${usuario.email} - ${usuario.nombre}`);

//             setTimeout(idPermiso => {
//                 const permisos = ['admin', 'creador'];
//                 console.log(permisos);
//             },1500, userIDs[2]);
//         }, 1500, userIDs[2]);
//     }, 1500)
// }

// getUsuarios();

// Ejemplo uso de promessas
// Ejemplo 1

let promesa =new Promise((resolve, reject) => {
    if(false){
        resolve('La operacion fue exitosa');
    } else{
        reject('Hubo un error');
    }
});

promesa.then( response => {
    console.log('Response:' + response);
}).catch( error => {
    console.log('Error:' + error);
})


// Ejemplo 2
var miPromesa = Promise.resolve('Comida');
miPromesa.then( respuesta => console.log(resp));
