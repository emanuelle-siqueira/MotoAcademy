/*
Arrays:
[A B C B].map([ABC] -> B) --> [B B B B] ***** mais utilizado
[A B C B].filter([ABC] === C) --> [C] ***** tmb mais utilizado, com varias outras "ramificações"
[A B C B].join("-") --> "A-B-C-B"
[A B].concat([C B]) --> [A B C B]
[A B[C B]].flat() --> [A B C B]
[A B c b B].slice(2,4) --> [c B]


-- edição array --
[N P Q].forEach((NPQ) -> Q) --> [Q Q Q]
[N P Q P].push(P) --> [N P Q P P] === joga no final e imprime a quantidade do array
[N P Q P P].pop() --> [N P Q P] === tira no fim
[N P Q P P].shift() --> [P Q P P] === tira no inicio
[N P Q P].sort(P) --> [N P P Q]
[N P Q P].fill(Q, 1) --> [N Q Q Q]

--- pesquisa de array ---
[A b C B].find ->(ABC === b) ---> b
[A B c B].findIndex(ABC === C) ---> 2  *** comparativo
[A b C B].indexOf(B) ---> 1 *** declarativo
[A B C B].some(ABC === C) ---> true
[A B C B].every(ABC === B) ---> false
[A B C B].includes(C)---> true
*/ 

//const arr1 = ["A", "b", "C", "B"] //STRINGGGG
//const found = arr1.find((e) => e === "b");
//console.log(found);

//const arr2 = ["A", "B", "c", "B"]
//const found1 = arr2.findIndex((e) => e === "c");
//console.log(found1);

//const arr3 = ["A", "b", "C", "B"]
//const found2 = arr3.indexOf("B");
//console.log(found2);

//const arr4 = ["A", "B", "C", "B"]
//const found2 = arr4.some((e) => e === "C");
//console.log(found2);

/* MANIPULAÇÃO DE STRINGS */

/* manipulação de datas */
/* get set */

let dataAtual= new Date();
console.log(dataAtual);
