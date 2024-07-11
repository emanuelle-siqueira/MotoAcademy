//function nomeFuncao(params) {
//    
//}
//const funcao = nomeFuncao()
//const array = ["String", 1232, true, "hashjahdb", funcao]
//
//array[0] = "Nao quero string"
//console.log(array)
//
//const numeros = [1,2,3,4];
//numeros.push(5)
//console.log(numeros);
//
//numeros.pop()
//console.log(numeros);
//
//numeros.map((item)=> {
//    console.log(item);
//})
//
//const testeNumeros = numeros.filter((item) => item != 2)
//console.log(testeNumeros);
//
//
//const pessoa = {
//    nome: "Eduardo",
//    idade: 22,
//    profissao: "estudante",
//    saudacao: function() {
//        console.log("oi, glr")
//    }
//}
//
//console.log(pessoa);
//console.log(pessoa.nome);
//console.log(pessoa.idade);
//
//pessoa.saudacao()

//for (let i = 0; i < 5; i++) {
//    //const element = array[i];
//    
//    //console.log(i);
//    if (i == 2) {
//        continue
//    }
//    console.log(i);
//    if(i == 3){
//        break
//    }
//}
//let j = 0
//while (j < 7) {
//    console.log(j);
//    j++
//}
//let i = 0
//do {
//   console.log(i);
//   i++ 
//} while (i<5);

const pessoas = [
    {
        nome: "emanuelle",
        idade: 20,
        profissao: "universitaria"
    },
    {
        nome: "rafa",
        idade: 21,
        profissao: "riachucu"
    },
    {
        nome: "gabi",
        idade: 25,
        profissao: "clt"
    },
    {
        nome: "breno",
        idade: 22,
        profissao: "gp sidia"
    }

]

for (let contador = 0; contador < pessoas.length; contador++) { //mais rapido
    if (pessoas[contador].idade > 21){
        console.log(pessoas[contador]);
    }
    
}

pessoas.map((pessoa) => { //funcao criada com parametros
    if (pessoa.nome != "emanuelle") {
        console.log(pessoa);
    }
})