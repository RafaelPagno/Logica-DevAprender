// Aula 2 - Condicionais - if, else if and else

/*
var work_done = false;
if (work_done == true) {
  console.log("Yeah, let's go out!")
} else {
  console.log("Nah, I can't go out today!")
} */

/*
var times_late = prompt("Quantas vezes já chegou atrasado?");
if (times_late >= 3) {
  console.log("Você está suspenso!")
} if (times_late == 1) {
  console.log("Pode entrar, mas mais 2 faltas e estará suspenso!");
} if (times_late == 2) {
  console.log("Pode entrar, mas mais 1 falta e estará suspenso!");
} else {
  console.log("Pode entrar!")
}; */

// 6º Problema: Encontre o maior entre dois números

let first_num = prompt("Escreva o primeiro número: ");
let second_num = prompt("Escreva o segundo número: ");
first_num = Number(first_num); 
second_num = Number(second_num);
if (second_num < first_num) {
  console.log("O primeiro número é maior que o segundo!")
} if (second_num > first_num) {
  console.log("O segundo número é maior que o primeiro!")
} else {
  console.log("Os números são iguais!")
};