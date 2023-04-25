// 7º Problema: Receba um número e imprima seu fatorial

let num = parseInt(prompt("Digite um número para descubrir seu fatorial"));
let factorial = 1;

if (num > 0) {
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  };
  console.log("O fatorial de " + num + " é " + factorial + "!");
};