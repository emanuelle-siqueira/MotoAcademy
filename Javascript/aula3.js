/*
Arrays:
[A B C B].map([ABC] -> B) --> [B B B B]
[A B C B].filter([ABC] === C) --> [C]
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
[N P Q P].fil(Q, 1) --> [N Q Q Q]
*/ 

// -------- PRATICA -------
//var arr3 = ["A", "B", "c", "b", "B"] //STRINGGGG
////console.log(arr3);
//console.log(arr3.slice(2, 4));

//var arr = ["Aula1", "Aula2", "Aula3"]
//console.log(arr.push("Aula4"));
//console.log(arr);

//var arr1 = ["N" ,"P" ,"Q" ,"P" ,"P"]
//console.log(arr1.pop());
//console.log(arr1);
//
//var arr2 = ["N" ,"P" ,"Q" ,"P" ,"P"]
//console.log(arr2.shift());
//console.log(arr2);
//
//var arr3 = ["N" ,"P" ,"Q" ,"P" ,"P"]
//console.log(arr3.sort());
//
//var arr4 = ["n", "p", "q", "p"]
//console.log(arr4.fill("p", 1));

