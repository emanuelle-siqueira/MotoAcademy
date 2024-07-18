//const {nome, idade, soma, areaCirculo, PI} = require('./moduloA')
////const moduloA = require('./moduloA')
//
//console.log(nome);
//console.log(idade);
//console.log(soma(2,2));
//
//console.log(areaCirculo(2));
//console.log(PI);
//
////console.log(moduloA);

const moduloA = require('./moduloA');

//console.log(moduloA);
//console.log(moduloA.nome);
//console.log(moduloA.idade);
//console.log(moduloA.cidade);

console.log(moduloA);

moduloA.map((item) => {
    console.log(item.time);
})