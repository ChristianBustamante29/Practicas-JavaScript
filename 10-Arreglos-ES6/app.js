// Arreglos en ES6+

const ceviche = [
    {
        codigo: 1,
        titulo: 'pescado'
    },
    {
        codigo: 2,
        titulo: 'mariscos',
        tipo: 'frescos'
    },
    {
        codigo: 3,
        titulo: 'cebolla'
    }
];

// console.log(ceviche.pop());

// ceviche.push('limón');

// ceviche.shift();
// ceviche.unshift('papas');

// console.log(ceviche);

// ceviche[0] = 'papas';


// ceviche.splice(1,0,'limon');
// console.log(ceviche);

// ceviche.forEach(function(item, index){
//     console.log(index);
//     console.log(item);
// });

// for(let i=0; i < ceviche.length; i++){
//     console.log(`Indice ${i}: ${ceviche[i]}`);
// }

const buscarIngrediente = function(ceviche, titulo){
    const index = ceviche.findIndex(function(ing, index){
        return ing.titulo === titulo;
    });
    return index;
}

const filtrarIngredientes = ceviche.filter(function(ing, index){
    const ingredientes = ing.titulo.includes('mar');
    return ingredientes;
});

// console.log(filtrarIngredientes);

console.log(ceviche);
ceviche.sort(function(a,b){
    if(a.titulo > b.titulo){
        return 1;
    }
    if(a.titulo < a.titulo){
        return -1;
    }
    return 0;
});

console.log(ceviche);


// const paises = ['Colombia', 'Ecuador', 'Peru', 'España', 'Mexico'];
// console.log(paises.filter(pais => pais.includes('Es')));

// const index = ceviche.findIndex(function(ing, index){
//     // console.log(ing);
//     return ing.titulo === 'cebolla';
// })

// console.log(buscarIngrediente(ceviche, 'mariscos'));
// console.log(ceviche[buscarIngrediente(ceviche, 'mariscos')]);
