/* 
Projeto - Medidor de velocidade

Levando em considerção a velocidade máxima permitida de 80km/h em uma determinada rua, crie um programa que recebe do usuário um valor que representa a velocidade dele e com base nessa velocidade diga se ele tomou uma multa leve, grave ou gravíssima. Caso a velocidade esteja abaixo da velocidade máxima permitida imprima "Multa não computada, velocidade de X km/h!", caso esteja até 10km/h acima imprima "Multa LEVE computada, 10km/h acima do permitido!", caso esteja entre 11 e 20km/h acima imprima "Multa GRAVE computada, X km/h acima do permitido!", caso esteja acima de 20km/h imprima "Multa GRAVÍSSIMA computada, mais de 20km/h acima do permitido!". 

5Q's:

1. Quais são os dados de entrada necessários?
R: Valocidade máxima, velocidade do usuário.
2. O que devo fazer com esses dados?
R: Comparar os dados para aplicar a multa correta ou não aplicar a multa.
3. Quais são as restrições desse problema?
R: A velocidade máxima deve ser 80km/h, a velocidade do usuário precisa ser positiva.
4. Qual é o resultado esperado?
R: Que seja comparada a velocidade do usuário com a velocidade máxima e aplicado a multa leve, grave ou gravíssima de acordo com a diferença da comparação.
5. Qual é a sequência de passos a serem feitas para chegar no resultado esperado?
R: Deveria ser feito em pseudocódigo ou fluxogramas, mas ja ta em código mesmo.
*/

let max_speed = 80;
let user_speed = Math.floor(Math.random() * (120 - 60) + 60);
var difference = user_speed - max_speed;
console.log(user_speed);

if (user_speed <= max_speed) {
  console.log("Multa NÃO computada, velocidade de " + user_speed + "km/h!"  );
} if (user_speed > max_speed + 1 && user_speed <= max_speed + 10) {
  console.log("Multa LEVE computada, velocidade de " + difference + "km/h acima do permitido!");
} if (user_speed > max_speed + 11 && user_speed <= max_speed + 20) {
  console.log("Multa GRAVE computada, velocidade de " + difference + "km/h acima do permitido!");
} if (user_speed > max_speed + 21) {
  console.log("Multa GRAVÍSSIMA computada, velocidade de " + difference + "km/h acima do permitido!");
}; 