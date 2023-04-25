// Coleções(listas)

// var prices = [20,50,200];
// console.log(prices[0]);
// console.log(prices.indexOf(200));

// Diversidade 

// var x = [true,15,"John"];
// for (let i = 0; i < x.length; i++) {
//   console.log(x[i]);
// };

// 8º Problema: Dado uma coleção de dados "idades" [15,46,75,34,23] imprima na tela a soma destes valores

// var idades = [15,46,75,34,23];
// var x = 0;
// var soma = 0;
//  while (x < idades.length) {
//    soma = soma + idades[x]
//    x++
//  };
//  console.log(soma);

var idades = [20,20,20,20,20];
var soma = 0;
for (i in idades) {
  soma = soma + idades[i]
};
console.log(soma);