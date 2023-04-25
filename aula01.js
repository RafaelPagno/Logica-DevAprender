// Aula 1 - Variables

// Numbers
var internet_speed = 10;
// console.log(internet_speed);

var movie_rate = 8.5; // Float Example

// Boolean
var is_open = false;

// Strings
var course_name = "Programming Logic"; 

// 1º Problem - Escreva um programa que retorna o valor hora de um funcionário com base no seu salário mensal e horas trabalhadas por mês.

var salario_mensal = prompt("Qual é o seu salário mensal?");
var horas_mes = prompt("Quantas horas você trabalha por mês?");

var valor_hora = salario_mensal / horas_mes

console.log("Você ganha R$" + valor_hora.toFixed(2) + " por hora!");